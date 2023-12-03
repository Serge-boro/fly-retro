
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 800;
canvas.width = 1200;

 const article = document.querySelectorAll('article'),
 	     article1 = document.querySelector('.article1'),
 	     article2 = document.querySelector('.article2');

const flymen2img = new Image();
flymen2img.src = 'img/flymen2_1_1.png';
const flyimg = new Image();
flyimg.src = 'img/fly3.png';
const litterimg = new Image();
litterimg.src = 'img/flip_ship_2.png';
const background = new Image();
background.src = "img/background4.jpg";
const fon_startimg = new Image();
fon_startimg.src = "img/background2_black.jpg";
const bg1 = new Image();
bg1.src = "img/bg4.png";
const startFrogimg = new Image();
startFrogimg.src = "img/startfrog2_2_black.png";
const maskimg = new Image();
maskimg.src = "img/mask_black.png";
const shipimg = new Image();
shipimg.src = "img/flip_ship_2.png";
const fly22img = new Image();
fly22img.src = 'img/fly22_1.png';
const sheep_blackimg = new Image();
sheep_blackimg.src = 'img/sheep_black.png';
const start_buttonimg = new Image();
start_buttonimg.src = 'img/start_button.png';
const quit_buttonimg = new Image();
quit_buttonimg.src = 'img/over_buttons.png';
const flymen2_blackimg = new Image();
flymen2_blackimg.src = 'img/flymen2_1_1_black.png';
const bg1_black = new Image();
bg1_black.src = "img/bg4_black.png";
const fly22_blackimg = new Image();
fly22_blackimg.src = 'img/fly22_1.png';
const fon_overtimg = new Image();
fon_overtimg.src = "img/background6.jpg";
const fon_over_boardimg = new Image();
fon_over_boardimg.src = "img/board_over.png";

const start_dark_s = new Audio();
start_dark_s.src = "sou/startdark.mp3";
const game_start = new Audio();
game_start.src = "sou/getReady.mp3";
const game = new Audio();
game.src = "sou/play_game2.mp3";
const over_sound = new Audio();
over_sound.src = "sou/over.mp3";
const sheep_s = new Audio();
sheep_s.src = "sou/sheep.mp3";
const object_sound = new Audio();
object_sound.src = "sou/object.mp3";

const fly_wind=[],
      fly_can =[],
      fly_bottle1 =[],
      fly_shoe =[],
      fly_sigh =[],
     
      litter2 = [],
      litter_can = [],
      litter_sigh = [],
      litter_bottle1 = [],
      litter_shoe = [],
      
      flip2 = [];

const DEGREE = Math.PI/180;
let heard_count = 2;

 
const cursor = {
  w: 185.2,
  h: 152,
  x: 300,
  y: 300,
  frameX: 0,
  frameY: 0,

	draw() {
		 ctx.drawImage(fly22img,  this.w* this.frameX, this.h* this.frameY,  this.w, this.h, this.x, this.y, 90, 100);
     	if(this.frameX <5) {this.frameX++; this.frameY = 0; } 
   		else this.frameX = 0  
    }, 
  draw__cursor_black() {
      ctx.drawImage(fly22_blackimg,  this.w* this.frameX, this.h* this.frameY,  this.w, this.h, this.x, this.y, 90, 100);
      if(this.frameX <5) {this.frameX++; this.frameY = 0; } 
      else this.frameX = 0  
	}
}

const startFrog = {

  x_frog: 200,
  y_frog: 190,
  w_frog: 275.9,
  h_frog: 200,
  frameX: 0,
  frameY: 2,

   x_mask: 540,
  y_mask: 270,
  w_mask: 75,
  h_mask: 75,
  move: 5,

  w: 65.4,
  h: 95,
  x: 400,
  y: 300,
  frameX1: 3,
  frameY1: 1,
  move1:8,
  animx:0,


  draw: function(){
   
        if(state.current == state.startdark) {
        ctx.fillStyle = "#000"; 
        ctx.fillRect(0,0, canvas.width, canvas.height);

        ctx.drawImage(startFrogimg, this.w_frog * this.frameX, this.h_frog, this.w_frog, this.h_frog, this.x_frog, this.y_frog, 200, 200);
        ctx.drawImage(maskimg, this.x_mask, this.y_mask, this.w_mask, this.h_mask);

        this.x_mask = this.x_mask-this.move;
        if (this.x_mask <= 360) {
            this.x_mask= -100;
        }

        setTimeout(function(){
        if(startFrog.frameX <9) {
        startFrog.frameX++;
        startFrog.frameY = 1;    
        }else startFrog.frameX = 9;
        }, 3000); 
      } 
    }
  }

const flip = {
  sX: 158,
  sY: 25,
  w: 158,
  h: 130,
  x: 0,
  y: 0,
  frameX: 0,
  frameY: 0,
  dx:8,
 
  draw() {
    for (i in flip2) {
    ctx.drawImage(shipimg, flip2[i].sX_1, flip2[i].sY_1, flip2[i].w_1, flip2[i].h_1, flip2[i].x_1, flip2[i].y_1,70, 50);
    ctx.drawImage(shipimg, this.sX* this.frameX, this.sY, this.w , this.h, flip2[i].x_1+10, flip2[i].y_1-25,70, 60);
    }
    if(this.frameX <2) {this.frameX++; this.frameY = 0; } 
    else this.frameX = 0; 
    }, 

  update() {
  flip2.push({
  sX_1:0,
  sY_1: 165,
  w_1: 280,
  h_1: 175,
  x_1: -100,
  y_1: 200,
  dx_1: 8,
    });
   
         if (flip2[i].x_1 < -150) {
         flip2[i].x_1 = canvas.width + flip2[i].w_1;
         flip2[i].y_1 = Math.random()* canvas.height - flip2[i].h_1;
         }else {
          flip2[i].x_1 -=flip2[i].dx_1;  
         }
    
        for ( i in flip2) {
        if (Math.abs(flymen2.x+15-flip2[i].x_1-25)<60 && Math.abs(flymen2.y+25-flip2[i].y_1-5)<60 && Math.abs(flymen2.y-25-flip2[i].y_1+25)<100) {
          	score.value++;
          	flip2.splice(i,1);
            myAnimation();
            drop_flint();
            sheep_s.play();
          } 
        }
      }
    }

 const fon_start = {
  w: canvas.width,
  h: canvas.height,
  x:0,
  y:0,

  sX_1: 1175,
  sY_1: 60,
  w_1: 780,
  h_1: 660,
  x_1: 700,
  y_1: 300,

  sX_sheep: 160,
  sY_sheep: 60,
  w_sheep: 140,
  h_sheep: 160,
  x_sheep: 400,
  y_sheep: 570,

  w_men: 161.2,
  h_men: 151,
  x_men: 250,
  y_men: 150,
  frameX_men: 0,
  frameY_men: 0,
  

  draw() {
  	ctx.drawImage(fon_startimg, this.x, this.y, this.w, this.h);
  	ctx.drawImage(bg1_black, this.sX_1, this.sY_1, this.w_1, this.h_1, this.x_1, this.y_1,450, 400);
    ctx.drawImage(sheep_blackimg, this.sX_sheep, this.sY_sheep, this.w_sheep, this.h_sheep, this.x_sheep, this.y_sheep,150, 120);
    ctx.drawImage(flymen2_blackimg,  this.w_men* this.frameX_men, this.h_men* this.frameY_men,  this.w_men, this.h_men, this.x_men,  this.y_men, this.w_men, this.h_men);

       if(this.frameX_men <9) {this.frameX_men++; this.frameY_men = 0; } 
       else this.frameX_men = 0;
  }
 }

const fon = {
  w: canvas.width,
  h: canvas.height,
  x:0,
  y:0,
  dx: 2,

  sX_1:1175,
  sY_1: 60,
  w_1: 780,
  h_1: 660,
  x_1: 1100,
  y_1: 530,
  dx_1: 7,

  sX_2:0,
  sY_2: 320,
  w_2: 300,
  h_2: 330,
  x_2: 100,
  y_2: 30,
  dx_2: 8,

  sX_3:360,
  sY_3: 340,
  w_3: 260,
  h_3: 315,
  x_3: 1300,
  y_3: 130,
  dx_3: 6,

  sX_4:680,
  sY_4: 300,
  w_4: 420,
  h_4: 330,
  x_4: 2800,
  y_4: 430,
  dx_4: 10,
  
  sX_5:360,
  sY_5: 340,
  w_5: 260,
  h_5: 315,
  x_5: 500,
  y_5: 230,
  dx_5: 6,


  draw: function() {
  
      ctx.drawImage(background, this.x, this.y, this.w, this.h);
      ctx.drawImage(background, this.x + this.w, this.y, this.w, this.h);

      ctx.drawImage(bg1, this.sX_3, this.sY_3, this.w_3, this.h_3, this.x_3, this.y_3,150, 100);
      ctx.drawImage(bg1, this.sX_4, this.sY_4, this.w_4, this.h_4, this.x_4, this.y_4,200, 150);
      ctx.drawImage(bg1, this.sX_5, this.sY_5, this.w_5, this.h_5, this.x_5, this.y_5,150, 100);
      ctx.drawImage(bg1, this.sX_1, this.sY_1, this.w_1, this.h_1, this.x_1, this.y_1,350, 300);
      ctx.drawImage(bg1, this.sX_2, this.sY_2, this.w_2, this.h_2, this.x_2, this.y_2,200, 150); 
  },
 
  update: function () {
   
      this.x = (this.x - this.dx)%(this.w);
       
          if (this.x_1 < -400) {
          this.x_1 = canvas.width + this.w_1;
          }else {
          this.x_1 -=this.dx_1;  
          }

          if (this.x_2 < -150) {
          this.x_2 = canvas.width + this.w_2; 
          }else {
          this.x_2 -=this.dx_2;  
          }

          if (this.x_3 < -120) {
          this.x_3 = canvas.width + this.w_3; 
          }else {
          this.x_3 -=this.dx_3;  
          }

          if (this.x_4 < -200) {
          this.x_4 = canvas.width + this.w_4;
          this.y_4 = Math.random()* canvas.height - this.h_4;
          }else {
          this.x_4 -=this.dx_4;  
          }

          if (this.x_5 < -200) {
          this.x_5 = canvas.width + this.w_5;
          }else {
          this.x_5 -=this.dx_5;  
          }
     }
  };

const score = {
 
  w_btn_start_getReady_button: 160,
  h_btn_start_getReady_button: 70,
  x_btn_start_getReady_button: 460,
  y_btn_start_getReady_button: 240,

  w_btn_start_getReady: 180,
  h_btn_start_getReady: 140,
  x_btn_start_getReady: 450,
  y_btn_start_getReady: 210,

  w_btn_quit_getReady_button: 100,
  h_btn_quit_getReady_button: 80,
  x_btn_quit_getReady_button: 1050,
  y_btn_quit_getReady_button: 30,

  sX_btn_quit_getReady: 360,
  sY_btn_quit_getReady: 170,
  w_btn_quit_getReady: 270,
  h_btn_quit_getReady: 280,
  x_btn_quit_getReady: 1050,
  y_btn_quit_getReady: 30,

  w_over: 1200,
  h_over: 800,
  x_over: 0,
  y_over: 0,

  sX_over_board: 260,
  sY_over_board: 100,
  w_over_board: 530,
  h_over_board: 500,
  x_over_board: 350,
  y_over_board: 100,

  w_btn_start_over_button: 130,
  h_btn_start_over_button: 70,
  x_btn_start_over_button: 510,
  y_btn_start_over_button: 585,

  sX_btn_start_over: 680,
  sY_btn_start_over: 170,
  w_btn_start_over: 240,
  h_btn_start_over: 280,
  x_btn_start_over: 500,
  y_btn_start_over: 570,

  sX_sheep_score: 0,
  sY_sheep_score: 160,
  w_sheep_score: 265,
  h_sheep_score: 170,
  x_sheep_score: 70,
  y_sheep_score: 30,
  
  best : parseInt(localStorage.getItem("best_score")) || 0,
  value : 0,

	draw_getReady() {
        ctx.drawImage(start_buttonimg,  this.x_btn_start_getReady,this.y_btn_start_getReady, this.w_btn_start_getReady, this.h_btn_start_getReady);
	      ctx.drawImage(quit_buttonimg,  this.sX_btn_quit_getReady, this.sY_btn_quit_getReady, this.w_btn_quit_getReady,this.h_btn_quit_getReady, this.x_btn_quit_getReady, this.y_btn_quit_getReady, 100, 80);
   },  

  draw_over() {
	 ctx.drawImage(fon_overtimg, this.x_over, this.y_over, this.w_over, this.h_over);
	 ctx.drawImage(fon_over_boardimg, this.sX_over_board, this.sY_over_board, this.w_over_board, this.h_over_board, this.x_over_board, this.y_over_board,this.w_over_board, this.h_over_board);
	 ctx.drawImage(quit_buttonimg,  this.sX_btn_start_over, this.sY_btn_start_over, this.w_btn_start_over,this.h_btn_start_over, this.x_btn_start_over, this.y_btn_start_over, 150, 100);
	 ctx.drawImage(quit_buttonimg,  this.sX_btn_quit_getReady, this.sY_btn_quit_getReady, this.w_btn_quit_getReady,this.h_btn_quit_getReady, this.x_btn_quit_getReady, this.y_btn_quit_getReady, 100, 80);
   },

	draw() {
        
	  this.best = Math.max(this.value, this.best);
    localStorage.setItem("best_score", this.best);

    ctx.lineWidth = 1;
    ctx.font = "80px Teko";
    ctx.fillStyle = "#b7a8bd";
    ctx.strokeStyle = "#000";
    ctx.fillText(this.value, 20, 90);
    ctx.strokeText(this.value, 20, 90);
    ctx.drawImage(shipimg, this.sX_sheep_score, this.sY_sheep_score, this.w_sheep_score, this.h_sheep_score, this.x_sheep_score, this.y_sheep_score, 90, 60);
 },

  	draw_finally() {

    // SCORE VALUE
    ctx.lineWidth = 1;
    ctx.font = "80px Teko";
    ctx.fillStyle = "#b7a8bd";
    ctx.strokeStyle = "#000";
    ctx.fillText(this.value, 680, 380);
    ctx.strokeText(this.value, 680, 380);
     // BEST SCORE
    ctx.fillText(this.best, 680, 480);
    ctx.strokeText(this.best, 680, 480); 
  		},
	};

const litter = {

  draw() {
   for (i in litter2) {ctx.drawImage(litterimg,  litter2[i].sX, litter2[i].sY, litter2[i].w, litter2[i].h, litter2[i].x, litter2[i].y, 80, 70)};
   for (i in litter_can) {ctx.drawImage(litterimg,  litter_can[i].sX, litter_can[i].sY, litter_can[i].w, litter_can[i].h, litter_can[i].x, litter_can[i].y, 50, 40)};
   for (i in litter_bottle1) {ctx.drawImage(litterimg,  litter_bottle1[i].sX, litter_bottle1[i].sY, litter_bottle1[i].w, litter_bottle1[i].h, litter_bottle1[i].x, litter_bottle1[i].y, 70, 30)};
   for (i in litter_shoe) {ctx.drawImage(litterimg,  litter_shoe[i].sX, litter_shoe[i].sY, litter_shoe[i].w, litter_shoe[i].h, litter_shoe[i].x, litter_shoe[i].y, 60, 60)};
   for (i in litter_sigh) {ctx.drawImage(litterimg, litter_sigh[i].sX, litter_sigh[i].sY, litter_sigh[i].w, litter_sigh[i].h, litter_sigh[i].x, litter_sigh[i].y, 85, 45)};
  },

  update() {
  litter2.push ({
  sX: 590,
  sY: 230,
  w: 190,
  h: 160,
  x: -100,
  y: 0,
  speed: 12,
    });

      for (i in litter2) {
     if (Math.abs(flymen2.x+15-litter2[i].x-25)<60 && Math.abs(flymen2.y+25-litter2[i].y-5)<60 && Math.abs(flymen2.y-25-litter2[i].y+25)<100)   {
        litter2.splice(i,1);
        flymen2.speed = + flymen2.jump;
        remove_heard();
        heard_count--;
        object_sound.play();
        }
       } 
     
 		 for (i in fly_wind) {
          if (litter2[i].x < 0) {
          litter2[i].x = canvas.width + litter2[i].w;
          litter2[i].y = Math.random()* canvas.height - litter2[i].h;
          fly_wind[i].y = litter2[i].y-35;
          }
          else {
           litter2[i].x -=litter2[i].speed;
           fly_wind[i].x = litter2[i].x+35;
      }
     }

     	for ( i in litter_sigh){
        if (Math.abs(flymen2.x+15-litter_sigh[i].x-25)<60 && Math.abs(flymen2.y+25-litter_sigh[i].y-5)<60 && Math.abs(flymen2.y-25-litter_sigh[i].y+25)<100)   {
        litter_sigh.splice(i,1);
        flymen2.speed = + flymen2.jump;
        remove_heard();
        heard_count--;
        object_sound.play();
   		 }
      }

        for (i in litter_shoe) {
        if (Math.abs(flymen2.x+15-litter_shoe[i].x-25)<60 && Math.abs(flymen2.y+25-litter_shoe[i].y-5)<60 && Math.abs(flymen2.y-25-litter_shoe[i].y+25)<100)   {
        litter_shoe.splice(i,1);
        flymen2.speed = + flymen2.jump;
        remove_heard();
        heard_count--;
        object_sound.play();
        }
       } 

       for (i in litter_bottle1) {
     	  if (Math.abs(flymen2.x+15-litter_bottle1[i].x-25)<60 && Math.abs(flymen2.y+25-litter_bottle1[i].y-5)<60 && Math.abs(flymen2.y-25-litter_bottle1[i].y+25)<100)   {
        litter_bottle1.splice(i,1);
        flymen2.speed = + flymen2.jump;
        remove_heard();
        heard_count--;
        object_sound.play();
        }
       } 

  litter_can.push ({
  sX: 570,
  sY: 0,
  w: 330,
  h: 180,
  x: -1350,
  y: 0,
  speed: 22,
    });

    for (i in litter_can) {
     if (Math.abs(flymen2.x+15-litter_can[i].x-25)<60 && Math.abs(flymen2.y+25-litter_can[i].y-5)<60 && Math.abs(flymen2.y-25-litter_can[i].y+25)<100)   {
        litter_can.splice(i,1);
        flymen2.speed = + flymen2.jump;
        remove_heard();
        heard_count--;
        object_sound.play();
       } 
     } 

     for (i in fly_can) {
          if (litter_can[i].x < 0) {
          litter_can[i].x = canvas.width + litter_can[i].w;
          litter_can[i].y = Math.random()* canvas.height - litter_can[i].h;
          fly_can[i].y = litter_can[i].y-35;
          } else {
           litter_can[i].x -=litter_can[i].speed;
           fly_can[i].x = litter_can[i].x+35;
        }
     }

	  litter_bottle1.push ({
	  sX: 1110,
	  sY: 180,
	  w: 200,
	  h: 70,
	  x: -200,
	  y: 400,
	  speed: 25,
	    });

	   	  for (i in fly_bottle1) {
          if (litter_bottle1[i].x < 0) {
          litter_bottle1[i].x = canvas.width + litter_bottle1[i].w;
          litter_bottle1[i].y = Math.random()* canvas.height - litter_bottle1[i].h;
           fly_bottle1[i].y = litter_bottle1[i].y-35;
          }
          else {
           litter_bottle1[i].x -=litter_bottle1[i].speed;
            fly_bottle1[i].x = litter_bottle1[i].x+35;
        }
      }

	  litter_shoe.push ({
	  sX: 825,
	  sY: 190,
	  w: 260,
	  h: 260,
	  x: -1750,
	  y: 200,
	  speed: 15,
	    });

	     	  for (i in fly_shoe) {
          if (litter_shoe[i].x < 0) {
          litter_shoe[i].x = canvas.width + litter_shoe[i].w;
          litter_shoe[i].y = Math.random()* canvas.height - litter_shoe[i].h;
           fly_shoe[i].y = litter_shoe[i].y-10;
          }
          else {
           litter_shoe[i].x -=litter_shoe[i].speed;
            fly_shoe[i].x = litter_shoe[i].x+35;
        }
      }

	litter_sigh.push ({
	  sX: 925,
	  sY: 0,
	  w: 360,
	  h: 175,
	  x: -1400,
	  y: 300,
	  speed: 20,
	    });

	  	  for (i in fly_sigh) {
          if (litter_sigh[i].x < 0) {
          litter_sigh[i].x = canvas.width + litter_sigh[i].w;
          litter_sigh[i].y = Math.random()* canvas.height - litter_sigh[i].h;
           fly_sigh[i].y = litter_sigh[i].y-35;
          }
          else {
          litter_sigh[i].x -=litter_sigh[i].speed;
          fly_sigh[i].x = litter_sigh[i].x+60;
          }
        }
      } 
    }

const flymen2 = {
    w: 161.2,
    h: 151,
    x: 300,
    y: 150,
    frameX: 0,
    frameY: 0,
  
    gravity: 0.25,
    jump: 4.6,
    speed: 0,
    rotation: 0,
 

  draw: function() {

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(flymen2img,  this.w* this.frameX, this.h* this.frameY,  this.w, this.h, -this.w/2,  -this.h/20, this.w, this.h);
        if(this.frameX <9) {this.frameX++; this.frameY = 0; } 
        else this.frameX = 0;
        ctx.restore();
    },

flip: function() {
    this.speed = - this.jump;
},
 update: function() {


      this.speed +=this.gravity;
      this.y +=this.speed;

      if(this.speed >=this.jump) {
      this.rotation = 5*DEGREE;
      }else {
        this.rotation = -5 *DEGREE;
      }

      if (this.y + this.h/2 <=canvas.height - fon.h) {
        this.y = canvas.height - fon.h - this.h/2;
      }
      if (this.y + this.h/2 >= canvas.height-this.h/2) {
        this.y = canvas.height - this.h/2;
        delete_all_heard();
      if (state.current == state.game) {
          state.current = state.over; 
        }
      }
      if (heard_count <=-1) {
        if (state.current == state.game) {
          state.current = state.over; 
        }
      }  
    }
  }



class fly{
  constructor(width, height, frameX, frameY,){
   
    this.w = width;
    this.h = height;
    this.frameX = frameX;
    this.frameY = frameY;
  }

  draw() {
  ctx.drawImage(flyimg,  this.w * this.frameX, this.h * this.frameY,  this.w, this.h, this.x, this.y,  130, 110);
  this.frameX++; 
  if(this.frameX >=4) { this.frameY++; this.frameX = 0;} 
  if(this.frameY >1) {this.frameY = 0; this.frameX =0 }
    };
  }

 fly_wind.push(new fly(150, 140, 0, 0));
 fly_can.push(new fly(150, 140, 0, 0));
 fly_bottle1.push(new fly(150, 140, 0, 0));
 fly_shoe.push(new fly(150, 140, 0, 0));
 fly_sigh.push(new fly(150, 140, 0, 0));

  const state = {
      current : 0,
      startdark: 0,
      getReady : 1,
      game : 2,
      over : 3,
  };

    canvas.addEventListener("mousemove", function(event) {
    	cursor.x=event.offsetX-50;
    	cursor.y=event.offsetY-50;
    })


    const startdark = setTimeout(function(){    
    if(state.current == state.startdark) state.current = state.getReady;        
    }, 9000);

canvas.addEventListener("click", function(evt){
    switch(state.current){
        // case state.startdark:
        //  state.current = state.getReady;
        //   break;

        case state.getReady:
            
            let rect = canvas.getBoundingClientRect();
            let clickX = evt.clientX - rect.left;
            let clickY = evt.clientY - rect.top;

            let rect2 = canvas.getBoundingClientRect();
            let clickX2 = evt.clientX - rect2.left;
            let clickY2 = evt.clientY - rect2.top;
                         
        if(clickX >= score.x_btn_start_getReady_button && clickX <= score.x_btn_start_getReady_button + score.w_btn_start_getReady_button && clickY >= score.y_btn_start_getReady_button && clickY <= score.y_btn_start_getReady_button + score.h_btn_start_getReady_button){
                 state.current = state.game;
                  reset();
                }

        if(clickX2 >= score.x_btn_quit_getReady_button && clickX2 <= score.x_btn_quit_getReady_button + score.w_btn_quit_getReady_button && clickY2 >= score.y_btn_quit_getReady_button && clickY2 <= score.y_btn_quit_getReady_button + score.h_btn_quit_getReady_button){
                 windowClose();
          }
        break;

        case state.game: 
            flymen2.flip();  
         
             break;
        if (state.current == state.game) state.current = state.over;
        case state.over:

         	  let rect3 = canvas.getBoundingClientRect();
            let clickX3 = evt.clientX - rect3.left;
            let clickY3 = evt.clientY - rect3.top;

            let rect4 = canvas.getBoundingClientRect();
            let clickX4 = evt.clientX - rect4.left;
            let clickY4 = evt.clientY - rect4.top;

        if(clickX3 >= score.x_btn_start_over_button && clickX3 <= score.x_btn_start_over_button + score.w_btn_start_over_button && clickY3 >= score.y_btn_start_over_button && clickY3 <= score.y_btn_start_over_button + score.h_btn_start_over_button){
           state.current = state.getReady;
          }
             
        if(clickX4 >= score.x_btn_quit_getReady_button && clickX4 <= score.x_btn_quit_getReady_button + score.w_btn_quit_getReady_button && clickY4 >= score.y_btn_quit_getReady_button && clickY4 <= score.y_btn_quit_getReady_button + score.h_btn_quit_getReady_button){
           windowClose();
    	}
    		break;
        }
      });

function draw() {

    startFrog.draw();
  	if (state.current == state.startdark) {
  		sound_start();
  	}
       
     if (state.current == state.getReady) {
     	fon_start.draw();
      flymen2.y = 150;
      flymen2.rotation = 0*DEGREE;
      startAnimating(8);
      score.draw_getReady();
      cursor.draw__cursor_black();
      start_dark_s.pause();
      start_dark_s.currentTime = 0;
      over_sound.pause();
      over_sound.currentTime = 0;
      game_start.play();
    }

 if (state.current == state.game){
    fon.draw();
    litter.draw();
    flip.draw();
    flymen2.draw();
    fly_wind[0].draw();
    fly_can[0].draw();
    fly_bottle1[0].draw();
    fly_shoe[0].draw();
    fly_sigh[0].draw();
    startAnimating(14);
	  score.draw();
	  game_start.pause();
    game_start.currentTime = 0;
    game.play(); 
  }
    
  if (state.current == state.over) {
  	score.draw_over();
  	score.draw_finally();
  	cursor.draw__cursor_black();
  	startAnimating(8);
  	game.pause();
    game.currentTime = 0;
    over_sound.play();	 
  	}
  }

function update() {
   if (state.current == state.game){
   
   flymen2.update();
   fon.update();

   const pause = setTimeout(() => {
    litter.update();
   	flip.update();
	},5000);
 }
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
   
}

function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now-then;
  if(elapsed >fpsInterval) {
  then = now - (elapsed % fpsInterval);

  ctx.clearRect(0,0, canvas.width, canvas.height);

    draw();
    update();
 
   }
}
startAnimating(10);

 window.addEventListener('resize', function() {
  canvas.height = 800;
  canvas.width = 1200;
});

function windowClose() {
  window.close();
};

 function remove_heard() {
  const heard = document.querySelector('#heard span');
    heard.remove();
 }

 function delete_all_heard() {
    const heard = document.querySelectorAll('#heard span');
    heard.forEach(item => {
    item.remove();
    })
 }

function reset() {
  const span = document.createElement('span');
  span.classList.add('heard1');
  document.querySelector('#heard').append(span);
  const span2 = document.createElement('span');
  span2.classList.add('heard1');
  document.querySelector('#heard').append(span2);
  const span3 = document.createElement('span');
  span3.classList.add('heard1');
  document.querySelector('#heard').append(span3);
  heard_count = 2;

   for(i in litter2){litter2.splice(i,1) } 
   for(i in litter_bottle1){litter_bottle1.splice(i,1)} 
   for(i in litter_can){litter_can.splice(i,1)} 
   for(i in litter_shoe){litter_shoe.splice(i,1)} 
   for(i in litter_sigh){litter_sigh.splice(i,1)} 
   for(i in flip2){flip2.splice(i,1)}
   fly_wind.splice(1);  

   score.value = 0;
  }

 function sound_start() {
     let start_w = start_dark_s.play(); 
      if (start_w !== undefined) {
      start_w.then(() => {
        start_dark_s.play(); 
      }).catch(error => {
        console.log('Autoplay was prevented'); 
      });
    } 
  }; 
 
    const hideElement = () => {
      article1.classList.add('hide');
      article2.classList.add('show');
    };
    const deleteElement = (e) => {
        e.target.remove();
      };
  	article.forEach(btn => {
	  btn.addEventListener('click', hideElement);
    });

    article.forEach(btn => {
    btn.addEventListener('click', deleteElement);
    });
