"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '../lib/hooks';
import { experiencesData } from '../lib/data'

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    return (
        <section ref={ref} id="experience"  className="mb-28 max-w-[53rem] scroll-mt-28 text=center sm:mb-40">
            <SectionHeading>My Experience</SectionHeading>
            <ul>
                {
                    experiencesData.map((experience, index) => (
                        <li key={index} className="">{experience.title}</li>
                    ))
                }
            </ul>
        </section>
    )
}
