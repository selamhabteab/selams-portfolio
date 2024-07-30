"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center scroll-mt-28" id="home">
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
                

                    <span className="font-bold">Hello, I'm Selam.</span> As a software developer I am committed to the continuous learning style of building web applications. I have experience with full-stack development but <span className="font-bold">I focus on front-end development with ReactJS.</span>  I strive for quality code, and my best output comes from collaboration, especially in agile environments. I practice test-driven development and follow web accessibility guidelines (WCAG 2.1).
                    {/* <span className="font-bold">full-stack developer</span> with{" "}
                    <span className="font-bold">8 years</span> of experience. I enjoy
                    building <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React (Next.js)</span>. */}
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
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-xl"
                > 
                    Contact Me Here <span className="group-hover:translate-x-1 transition">✉️</span>
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded shadow-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href="/resume.pdf" download> 
                    Download Resume <HiDownload className="group-hover:translate-y-1 transition" />
                </a>

                <a className="bg-white p4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 h-[35px] w-[35px] justify-center" href="https://www.linkedin.com/in/selamhabteab/" target="_blank"> 
                    <BsLinkedin />
                </a>

                <a className="bg-white p4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 h-[35px] w-[35px] justify-center" href="https://github.com/selamhabteab" target="_blank">
                    <FaGithubSquare />
                </a>

            </motion.div> 
        
        </div>
    </section>
  )
}
