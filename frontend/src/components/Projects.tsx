"use client";
import React from 'react';
import {motion} from 'framer-motion';
import Project from "@/components/Project";
import {Project as ProjectType} from "../utils/typings";
type Props = {
  projects: ProjectType[];
}
const Projects = ({projects}: Props) => {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden z-0">
      <h3
        className="flex-[0.2] flex items-end justify-center uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="absolute w-full top-[40%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"/>
      <div className="flex-1 relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project ,index)=> (
          <Project key={project._id} project={project} index={index} length={projects.length} />
        ))}
      </div>
    </div>
  );
};

export default Projects;