"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '../lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return (
        <section ref={ref} id="contact"  className="mb-28 max-w-[53rem] scroll-mt-28 text=center sm:mb-40">
            <SectionHeading>Contact</SectionHeading>
        </section>
    )
}