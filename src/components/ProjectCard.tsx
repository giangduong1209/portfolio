import React, { useId } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "./Projects";

const ProjectCard = ({
  projectName,
  imgProject,
  description,
  stack,
  link,
}: projects) => {
  const id = useId();
  return (
    <div className="border border-slate-300 max-w-sm rounded-lg shadow-md">
      <div>
        <Image src={imgProject} width={600} height={600} alt="img project" />
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h1 className="font-semibold text-2xl hover:text-primary uppercase">
            {projectName}
          </h1>
          <p className="mt-2 w-full overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center border-t-[1px] border-slate-200">
          <div className="mt-2">
            <ul className="flex justify-center items-center gap-2">
              {stack.slice(0, 3).map((stk) => (
                <li
                  key={id}
                  className=" bg-emerald-500 text-white py-0.5 px-2 rounded-lg"
                >
                  {stk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-5 mt-2">
            <a href={link[0]} target="_blank">
              <Github className="hover:text-primary" />
            </a>
            <a href={link[1]} target="_blank">
              <ExternalLink className="hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
