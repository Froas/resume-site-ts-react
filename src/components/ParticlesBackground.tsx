import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-particles";

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  const [key, setKey] = useState(0);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Update key when theme changes to recreate particles
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [theme]);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: theme === 'dark' ? "#ffffff" : "#5067EB"
      },
      shape: {
        type: "circle" as const,
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: theme === 'dark' ? "#ffffff" : "#5067EB",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none" as const,
        random: false,
        straight: false,
        out_mode: "out" as const,
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas" as const,
      events: {
        onhover: {
          enable: true,
          mode: "repulse" as const
        },
        onclick: {
          enable: true,
          mode: "push" as const
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        key={key}
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </div>
  );
};

export default ParticlesBackground; 