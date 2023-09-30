import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
AOS.init();

const Project = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Our Projects
        </h2>
        {/* Inside ProjectSection.js */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-8">
          <ProjectSection/>
        </div>
      </div>
    </section>
  );
};

export default Project;
