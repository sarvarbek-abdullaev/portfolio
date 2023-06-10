"use client";
import React from 'react';
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "@/components/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from "../utils/typings";
import {urlFor} from "../utils/sanity";

type Props = {
    pageInfo: PageInfo;
}
const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, the name is ${pageInfo.name}`, 'Guy-who-loves-Coffee.tsx', 'ButLovesCodingMore.tsx'],
        loop: true,
        delaySpeed: 2000});
    return (
        <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
          <BackgroundCircles/>
          {pageInfo.heroImage && (
          <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
               src={urlFor(pageInfo.heroImage).url()} alt=""/>
          )}
          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
              {pageInfo.role}
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#f7ab0a"/>
            </h1>
            <div className="pt-5">
              <Link href="#about">
                <button className="heroBtns">About</button>
              </Link>
              <Link href="#experiences">
                <button className="heroBtns">Experiences</button>
              </Link>
              <Link href="#skills">
                <button className="heroBtns">Skills</button>
              </Link>
              <Link href="#projects">
                <button className="heroBtns">Projects</button>
              </Link>
            </div>
          </div>
        </div>
    );
};

export default Hero;