const particleOptions = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "trail",
      },
      resize: true,
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 2,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 400,
              sync: true,
            },
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: true,
          },
          move: {
            outMode: "destroy",
            speed: 1,
          },
          size: {
            value: 4,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 1,
              sync: true,
              startValue: "min",
              destroy: "max",
            },
          },
        },
      },
    },
    resize: true,
  },
  particles: {
    color: {
      value: "random",
    },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 200,
      },
      value: 20,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 4,
    },
  },
  detectRetina: true,
};

export default particleOptions;
