import { useEffect, useState } from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Experience } from "./Pages/Experience";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { Skills } from "./Pages/Skills";
import { NavBar } from "./components/NavBar";
import { useNotificationsInfo } from "./Context/NotificationsContext";
import classNames from "classnames";

function App() {
  const { Notifications } = useNotificationsInfo();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const handleMouseMove = (e: any) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run this effect once, on component mount
  return (
    <main onMouseMove={handleMouseMove} onScroll={handleMouseMove}>
      <div className="cursor bg-[#f0f]/50 hidden md:inline" style={{ left: cursorPos.x, top: cursorPos.y + scrollY }}></div>
      <div className="flex">
        <div className="">
          <NavBar />
        </div>
        <div className="w-[100vw] fixed top-[50px] z-[100] flex flex-col">
          {Notifications.map((notification, index) => (
            <div className={classNames("w-[300px] h-[50px] mt-[10px] mx-auto rounded-md grid place-content-center", notification.bgColor)} key={index}>
              <p className="font-bold text-gray-200 text-center">{notification.message}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#333333] w-[100vw]">
          <div className="min-h-[100vh] md:pl-16 ">
            <Home />
          </div>
          <div className="min-h-[100vh] md:pl-[100px]">
            <About />
          </div>
          <div className="min-h-[100vh] md:pl-[100px]">
            <Experience />
          </div>
          <div className="min-h-[100vh] md:pl-[100px]">
            <Skills />
          </div>
          <div className="min-h-[100vh] md:pl-[100px]">
            <Projects />
          </div>
          <div className="min-h-[100vh] md:pl-[100px]">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
