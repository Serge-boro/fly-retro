
 const flint = document.querySelector('#flint3'); 
 let pos = 0;
 function myAnimation() {

        pos+=3;  
        flint.style.display = 'block';
        flint.style.top = pos + 'px';
        if (pos<600) requestAnimationFrame (myAnimation);
        else  {
          flint.style.display = 'none';
           pos = 0;
           const id = requestAnimationFrame(myAnimation);
           cancelAnimationFrame(id);
        }
     }



 function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }
 
 function quad(timeFraction) {
      return Math.pow(timeFraction, 2);
    }

 function drop_flint() {

       let height = 600;
      let width = 200;
       
      flint1.style.display = 'block';
      flint2.style.display = 'block';

      animate({
        duration: 4000,
        // timing: makeEaseOut(bounce),
        timing: makeEaseOut(quad),
        draw: function(progress) {
 
          flint1.style.top = height * progress + 'px'
          flint2.style.top = height * progress + 'px'
        }
      });

      animate({
        duration: 1000,
        timing: makeEaseOut(quad),
        draw: function(progress) {
          flint1.style.left = width * progress + "px"
          flint2.style.left = -width * progress + "px"
          
        }
      });
    }
  

