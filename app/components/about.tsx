"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      ref={ref}
      className="mt-28 mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      initial={{opacity: 0, y: 100 }}
      animate={{opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
      <span className="font-medium">My journey to software development was far from a straight path.</span> I graduated from the University of California, Santa Barbara with a BA degree in Global Studies. I was initially interested in medicine and continued my post grad studies in premedical coursework. After several attempts to find my place in healthcare, I was ultimately displeased with my work experience. <span className="font-medium">It was March 2020 when I took the leap to change my career path.</span> The pandemic had broken out and I was fortunate enough to become a recipient of the Edie Windsor Scholarship. I joined Learn Academy, a full stack software development program that taught both object-oriented programming and functional programming. <span className="font-medium">Four years later and I couldn&apos;t be more happy with my decision to join the tech force.</span> My favorite part of programming is the problem-solving and teamwork required to push new features through the software development life cycle. I have a creative eye and I enjoy the design element when building out a new user interface. <span className="font-medium">Check out my projects!</span>
      </p>
  </motion.section>
)}
