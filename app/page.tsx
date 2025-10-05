import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FeaturedSection from './featured/page';
import WorkExperience from '../components/WorkExperience';
export default function Home() {
    return (
        <>
            {/* <VerticalNav /> */}
            <main>
                <Hero />
                <About />
                <Skills />
                <WorkExperience />
                {/* <FeaturedSection /> */}
                <Projects />
                {/* <Contact /> */}
            </main>
            <Footer />
        </>
    );
}
