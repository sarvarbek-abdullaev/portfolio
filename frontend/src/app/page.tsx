import Link from "next/link";
import Hero from "@/components/Hero";
import ContactMe from "@/components/ContactMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Header from "@/components/Header";
import {getPageInfo, getSocials, getExperience, getProjects, getSkills} from "@/utils/fetchRequests";

export default async function Home() {
  const [pageInfo, socials, experience, projects, skills] = await Promise.all([
    getPageInfo(),
    getSocials(),
    getExperience(),
    getProjects(),
    getSkills()
  ])
  return (
    <>
      <div
        className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Header socials={socials.socials}/>
        <section id="hero" className="snap-center">
          <Hero pageInfo={pageInfo.pageInfo}/>
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo.pageInfo}/>
        </section>
        <section id="experiences" className="snap-center">
          <WorkExperience experience={experience.experience}/>
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills.skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects.projects}/>
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div>
              <img
                className="h-10 w-10 mx-auto rounded-full filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                src="https://picsum.photos/200/300/" alt=""/>
            </div>
          </footer>
        </Link>
      </div>
    </>
  )
}
