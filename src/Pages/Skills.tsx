import { useState } from "react";
import projectsInfo from "../SkillsAndProjects.json";

export const Skills = () => {
  const [projects] = useState(projectsInfo);

  return (
    <section className="w-[100%] min-h-[100vh] pb-10 md:p-16 z-[20] bg-[#222222] relative" id="skills">
      <div className="w-[100%] h-[100%] z-50 relative pt-5 md:pl-16 pl-6">
        <h1 className="text-[50px] font-bold text-gray-200">
          <span className="bg-purple-600 p-[7px] rounded-md">Skills</span>
        </h1>
        <div className="flex md:space-x-5 flex-col md:flex-row">
          <div className="md:w-[45%] w-[100vw]">
            <div className="mt-10">
              <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;h1 &gt;</p>
              <p className="font-bold text-gray-200 text-[40px]">Frontend skills:</p>
              <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;h1 /&gt;</p>
            </div>
            <div className="flex flex-row flex-wrap">
              {projects.skills.frontend.map((skill, index) => (
                <div key={index} className="p-5 lg:p-10 rounded-md bg-purple-700 mt-[10px] ml-[15px] shadow-xl pointer hover:purple-500 hover:scale-110">
                  <p className="text-gray-200 lg:text-[20px] font-bold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" md:w-[45%] w-[100vw]">
            <div className="mt-10">
              <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;h1 &gt;</p>
              <p className="font-bold text-gray-200 text-[40px]">Backend skills:</p>
              <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;h1 /&gt;</p>
            </div>
            <div className="flex flex-wrap mr-10 md:p-0">
              {projects.skills.backend.map((skill, index) => (
                <div key={index} className="p-5 lg:p-10 rounded-md bg-purple-700 mt-[10px] ml-[15px] shadow-xl pointer hover:purple-500 hover:scale-110">
                  <p className="text-gray-200 lg:text-[20px] font-bold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
