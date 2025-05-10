"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MoveLeft } from "lucide-react";
import PageBackButton from '../../../components/PageBack';
import { PAGE_IDS } from '../../../lib/constants/app'
import Image from 'next/image'
import flipkartLogo from '../../../public/flipkart_logo.jpeg';
import keystrideLogo from '../../../public/keystride_logo.jpeg';
import agencyLogo from '../../../public/agency_logo.jpeg';
import karbensLogo from '../../../public/karbens_logo.jpeg';

const detailsData = {
    [PAGE_IDS.ABOUT]: {
        title: 'About Me',
        content: [
            {
                heading: 'Background',
                text: "A frontend developer with a passion for startups, always experimenting with product ideas and modern UI technologies. I'm obsessed with crafting pixel-perfect, performant interfaces and love exploring what's next in the web world."
            },
            {
                heading: 'Interests',
                text: "When I'm not coding, you'll probably find me outdoors — cycling, gardening, fishing, hitting the gym — or jamming on my guitar, dreaming of playing in a band someday."
            }
        ]
    },
    [PAGE_IDS.WORK_EXPERIENCE]: {
        title: 'Work Experience',
        content: [
            {
                heading: 'Flipkart',
                text: "As a UI Engineer at Flipkart, I have been fortunate to contribute across multiple business units including the Seller Platform, Flipkart Wholesale, and Flipkart Retails. My work has involved building and enhancing key systems such as the Order Management System, Payment Management, Rewards, and the Claim Management System.My technical contributions span a modern web stack comprising React.js, Node.js, GraphQL, Styled Components, and Express.js. More recently, I have been actively involved in the development of Flipkart's internal React component library, contributing to the design and implementation of core UI components such as the Navigation Rail, FilterBar, and the Icon Library—aimed at ensuring design consistency and reusability across applications.",
                logo: flipkartLogo
            },
            {
                heading: 'Keystride',
                text: "At Keystride, I was responsible for developing responsive and accessible UI for payment modules using AngularJS (v1). I collaborated closely with designers to translate visual concepts into functional interfaces and played an active role in maintaining code quality through regular code reviews. I was also involved in deployment activities and contributed to improving the overall front-end workflow and development practices within the team.",
                logo: keystrideLogo

            },
            {
                heading: 'Agency',
                text: "At Ajency, I contributed to multiple WordPress-based projects, including customizing templates and building features using core PHP. I also worked on internal tools, such as a time-tracking system designed to monitor and report developer work hours. My role involved end-to-end development, collaborating closely with designers and project managers to deliver tailored solutions.",
                logo: agencyLogo
            },
            {
                heading: 'Karbens',
                text: "At Karbens, I worked on developing static websites using HTML, CSS, and JavaScript. I was also involved in end-to-end development of dynamic projects, including a food ordering system and pharmaceutical presentation platforms. These projects were built using core PHP, with custom UI and interactive slides developed using vanilla JS and CSS.",
                logo: karbensLogo
            }
        ]
    },
    [PAGE_IDS.PROJECTS]: {
        title: 'Projects',
        content: [
            {
                heading: 'Retailer Hub Dashboard',
                text: 'Dynamic, permission-based dashboard built with React for Flipkart.'
            },
            {
                heading: 'Claim Management System',
                text: 'Config-driven forms to manage workflows from scratch.'
            }
        ]
    },
    [PAGE_IDS.CONTACT]: {
        title: 'Contact',
        content: [
            {
                heading: 'Get in Touch',
                text: 'Please schedule a call with me to discuss your project or just to say hi!'
            }
        ]
    }
};


export default function DetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const data = detailsData[id as keyof typeof detailsData];
    const router = useRouter();

    if (!data) {
        return <div>Page not found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-black text-white p-8"
        >
            <PageBackButton id={id} />
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
                <div className="space-y-8">
                    {data.content.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='flex flex-col gap-6'
                        >

                            <div className='flex flex-row gap-4'>
                                {section.logo && (
                                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
                                        <Image
                                            src={section.logo}
                                            alt={`${section.heading} logo`}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                <div className="bg-gray-900 rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
                                    <p className="text-gray-300">{section.text}</p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
} 