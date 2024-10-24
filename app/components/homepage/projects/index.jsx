"use client"; // Indicate this is a Client Component

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  // Function to handle the link opening
  const openDemo = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        {/* Added Project Links Section */}
        <h2 className="text-2xl font-bold mb-4">Project Links</h2>
        <div className="flex flex-col gap-4 mb-8">
          {projectsData.map((project) => (
            <h3
              key={project.id}
              className="text-lg text-blue-600 cursor-pointer hover:underline"
              onClick={() => openDemo(project.demo)} // Open the demo link on click
            >
              {project.name}
            </h3>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
