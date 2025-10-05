"use client"
import React from 'react';
import { PAGE_IDS } from '../lib/constants/app';
import { WORK_EXPERIENCE } from '../lib/constants/app';
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  return (
    <section id={PAGE_IDS.WORK_EXPERIENCE} className="py-20 px-4 bg-fcfcfc">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-12">
          <h3 className="text-4xl font-extrabold text-center mb-16 text-brand-navy border-b-4 border-brand-coral inline-block pb-1">
            Work Experience
          </h3>
        </div>

        <div className="space-y-12">
          {WORK_EXPERIENCE[PAGE_IDS.WORK_EXPERIENCE].jobs.map((job, index) => (
            <div className={styles.timelineItem} key={index}>
              <p className="text-sm font-semibold text-brand-coral">{job.date}</p>
              <h4 className="text-2xl font-bold text-brand-navy mt-1">{job.title}</h4>
              <p className="text-lg text-gray-700">{job.company}</p>
              <p className="list-disc list-inside text-gray-600 mt-2 space-y-1 pl-4">{job.description}</p>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
