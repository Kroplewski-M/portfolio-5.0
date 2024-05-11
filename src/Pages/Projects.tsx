import { useEffect, useState } from "react";
import projectsInfo from "../SkillsAndProjects.json";
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
          {projects.map((project: Project, index) => (
            <div className="w-[90%] mx-auto pb-5 md:mr-5 md:w-[400px] mt-5 bg-[#222222] rounded-md hover:cursor-pointer hover:scale-110 transition-transform duration-500" key={project.name}>
              <img src={getImgSrc(`/Projects/${project.name}/${project.name}01.png`)} alt={project.name} className="w-[100%] h-[200px] rounded-t-md" />
              <p className="font-bold text-purple-700 text-center text-[22px] pt-5">{project.name}</p>
              <p className="font-bold text-gray-400 text-center pt-[5px]">{project.brief}</p>
              <div>
                <p className="font-bold text-gray-200 text-center pt-[5px]">Tech:</p>
                <div className="flex justify-center flex-wrap">
                  {project.tech.map((tech, index) => (
                    <p key={index} className="bg-purple-700 text-[14px] p-[5px] rounded-md text-gray-200 m-1">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
