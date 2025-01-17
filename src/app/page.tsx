import Head from "next/head";
import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Home/Hero"
import Experience from "../components/Home/Experience"
import { techStackData } from "../constants/TechStack"
import { experienceData } from "../constants/ExperienceData"
import { projectData } from "../constants/ProjectsData"
import { ContactInfo } from "../constants/ContactInfo"
import TechStack from "../components/Home/TechStack"
import Projects from "../components/Home/Projects"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio : Divyanshu Bisht</title>
        <meta name={'title'} content={'Portfolio : Divyanshu Bisht'} />
        <meta charSet={'UTF-8'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <meta name={'description'} content={'I am an experienced Full Stack Developer with a passion for creating efficient and user-friendly web applications. With a proven ability to optimize front-end and back-end systems, I strive to deliver exceptional digital experiences. My expertise spans technologies like React.js, Node.js, MongoDB, and Next.js, along with a strong foundation in problem-solving and data-driven solutions.'} />
        <meta name={'author'} content={'Divyanshu Bisht'} />
        <meta name={'copyright'} content={'Divyanshu Bisht'} />
        <meta name={'application-name'} content={'Divyanshu Bisht Portfolio'} />

        <meta property={'og:site_name'} content={'Divyanshu Bisht Portfolio'} />
        <meta property={'og:title'} content={'Divyanshu Bisht Portfolio'} />
        <meta property={'og:description'} content={'I am an experienced Full Stack Developer with a passion for creating efficient and user-friendly web applications. With a proven ability to optimize front-end and back-end systems, I strive to deliver exceptional digital experiences. My expertise spans technologies like React.js, Node.js, MongoDB, and Next.js, along with a strong foundation in problem-solving and data-driven solutions.'} />
        <meta property={'og:image'} content={'/images/favicon.ico'} />
        <meta property={'og:image:alt'} content={'Divyanshu Bisht Portfolio Icon'}></meta>
        <meta property={'og:locale'} content={'en'} />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="about">
          <Hero />
        </section>
        <section id="techstack">
          <TechStack techStackData={techStackData} />
        </section>
        <section id="experience">
          <Experience experienceData={experienceData}/>
        </section>
        <section id="projects">
          <Projects projectData={projectData}/>
        </section>
      </main>
      <Footer contactInfo={ContactInfo}/>
    </>
  );
}
