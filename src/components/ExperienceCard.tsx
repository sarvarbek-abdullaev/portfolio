"use client";
import React from 'react';
import {motion} from 'framer-motion';
import {Experience} from "../utils/typings";
import {urlFor} from "../utils/sanity";

type Props = {
  experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article
      className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px]
      snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()} alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-300">
          {experience.dateStarted} ...
          {experience.isCurrentlyWorkingHere && " PRESENT" || ` ${experience.dateEnded}`}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;