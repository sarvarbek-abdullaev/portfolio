"use client";
import React from 'react';
import {motion} from 'framer-motion';
import {Project} from "../utils/typings";
import {urlFor} from "../utils/sanity";
import projects from "@/components/Projects";
type ProjectProps = {
  project: Project;
  index: number;
  length: number;
}

const Project = ({project, index, length}: ProjectProps) => {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-4 md:p-10 h-screen">
      <motion.img
        initial={{opacity: 0, y: -300}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={urlFor(project.image).url()}
        className="h-[300px] w-auto object-contain"
        alt=""/>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50 ">
            Case Study {index + 1} of {length}:{' '}
          </span>
          {project.title}
        </h4>
        <div className="flex items-center justify-center space-x-4">
          {project?.technologies?.map(technology => (
            technology.image && (
              <img className="h-10 w-10" key={technology._id} src={urlFor(technology.image).url()} alt=""/>
            )
          ))}
        </div>

        <p className="text-center text-lg md:text-left">{project.summary}</p>
      </div>
    </div>
  );
};

export default Project;