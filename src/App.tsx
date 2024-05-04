import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="">
          <NavBar />
        </div>
        <div className="bg-[#333333] w-[100vw]">
          <div className="h-[100vh] md:pl-16">
            <Home />
          </div>
          <div className="h-[100vh]">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
