import { useEffect, useState } from "react";
import projectsInfo from "../SkillsAndProjects.json";
import { GithubSVG } from "../SVGs/GithubSVG";
import { WebSVG } from "../SVGs/WebSVG";
interface Project {
  name: string;
  brief: string;
  description: string;
  tech: string[];
  Github: string;
  Website: string;
  images: string[];
  video: string;
}
export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Flatten the nested array structure into a single array of projects
    const flattenedProjects = projectsInfo.projects.reduce((acc, curr) => acc.concat(curr), []);
    setProjects(flattenedProjects);
  }, []);
  const getImgSrc = (src: string) => {
    return new URL(src, import.meta.url).href;
  };
  return (
    <section className="w-[100%] min-h-[100vh] pb-5 z-[20] bg-[#333333] relative" id="projects">
      <div className="w-[100%] z-50 relative pt-5 md:pl-16 pl-6">
        <h1 className="text-[50px] font-bold text-gray-200">
          <span className="bg-purple-600 p-[7px] rounded-md">Projects</span>
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap mt-10">
          {projects.map((project: Project) => (
            <div className="w-[90%] md:mr-5 mx-auto md:mx-0 md:w-[400px] mt-5 bg-[#222222] rounded-md" key={project.name}>
              <img src={getImgSrc(`/Projects/${project.name}/${project.name}01.png`)} alt={project.name} className="w-[100%] h-[200px] rounded-t-md" />
              <p className="font-bold text-purple-700 pl-[10px] text-[22px] pt-5">{project.name}</p>
              <p className="text-gray-400 pl-[10px] pt-[5px]">{project.brief}</p>
              <div className="pt-[10px]">
                <p className="font-bold text-gray-200 pl-[10px] pt-[5px]">Tech:</p>
                <div className="flex pl-[10px] flex-wrap">
                  {project.tech.map((tech, index) => (
                    <p key={index} className="bg-purple-700 text-[14px] p-[5px] rounded-md text-gray-200 m-1">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex pl-5 pt-5 pb-5">
                <a href={project.Github} target="_blank" className="w-[35px] h-[35px] pt-[5px]">
                  <GithubSVG width={30} height={30} color="#FFFFFF" />
                </a>
                {project.Website !== "" ? (
                  <a href={project.Website} target="_blank" className="w-[40px] h-[40px]">
                    <WebSVG width={40} height={40} color="#FFFFFF" />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
