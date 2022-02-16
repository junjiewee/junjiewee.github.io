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


width = $(window).width();
    if (width>768){
        num_nb = Math.round(Math.sqrt(width * 15));
    }else{
        num_nb = Math.round(Math.sqrt(width * 3));
    }
    console.log(num_nb)

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 100,
      "density_auto": true,
      "density_area": num_nb,
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.2,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#000000",
      "opacity": 0.5,
      "width": 1.121687017273981
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
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