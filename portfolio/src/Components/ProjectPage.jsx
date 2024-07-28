import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';

const ProjectPage = () => {
  return (
    <div id='projects' className='mt-10'>
        <div className='text-6xl text-center font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700 '>
            Featured Projects
        </div>
        <div className="flex flex-col mt-10 md:flex md:flex-row gap-16 justify-center items-center p-6">
      {ProjectsData.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
    <a href='https://github.com/sahill-07?tab=repositories' target='_blank'>
    <div className='flex justify-center items-center'>
    <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
  See more
</button>

    </div>
    </a>

    </div>
  );
};

export default ProjectPage;
