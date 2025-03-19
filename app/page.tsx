import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
