particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#6a1b9a" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6a1b9a",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false }
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.5 } }
    }
  },
  retina_detect: true
});
