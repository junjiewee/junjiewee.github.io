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

/* Wrapped in a function - and re-run on every theme toggle (see
   scripts.html) - because particleColor is only read once at call
   time and then baked into the running particles.js instance. Without
   this, toggling from light to dark left the particles at their
   original light-mode color (black), which is invisible against the
   new near-black dark-mode background. */
function initParticles() {
  var particleColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#aaaaaa' : '#000000';

  /* Fixed-pixel settings below (line-linking distance especially) don't
     scale with viewport size, so the same config that looks sparse on
     desktop reads as a dense tangle of lines on a narrow phone screen.
     Scale the numbers down under the same breakpoint the mobile nav CSS
     uses, rather than dropping the effect entirely. */
  var isMobile = window.innerWidth <= 640;

  /* particlesJS() appends a fresh canvas rather than replacing the
     existing one, so re-running it without cleaning up first stacks a
     new canvas on top of the old one on every toggle. Destroy any prior
     instance and clear the container first. */
  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom.forEach(function(dom) {
      if (dom.pJS && dom.pJS.fn && dom.pJS.fn.vendors && dom.pJS.fn.vendors.destroypJS) {
        dom.pJS.fn.vendors.destroypJS();
      }
    });
    window.pJSDom = [];
  }
  var container = document.getElementById('particles-js');
  if (container) { container.innerHTML = ''; }

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": isMobile ? 25 : 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": particleColor
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
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": isMobile ? 70 : 150,
      "color": particleColor,
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": isMobile ? 3 : 6,
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
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  }

);

}

/* Deferred to window.load (fires after the full page - including
   images and fonts - has laid out at least once) rather than called
   synchronously here, since particlesJS() reads the canvas's
   offsetWidth/offsetHeight synchronously as part of its own
   constructor, and running that before the browser's first layout
   pass has settled can read back 0x0 - permanently zeroing the
   canvas's actual pixel buffer (not just its CSS display size), so
   nothing draws. Theme-toggle re-inits call initParticles() directly
   and don't need this, since the page is obviously already loaded by
   the time a user can click the toggle. */
if (document.readyState === 'complete') {
  initParticles();
} else {
  window.addEventListener('load', initParticles);
}

/* Standing watchdog, not a one-shot fix: particles.js's own resize
   handler (see particles.js - window.addEventListener('resize', ...))
   patches the canvas's pixel-buffer dimensions from
   offsetWidth/offsetHeight but never repositions existing particles,
   so if it ever runs against a stale/transitional size (web fonts
   finishing, a scrollbar appearing, mobile browser chrome
   showing/hiding, anything that resizes #particles-js without also
   firing a plain window "resize"), the canvas and the particles'
   actual coordinates can drift out of sync indefinitely - particles
   keep animating within whatever bounds they were originally given,
   which can visually read as "stuck in one region of the page" if
   that original size didn't match the real one. ResizeObserver fires
   for *any* box-size change to the element itself, not just window
   resizes, and a full initParticles() re-creates the particles fresh
   against the current real size rather than patching stale ones. */
if (window.ResizeObserver) {
  var particlesResizeCheckPending = false;
  var particlesResizeObserver = new ResizeObserver(function(entries) {
    if (particlesResizeCheckPending) return;
    particlesResizeCheckPending = true;
    requestAnimationFrame(function() {
      particlesResizeCheckPending = false;
      var box = entries[0].contentRect;
      var canvas = document.querySelector('#particles-js canvas');
      if (!canvas) return;
      var dpr = window.devicePixelRatio || 1;
      var expectedW = Math.round(box.width * dpr);
      var expectedH = Math.round(box.height * dpr);
      if (Math.abs(canvas.width - expectedW) > 2 || Math.abs(canvas.height - expectedH) > 2) {
        initParticles();
      }
    });
  });
  window.addEventListener('load', function() {
    var el = document.getElementById('particles-js');
    if (el) { particlesResizeObserver.observe(el); }
  });
}
