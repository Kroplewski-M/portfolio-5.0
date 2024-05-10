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
    <section className="w-[100%] min-h-[100vh] z-[20] bg-[#333333] relative" id="projects">
      <div className="w-[100%] z-50 relative pt-5 md:pl-16 pl-6">
        <h1 className="text-[50px] font-bold text-gray-200">
          <span className="bg-purple-600 p-[7px] rounded-md">Projects</span>
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap mt-10">
          {projects.map((project: Project, index) => (
            <div className="w-[90%] mx-auto md:mr-5 md:w-[400px] h-[150px] bg-[#222222] rounded-md pb-5" key={project.name}>
              <img src={getImgSrc(`/Projects/${project.name}/${project.name}01.png`)} alt={project.name} className="w-[100%] rounded-t-md" />
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
