"use client";
import React from 'react';
import {motion} from 'framer-motion';
import {PageInfo} from "../utils/typings";
import {urlFor} from "../utils/sanity";

type Props = {
  pageInfo: PageInfo;
}
const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1}}
      className="h-screen max-w-7xl mx-auto px-10 flex flex-col">
      <h3 className="flex-[0.2] flex items-end justify-center uppercase tracking-[20px] ml-[20px] text-gray-500 text-2xl">About</h3>
      <div className="flex-1 flex justify-evenly items-center flex-col md:flex-row">
        {pageInfo?.profilePic && (
          <motion.img
            initial={{x: -200, opacity: 0}}
            transition={{duration: 1.2}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          />
        )}
        <div className="space-y-10 px-0 md:px-10 text-center">
          <h4 className="text-4xl font-semibold">Here is the <span
            className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
          <p>{pageInfo.backgroundInformation}</p>
        </div>
      </div>

    </motion.div>
  );
};

export default About;