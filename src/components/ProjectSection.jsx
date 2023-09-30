// Inside ProjectsSection.js
import React from "react";
import Projects from "../API/projects.json";

const ProjectSection = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8   md:h-[800px] mb-56">
        <img
          src="../../public/images/services/1.png"
          alt="Project 2"
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">HELLO</h3>
          <p className="text-gray-600">hello</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:mt-8  md:mt-96 h-[800px] ">
        <img
          src="../../public/images/services/1.png"
          alt="Project 2"
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello</h3>
          <p className="text-gray-600">Hello</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden   md:mb-40 -mt-72 h-[800px]">
        <img
          src="../../public/images/services/1.png"
          alt="Project 2"
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello</h3>
          <p className="text-gray-600">Hello</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8  md:mt-16 h-[800px]">
        <img
          src="../../public/images/services/1.png"
          alt="Project 2h-[800px]"
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello</h3>
          <p className="text-gray-600">Hello</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 mt-8 mb-72 md:-mt-72 h-[800px]">
        <img
          src="../../public/images/services/1.png"
          alt="Project 2"
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello</h3>
          <p className="text-gray-600">Hello</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 mt-8 md:mt-16 h-[800px]">
        <img
          src="../../public/images/services/1.png"
          alt="Project 2"
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello</h3>
          <p className="text-gray-600">Hello</p>
        </div>
      </div>
    </>

    // main
    // <div className="flex flex-wrap">
    //   {Projects.projects.map((project) => {
    //     return (
    //       <>
    //         <div
    //           key={project.projectId}
    //           className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 mb-72 md:-mt-0"
    //         >
    //           <img
    //             src="../../public/images/services/1.png"
    //             alt="Project 2"
    //             className="w-full h-48 object-contain"
    //           />
    //           <div className="p-4">
    //             <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //               {project.name}
    //             </h3>
    //             <p className="text-gray-600">{project.description}</p>
    //           </div>
    //         </div>
    //         <div
    //           key={project.projectId}
    //           className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 mb-72 md:-mt-0"
    //         >
    //           <img
    //             src="../../public/images/services/1.png"
    //             alt="Project 2"
    //             className="w-full h-48 object-contain"
    //           />
    //           <div className="p-4">
    //             <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //               {project.name}
    //             </h3>
    //             <p className="text-gray-600">{project.description}</p>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   })}{" "}
    // </div>
  );
  //      else if (project.id %2==0) {
  //       return (
  //         <div className="bg-white rounded-lg shadow-lg overflow-hidden float-left lg:mt-72   md: mt-72">
  //           <img
  //             src="../../public/images/services/3.png"
  //             alt="Project 2"
  //             className="w-full h-48 object-contain"
  //           />
  //           <div className="p-4">
  //             <h3 className="text-xl font-semibold text-gray-800 mb-2">
  //               Comprehensive Infrastructure Development Project - DPR
  //               Preparation
  //             </h3>
  //             <p className="text-gray-600">
  //               The Comprehensive Infrastructure Development Project involves
  //               the meticulous preparation of Detailed Project Reports (DPRs)
  //               for a diverse range of critical facilities, including roads,
  //               hospitals, cold storage units, information centers,
  //               administrative buildings, and more. This initiative represents
  //               a strategic approach to infrastructure planning, aimed at
  //               enhancing the quality of life, economic opportunities, and
  //               public services within the target region.
  //             </p>
  //           </div>
  //         </div>
  //       );
  //     }
  //   })}
  // </div>
  //)
};

export default ProjectSection;
