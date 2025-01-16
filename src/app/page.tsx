import Image from "next/image";
import styles from "./page.module.css";
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
        {/* <meta name={'title'} content={'Portfolio : Divyanshu Bisht'} />
        <meta charSet={'UTF-8'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <meta name={'description'} content={'Divyanshu Bisht Skilled in Django & PostgreSQL, MERN Stack, Cloud(GCP, AWS), and Container(Docker, ECS) based technology with hands-on experience in design, document, and creation of scalable software. Knowledge of data warehouse, analytical tool, database query languages(MySQL), Web servers (e.g. Nginx) ,and UI/UX design.'} />
        <meta name={'author'} content={'Divyanshu Bisht'} />
        <meta name={'copyright'} content={'Divyanshu Bisht'} />
        <meta name={'application-name'} content={'Divyanshu Bisht Portfolio'} />

        <meta property={'og:site_name'} content={'Divyanshu Bisht Portfolio'} />
        <meta property={'og:type'} content={'ogType'} />
        <meta property={'og:url'} content={'https://Divyanshu.kodeweich.com'} />
        <meta property={'og:title'} content={'Divyanshu Bisht Portfolio'} />
        <meta property={'og:description'} content={'Passionate Full Stack Engineer with 3 years of experience in multi-cloud infrastructure provisioning and management. Skilled in deploying and monitoring using Terraform, AWS SAM, and Google Cloud Resource Manager.'} />
        <meta property={'og:image'} content={'/images/favicon.ico'} />
        <meta property={'og:image:alt'} content={'Divyanshu Bisht Portfolio Icon'}></meta>
        <meta property={'og:locale'} content={'en'} /> */}
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
