"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '../lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    
    return (
        <section ref={ref} className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem]" id="home">
            <div className="flex flex-col space-y-4 items-center justify-center">

                <div className='relative'>
                    <motion.div className=""
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                    >
                        <Image 
                            src="/profile-pic-round.jpg"
                            alt="Selam's portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="rounded-full h-27 w-26 shadow-xl" // border-[0.35rem] border-white
                        />
                    
                    </motion.div> 

                    <motion.span className="absolute bottom-0 right-0 text-6xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>

                <div className=""> 
                    <motion.h1
                        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-bold">Hello, I&apos;m Selam.</span> As an experienced software developer with 4 years of professional experience, I am committed to the continuous learning style of building web applications with the latest technology. I focus on <span className="font-bold">front-end development</span> with <span className="underline">React, Typescript, Next.JS and Tailwind CSS.</span> I strive for quality code, and my best output comes from collaboration, especially in agile environments. I practice test-driven development and follow web accessibility guidelines (WCAG 2.1).
                    </motion.h1>
                    <motion.h1 
                        className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-bold">Great news, I&apos;m available for work!</span>
                    </motion.h1>
                </div> 

                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link 
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={()=> {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    > 
                        Contact Me Here <span className="group-hover:translate-x-1 transition">✉️</span>
                    </Link>

                    <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10" href="/selam-habteab-resume-24.pdf" download> 
                        Download Resume <HiDownload className="group-hover:translate-y-1 transition" />
                    </a>

                    <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/selamhabteab/" target="_blank"> 
                        <BsLinkedin />
                    </a>

                    <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://github.com/selamhabteab" target="_blank">
                        <FaGithubSquare />
                    </a>

                </motion.div> 
            
            </div>
        </section>
  )
}
