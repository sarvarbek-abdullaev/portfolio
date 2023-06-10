"use client";
import React from 'react';
import {motion} from 'framer-motion';
import Skill from "@/components/Skill";
import {Skill as SkillType} from "../utils/typings";

type Props = {
  skills: SkillType[];
}
const Skills = ({skills}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1}}
      className="h-screen flex flex-col items-center max-w-[2000px] xl:p-20 min-h-screen gap-12">
      <div className="flex-[0.3] flex flex-col items-center justify-end gap-2">
        <h3 className=" uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">About</h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-2xl">
          Hover over for a current proficiency
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} directionLeft={index + 1  > Math.floor(skills.length / 2)}/>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;