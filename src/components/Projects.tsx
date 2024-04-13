import React from "react";
import ProjectCard from "./ProjectCard";

export interface projects {
  id: string;
  projectName: string;
  imgProject: string;
  description: string;
  stack: string[];
  link: string[];
}
[];
export interface IProject {
  projects: projects[];
}

const Projects = ({ projects }: IProject) => {
  return (
    <div className="pt-20 sm:pt-60" id="project">
      <h1
        className="text-6xl text-primary font-bold text-center"
        data-aos="fade-down-right"
      >
        Projects
      </h1>
      <div className="grid mt-5 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {projects.map((val) => (
          <ProjectCard
            key={val.id}
            id={val.id}
            projectName={val.projectName}
            imgProject={val.imgProject}
            description={val.description}
            stack={val.stack}
            link={val.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
