import { useEffect, useState } from "react";
import { AboutSVG } from "../SVGs/AboutSVG";
import { ContactSVG } from "../SVGs/ContactSVG";
import { HomeSVG } from "../SVGs/HomeSVG";
import { ProjectsSVG } from "../SVGs/ProjectsSVG";
import { SkillsSVG } from "../SVGs/SkillsSVG";
import { BurgerMenuSVG } from "../SVGs/BurgerMenuSVG";

export const NavBar = () => {
  const iconSize = 33;
  const [windowSize, setWindowSize] = useState<number>(getWindowSize());
  const mobileLimit: number = 500;
  const [openNav, setOpenNav] = useState(false);
  function getWindowSize() {
    const innerWidth: number = window.innerWidth;
    return innerWidth;
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize >= mobileLimit && !openNav) {
      setOpenNav(true);
    }
    if (windowSize < mobileLimit) {
      setOpenNav(false);
    }
  }, [windowSize]);

  //Icon states
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  const handleHomeHover = () => setHomeHover(!homeHover);
  const handleAboutHover = () => setAboutHover(!aboutHover);
  const handleSkillsHover = () => setSkillsHover(!skillsHover);
  const handleProjectHover = () => setProjectsHover(!projectsHover);
  const handleContactHover = () => setContactHover(!contactHover);
  return (
    <div className="z-50 relative sticky top-0 left-0">
      {openNav ? (
        <nav className="w-[100px] h-[100vh] bg-[#1E1E1E] drop-shadow-xl relative">
          {windowSize < mobileLimit ? (
            <>
              <div className="w-[25px] h-[25px] rounded-full bg-gray-100 hover:cursor-pointer absolute -right-2 grid place-content-center" onClick={() => setOpenNav(false)}>
                <p className="font-bold">X</p>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="hover:cursor-pointer">
            <img src="./Logo.png" alt="logo" className="w-[100%]" />
          </div>
          <div className="flex flex-col w-[33px] mx-auto space-y-7 mt-16">
            <div className="hover:cursor-pointer" onMouseEnter={handleHomeHover} onMouseLeave={handleHomeHover}>
              <HomeSVG width={iconSize} height={iconSize} color={homeHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="hover:cursor-pointer" onMouseEnter={handleAboutHover} onMouseLeave={handleAboutHover}>
              <AboutSVG width={iconSize} height={iconSize} color={aboutHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="hover:cursor-pointer" onMouseEnter={handleSkillsHover} onMouseLeave={handleSkillsHover}>
              <SkillsSVG width={iconSize} height={iconSize} color={skillsHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="hover:cursor-pointer" onMouseEnter={handleProjectHover} onMouseLeave={handleProjectHover}>
              <ProjectsSVG width={iconSize} height={iconSize} color={projectsHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="hover:cursor-pointer" onMouseEnter={handleContactHover} onMouseLeave={handleContactHover}>
              <ContactSVG width={iconSize} height={iconSize} color={contactHover ? "#A020F0" : "#fff"} />
            </div>
          </div>
        </nav>
      ) : (
        <div className="absolute top-5 left-2">
          <div className="hover:cursor-pointer" onClick={() => setOpenNav(true)}>
            <BurgerMenuSVG width={iconSize} height={iconSize} color="#fff" />
          </div>
        </div>
      )}
    </div>
  );
};
