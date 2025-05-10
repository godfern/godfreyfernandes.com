import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedSection from './featured/page';
import WorkExperience from '../components/WorkExperience';
import VerticalNav from '../components/VerticalNav';
export default function Home() {
    return (
        <>
            {/* <VerticalNav /> */}
            <main>
                <Hero />
                <About />
                <WorkExperience />
                {/* <FeaturedSection /> */}
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
