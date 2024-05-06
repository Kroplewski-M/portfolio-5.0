export const Experience = () => {
  return (
    <section className="w-[100%] h-[100%] z-[20] bg-[#333333] relative pt-16" id="about">
      <div className="w-[100%] h-[100%] z-50 relative pt-5 md:pl-16 px-6">
        <h1 className="text-[50px] font-bold text-gray-200">
          <span className="bg-purple-600 p-[7px] rounded-md">Experience</span>
        </h1>
        <div className="mt-10 flex flex-col md:flex-row bg-[#222222] p-10 rounded-md max-w-[900px]">
          <p className="text-gray-400">MAY 2024 - PRESENT</p>
          <div className="md:pl-16 pl-0 max-w-[600px]">
            <p className="text-gray-200">
              &bull; UNDERGRADUATE SOFTWARE DEVELOPER @<span className="bg-purple-700 p-[5px] rounded-md">Ascendant Solutions</span>
            </p>
            <p className="text-gray-400 pt-5">Working on data driven cloud solutions for a wide range of applications in fraud, avoidance, error and recovery.</p>
            <div className="mt-[10px] flex space-x-5">
              <p className="w-[50px] h-[50px] bg-purple-700 rounded-md text-gray-200 grid place-content-center">C#</p>
              <p className="w-[50px] h-[50px] bg-purple-700 rounded-md text-gray-200 grid place-content-center">.NET</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
