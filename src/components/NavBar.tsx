import { useEffect, useState } from "react";
import { AboutSVG } from "../SVGs/AboutSVG";
import { ContactSVG } from "../SVGs/ContactSVG";
import { HomeSVG } from "../SVGs/HomeSVG";
import { ProjectsSVG } from "../SVGs/ProjectsSVG";
import { SkillsSVG } from "../SVGs/SkillsSVG";
import { BurgerMenuSVG } from "../SVGs/BurgerMenuSVG";
import { GithubSVG } from "../SVGs/GithubSVG";
import { LinkedinSVG } from "../SVGs/LinkedinSVG";
import { ExperienceSVG } from "../SVGs/ExperienceSVG";

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
  const [gitHubHover, setGitHubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [experienceHover, setExperienceHover] = useState(false);

  const handleHomeHover = () => setHomeHover(!homeHover);
  const handleAboutHover = () => setAboutHover(!aboutHover);
  const handleSkillsHover = () => setSkillsHover(!skillsHover);
  const handleProjectHover = () => setProjectsHover(!projectsHover);
  const handleContactHover = () => setContactHover(!contactHover);
  const handleGitHubtHover = () => setGitHubHover(!gitHubHover);
  const handleLinkedintHover = () => setLinkedinHover(!linkedinHover);
  const handleExperiencetHover = () => setExperienceHover(!experienceHover);

  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    if (windowSize < mobileLimit) {
      setOpenNav(false);
    }
  };
  return (
    <div className="z-[100] relative sticky top-0 left-0">
      {openNav ? (
        <nav className="w-[100px] h-[100vh] bg-[#1E1E1E] drop-shadow-xl absolute">
          {windowSize < mobileLimit ? (
            <>
              <div className="w-[25px] h-[25px] rounded-full bg-gray-100 pointer absolute -right-2 grid place-content-center" onClick={() => setOpenNav(false)}>
                <p className="font-bold">X</p>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="pointer" onClick={() => scrollIntoView("home")}>
            <img src="./Logo.png" alt="logo" className="w-[100%]" />
          </div>
          <div className="flex flex-col w-[33px] mx-auto space-y-7 mt-16">
            <div className="pointer" onMouseEnter={handleHomeHover} onMouseLeave={handleHomeHover} onClick={() => scrollIntoView("home")}>
              <HomeSVG width={iconSize} height={iconSize} color={homeHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="pointer" onMouseEnter={handleAboutHover} onMouseLeave={handleAboutHover} onClick={() => scrollIntoView("about")}>
              <AboutSVG width={iconSize} height={iconSize} color={aboutHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="pointer" onMouseEnter={handleExperiencetHover} onMouseLeave={handleExperiencetHover} onClick={() => scrollIntoView("experience")}>
              <ExperienceSVG width={iconSize} height={iconSize} color={experienceHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="pointer" onMouseEnter={handleSkillsHover} onMouseLeave={handleSkillsHover} onClick={() => scrollIntoView("skills")}>
              <SkillsSVG width={iconSize} height={iconSize} color={skillsHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="pointer" onMouseEnter={handleProjectHover} onMouseLeave={handleProjectHover} onClick={() => scrollIntoView("projects")}>
              <ProjectsSVG width={iconSize} height={iconSize} color={projectsHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="pointer" onMouseEnter={handleContactHover} onMouseLeave={handleContactHover} onClick={() => scrollIntoView("contact")}>
              <ContactSVG width={iconSize} height={iconSize} color={contactHover ? "#A020F0" : "#fff"} />
            </div>
            <div className="pt-16">
              <div className="" onMouseEnter={handleGitHubtHover} onMouseLeave={handleGitHubtHover}>
                <a href="https://github.com/Kroplewski-M" className="pointer" target="_blank">
                  <GithubSVG width={iconSize} height={iconSize} color={gitHubHover ? "#A020F0" : "#fff"} />
                </a>
              </div>
              <div className=" mt-5" onMouseEnter={handleLinkedintHover} onMouseLeave={handleLinkedintHover}>
                <a href="https://www.linkedin.com/in/mateusz-kroplewski-732239176/" className="pointer" target="_blank">
                  <LinkedinSVG width={iconSize} height={iconSize} color={linkedinHover ? "#A020F0" : "#fff"} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="absolute top-5 left-2">
          <div className="pointer" onClick={() => setOpenNav(true)}>
            <BurgerMenuSVG width={iconSize} height={iconSize} color="#fff" />
          </div>
        </div>
      )}
    </div>
  );
};
