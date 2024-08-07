import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { DiRubyRough } from "react-icons/di";
import toDoApp from "@/public/ToDoApp.png";
import commBoardApp from "@/public/CommunityBoardApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Learn Academy",
    location: "Remote",
    description:
      "Competed 500+ hours of full stack coding using JavaScript, React.JS, and Ruby on Rails",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer at Starshot Technologies",
    location: "Remote",
    description:
      "Completed over 100 hours of front-end coding for a consumer-facing web application. Implemented new features and styling using EmberJS, Post CSS, and Tailwind CSS, enhancing the visual appeal and functionality of the web application.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Full-Stack Developer at Scientist.com Software Services",
    location: "Remote",
    description:
      "Developed and maintained high-quality code for web applications using React, Redux, Ruby on Rails, HTML, CSS, JavaScript, and Samvera, contributing to the creation of robust and scalable solutions.",
    icon: React.createElement(DiRubyRough),
    date: "2022",
  },
  {
    title: "UX Developer at Fox",
    location: "Remote",
    description:
      "Developed and optimized performant, maintainable, and testable code using React, Redux, Node.js, and TypeScript, enhancing application efficiency and the user experience.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Task List",
    description:
      "A To-Do list application for users to track, edit, and delete tasks.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: toDoApp,
  },
  {
    title: "Commuity Blog",
    description:
      "A community blog for multiple users to communicate via posts and comments. The application enables community members to have discourse in their choice of topics.",
    tags: ["React", "Next.js", "Redux", "Tailwind", "Framer"],
    imageUrl: commBoardApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Ruby on Rails",
  "Next.js",
  "Ember",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Bootstrap",
] as const;