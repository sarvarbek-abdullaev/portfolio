"use client";
import React from 'react';
import {motion} from 'framer-motion';
import {Skill as SkillType} from "../utils/typings";
import {urlFor} from "../utils/sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
}

const Skill = ({skill, directionLeft}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0, x: directionLeft ? -200 : 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x: 0}}
      className="group relative flex cursor-pointer h-max">
      <img
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:greyscale
        transition duration-300 ease-in-out"
        src={urlFor(skill.image).url()}
        alt=""/>
      <div
        className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl text-center font-bold text-black opacity-100">{skill.progress}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;