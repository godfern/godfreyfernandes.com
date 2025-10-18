"use client"
import React from 'react';
import { PAGE_IDS } from '../lib/constants/app'
import { SKILLS } from '../lib/constants/app'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <section id={PAGE_IDS.SKILLS} className="py-20 px-4 bg-brand-navy text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center mb-12">
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-brand-aqua border-b-4 border-brand-sand inline-block pb-1">
                        Technical Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">


                    <div className="bg-brand-navy/80 p-6 rounded-xl border border-brand-aqua/50 shadow-lg">
                        <h4 className="text-2xl font-bold mb-4 text-brand-sand">
                            Frontend & UI
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className={`${styles.skillBadge} bg-brand-aqua text-brand-navy`}>{SKILLS[PAGE_IDS.SKILLS].frontend[0]}</span>
                            <span className={`${styles.skillBadge} bg-brand-aqua text-brand-navy`}>{SKILLS[PAGE_IDS.SKILLS].frontend[1]}</span>
                            <span className={`${styles.skillBadge} bg-brand-aqua text-brand-navy`}>{SKILLS[PAGE_IDS.SKILLS].frontend[2]}</span>
                            <span className={`${styles.skillBadge} bg-brand-aqua text-brand-navy`}>{SKILLS[PAGE_IDS.SKILLS].frontend[3]}</span>
                            <span className={`${styles.skillBadge} bg-brand-aqua text-brand-navy`}>{SKILLS[PAGE_IDS.SKILLS].frontend[4]}</span>
                        </div>
                    </div>

                    <div className="bg-brand-navy/80 p-6 rounded-xl border border-brand-aqua/50 shadow-lg">
                        <h4 className="text-2xl font-bold mb-4 text-brand-sand">
                            Backend & Full Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className={`${styles.skillBadge} bg-brand-coral text-white`}>{SKILLS[PAGE_IDS.SKILLS].backend[0]}</span>
                            <span className={`${styles.skillBadge} bg-brand-coral text-white`}>{SKILLS[PAGE_IDS.SKILLS].backend[1]}</span>
                            <span className={`${styles.skillBadge} bg-brand-coral text-white`}>{SKILLS[PAGE_IDS.SKILLS].backend[2]}</span>
                        </div>
                    </div>

                    <div className="bg-brand-navy/80 p-6 rounded-xl border border-brand-aqua/50 shadow-lg">
                        <h4 className="text-2xl font-bold mb-4 text-brand-sand">
                            Tools & DevOps
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className={`${styles.skillBadge} bg-gray-500 text-white`}>{SKILLS[PAGE_IDS.SKILLS].tools[0]}</span>
                            <span className={`${styles.skillBadge} bg-gray-500 text-white`}>{SKILLS[PAGE_IDS.SKILLS].tools[1]}</span>
                            <span className={`${styles.skillBadge} bg-gray-500 text-white`}>{SKILLS[PAGE_IDS.SKILLS].tools[2]}</span>
                            <span className={`${styles.skillBadge} bg-gray-500 text-white`}>{SKILLS[PAGE_IDS.SKILLS].tools[3]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
