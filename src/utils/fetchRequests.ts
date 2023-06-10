import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from "next-sanity";
import {sanityClient} from "./sanity";
import {Experience, PageInfo, Project, Social, Skill} from "./typings";

export const getSocials = async () => {
  const query = groq`*[_type == "social"]`;

  const socials: Social[] = await sanityClient.fetch(query);
  return {socials};
}

export const getExperience= async () => {
  const query = groq`*[_type == "experience"] 
  {
    ...,
    technologies[] ->,
  }
`;

  const experience: Experience[] = await sanityClient.fetch(query);
  return {experience};
}

export const getPageInfo= async () => {
  const query = groq`*[_type == "pageInfo"][0]`;

  const pageInfo: PageInfo = await sanityClient.fetch(query);
  return {pageInfo};
}

export const getProjects= async () => {
  const query = groq`
  *[_type == "project"] {
    ...,
    technologies[] ->
  }
`;

  const projects: Project[] = await sanityClient.fetch(query);
  return {projects};
}

export const getSkills= async () => {
  const query = groq`*[_type == "skill"]`;

  const skills: Skill[] = await sanityClient.fetch(query);
  return {skills};
}