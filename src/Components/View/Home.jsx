import React from "react";
import { motion, useScroll } from "framer-motion";
import Header from "../Layout/Header";
import MySkills from "./MySkills";
import MyExperience from "./MyExperience";
import AboutMe from "./AboutMe";
import Objective from "./Objective";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import SectionDivider from "./SectionDivider";
import Introduction from "./Introduction";
import Footer from "./Footer";

const aboutMe = [
  { index: "Name", value: "Hein Htet Paing" },
  { index: "Date Of Birth", value: "06-10-1999" },
  { index: "Nationality", value: "Myanmar" },
  { index: "Religion", value: "Buddhist" },
  { index: "Gender", value: "Male" },
  { index: "Marital Status", value: "Single" },
  { index: "Languages", value: "Myanmar/English" },
  { index: "Passport", value: "MH198276" },
  { index: "Expected Salary", value: "22,000Baht" },
  {
    index: "Address",
    value: "Ramkhamhaeng-50 rd, Hua Mak, Bangkapi, Thailand",
  },
];

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "TypeScript",
  "Shadcn/ui",
  "MongoDB","SQLite","Prisma",
  "React Query",
  "Redux",
  "Git",
  "API",
  "Framer Motion",
];
const myExps = [
  {
    position: "Junior FrontEnd Developer",
    date: "MAR 2023 to Nov 2023",
    company: "Promes MM",
    projects: ["Billing App", "Real Estate App"],
    responsesity: [
      "Collaborate with a dynamic team to design and implement engaging and responsive dashboards.",
      "Develop APIs to support mobile applications, ensuring efficient data flow and communication between the frontend and backend.",
      "Collaborate with backend developers to integrate frontend components seamlessly with the server-side logic.",
      "Stay up-to-date with industry trends and best practices, bringing innovative solutions to the development process.",
    ],
  },
  {
    position: "IT Assistance",
    date: "May 2024 to December 2024",
    company: "JM505 Computer Sales & Service",
    projects: [],
    responsesity: [
      "Selling computer (Laptop & Desktop) hardware and related accessories.",
      "Packing and preparing Notebooks to deliver across every part of the country and oversea.",
      "Diagnostics and troubleshooting (hardware or software issues).",
      "Virus/malware removal and data recovery.",
      "Upgrades (RAM, storage, GPU) and custom builds.",
      "Maintenance (hardware cleaning, thermal paste replacement, etc.)."
    ],
  }
]

const objective =
  "Motivated Web developer with a passion for developing innovative and user-friendly websites in Web development, seeking to leverage expertise in MERN stack to deliver scalable and efficient solutions, while contributing effectively to your dynamic development team. Committed to delivering high-quality, user-centric web solutions while continuously expanding knowledge and staying abreast of emerging trends in web development.";

const edu = {
  school: "University of Computer Studies",
  town: "Monywa",
  start: "Dec 2015",
  end: "Oct 2019",
  status: "undergraduate",
  major: "Computer Science",
};
const certificate = [
  {
    title: "Practical A+",
    year: "2016",
    center: "I-Campus Complete IT Training Solution",
  },
  {
    title: "Professional Web Developer Course",
    year: "2020",
    center: "Fairway Technology",
  },
];
const projects = [
  {
    title: "Sample Website",
    image_url: "/images/funny_poo.png",
    description: "This is sample website for example",
    link: "https://funny-poo.netlify.app/",
    language: ["React", "Bootstrap"],
  },
  {
    title: "Weather App",
    image_url: "/images/weather_app.png",
    description:
      "This is weathering status app , you can know the weather status of every country searching by city name with exactly",
    language: ["React", "axios", "api", "Bootstrap"],
    link: "https://weathering-app-react.netlify.app/",
  },
  {
    title: "Drum kit",
    image_url: "/images/drum_kid.png",
    description:
      "This is drum kit application created by using Javascript only",
    language: ["JavaScript", "CSS"],
    link: "https://drumkidapp.netlify.app/",
  },
  {
    title: "Note App",
    image_url: "/images/note_app.png",
    description: "This is simple Note application using by React",
    language: ["React", "CSS", "LocalStorage"],
    link: "https://note-application-with-react.netlify.app/",
  },{
    title:"Social App",
    image_url:"/images/social_app.png",
    description:"A social application that including features like register, login, add post, delete post, add comment, delete comment, like post, like comment, follow, unfollow, chat, reat-time notification and etc..",
    language:["React","React Router","React Query","Tailwind","Express","Prisma","SQLite","JsonWebToken","Socket.io"],
    link:"https://frontend-app-k86t.onrender.com"
  }
];
function Home() {
  const containerVarient = {
    initial: { opacity: 0 },
    mate: {
      opacity: 1,
      transiton: { type: "spring", delay: 0.3, duration: 0.5 },
    },
    close: { opacity: 0, transiton: { duration: 0.5, when: "afterChildren" } },
  };

  return (
    <motion.div
      variants={containerVarient}
      initial="initial"
      animate="mate"
      exit="close"
      className="relative"
    >
      <div className="rounded-lg  -z-10 w-[20rem] absolute top-5 left-10 bg-pink-300 h-[84rem] bg-opacity-50 blur-[20rem]"></div>
      <div className="rounded-lg  -z-10 w-[20rem] absolute top-5 right-10 bg-purple-300 h-[58rem] blur-[20rem] bg-opacity-50 "></div>

      <motion.div>
        <Header />
        <AboutMe me={aboutMe} />
        <Contact />
        <SectionDivider />
        <Introduction />
        <Objective objects={objective.split("")} />
        <Education edu={edu} certificate={certificate} />
        <MySkills skills={skills} />
        <MyExperience Exp={myExps} />
        <Projects projects={projects} />
        <Footer />
      </motion.div>
    </motion.div>
  );
}

export default Home;
