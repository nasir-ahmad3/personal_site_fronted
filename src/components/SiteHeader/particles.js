import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useContext, useMemo} from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ParticlesComponent = (props) => {
  const { theme } = useContext(ThemeContext);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false, // Disable full-screen mode
      },
      interactivity: {
        events: {
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        number: {
          value: 50, // Initial number of particles
          limit: 140, // Disable further particle creation on click
          density: {
            enable: true, // Adjust particle density if needed
            value_area: 800, // Adjust value based on canvas size for optimal distribution
          },
        },
        color: {
          value: theme === 'dark' ? "#319ec8" : "#ccc", // Particle color
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: {
            value: theme === 'dark' ? "#319ec8" : "#ccc", // Example: Color for links
          },
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
      background: {
        color: 'transparent', // Background color for the canvas
      },
    }),
    [theme]
  );

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <div id="particles-container" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1}}>
      <Particles id={props.id} init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesComponent;
