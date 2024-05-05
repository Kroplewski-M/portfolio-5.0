import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Experience } from "./Pages/Experience";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { Skills } from "./Pages/Skills";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="">
          <NavBar />
        </div>
        <div className="bg-[#333333] w-[100vw]">
          <div className="h-[100vh] md:pl-16 ">
            <Home />
          </div>
          <div className="h-[100vh] md:pl-[100px]">
            <About />
          </div>
          <div className="h-[100vh] md:pl-[100px]">
            <Experience />
          </div>
          <div className="h-[100vh] md:pl-[100px]">
            <Skills />
          </div>
          <div className="h-[100vh] md:pl-[100px]">
            <Projects />
          </div>
          <div className="h-[100vh] md:pl-[100px]">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
