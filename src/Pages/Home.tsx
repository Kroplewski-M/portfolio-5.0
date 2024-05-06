import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { DownSVG } from "../SVGs/DownSVG";
export const Home = () => {
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <section className="w-[100%] height-[100vh]" id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#222222",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="w-[100%] h-[100%] z-50 relative pointer-events-none animate-fadeIn">
        <div className="md:ml-16 ml-[5px] pt-16 md:pt-6">
          <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;html &gt;</p>
          <p className="font-dancing text-purple-500 opacity-50 text-[17px] pl-6">&lt;body &gt;</p>
          <div className="pt-6 pl-6">
            <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;h1 &gt;</p>
            <h1 className="text-[50px] font-bold text-gray-200 pl-[10px] leading-tight md:leading-normal">
              Hi,
              <br /> I'm <span className="bg-purple-600 p-[5px] rounded-md">Mateusz,</span>
              <br /> <span className="text-[35px] md:text-[50px] text-gray-300">Software Developer</span>
            </h1>
            <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;h1 /&gt;</p>
          </div>
          <div className="mt-5">
            <p className="font-dancing text-purple-500 opacity-50 text-[17px] pl-6">&lt;body /&gt;</p>
            <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;html /&gt;</p>
          </div>
        </div>
        <div className="w-[250px] h-[40px] pointer-events-auto hover:cursor-pointer md:pl-16 pl-10 mt-5">
          <button className="w-[100%] h-[100%] rounded-md border border-2 border-purple-700 text-gray-200 font-bold hover:bg-purple-700">Contact Me!</button>
        </div>
      </div>
      <div className="absolute bottom-0 w-[100vw]">
        <div className="w-[50px] mx-auto animate-bounce hover:cursor-pointer" onClick={() => scrollIntoView("about")}>
          <DownSVG width={50} height={50} color="#A020F0" />
        </div>
      </div>
    </section>
  );
};
