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
    <div className="mt-20 sm:pt-60">
      <h1 className="text-6xl text-primary font-bold text-center">Projects</h1>
      <div className="grid mt-5 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
