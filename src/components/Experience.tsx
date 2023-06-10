"use client";
import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from "@/components/ExperienceCard";
import {Experience} from "../utils/typings";

type Props = {
  experience: Experience[];
};

const WorkExperience = ({experience}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1}}
      className="h-screen flex flex-col text-left px-10 max-w-full mx-auto">
      <h3
        className="flex-[0.2] flex items-end justify-center uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex-1 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;