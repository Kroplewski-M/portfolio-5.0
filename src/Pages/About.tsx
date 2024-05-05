export const About = () => {
  return (
    <section className="w-[100%] h-[100%] z-[20] bg-[#222222] relative pt-16" id="about">
      <div className="w-[100%] h-[100%] z-50 relative pt-5 md:pl-16 pl-6">
        <h1 className="text-[50px] font-bold text-gray-200">
          <span className="bg-purple-600 p-[7px] rounded-md">About Me</span>
        </h1>
        <div className="flex md:flex-row flex-col-reverse mt-5">
          <div className="max-w-[400px] mt-5 md:mt-0">
            <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;p&gt;</p>
            <p className="text-gray-200 text-[20px] pr-[10px] md:pr-0">
              A software developer from the UK. I have a passion for programming which originated from game development. I love creating challenging and fun projects and looking back how it was an
              empty repo at the beginning. I am currently working as a undergraduate software developer @
              <a
                href="https://www.linkedin.com/company/ascendant-solutions-limited/mycompany/verification/"
                target="_blank"
                className="bg-purple-700 p-[5px] rounded-md hover:cursor-pointer hover:bg-transparent hover:border-2 hover:border-purple-700"
              >
                Ascendant Solutions.
              </a>
            </p>
            <p className="font-dancing text-purple-500 opacity-50 text-[17px]">&lt;p /&gt;</p>
          </div>
          <div className="w-[200px] h-[200px] mt-5 md:mt-[20px] ml-16">
            <img src="./Profile.jpg" alt="" className="w-[100%] h-[100%] rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};
