/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

width = $(document).width();
    if (width>768){
        num_nb = Math.round(Math.sqrt(width * 15));
    }else{
        num_nb = Math.round(Math.sqrt(width * 3));
    }
    console.log(num_nb)

particlesJS('particles-js',
{
  particles: {
    color: '#000000',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: .6,
    size: 5,
    size_random: true,
    nb: num_nb,
    line_linked: {
        enable_auto: true,
        distance: 110,
        color: '#000000',
        opacity: 1,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
    },
    anim: {
        enable: true,
        speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
        distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
        opacity: .5
    },
    events: {
        onclick: {
            enable: false,
            mode: 'push', // "push" or "remove" (particles)
            nb: 4
        }
    }
  },
  "retina_detect": true
  }

);