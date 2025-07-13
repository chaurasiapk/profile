/**
 * Experience Component
 *
 * This component displays the professional experience section of the portfolio, including:
 * - Professional work experience with timeline layout
 * - Freelance projects and side work
 * - Career highlights and statistics
 * - GSAP ScrollTrigger animations for enhanced UX
 *
 * Features:
 * - Responsive timeline design for work experience
 * - Staggered animations for experience cards
 * - Career statistics display
 * - Technology tags for each experience
 * - Dark mode support
 * - Accessibility features
 * - Smooth animations and transitions
 */

import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Experience Component
 *
 * Renders the experience section with professional background, freelance work,
 * and career highlights with smooth animations
 */
const Experience: React.FC = () => {
  // Extract experience data from portfolio configuration
  const { experience } = portfolioData;

  /**
   * Initialize GSAP ScrollTrigger animations
   * Creates different animation effects for various sections
   */
  useEffect(() => {
    // Title animation - bottom slide effect
    gsap.fromTo(
      '.experience-title',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Experience cards - staggered fade-in effect
    gsap.fromTo(
      '.experience-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Stats section - scale effect
    gsap.fromTo(
      '.stats-section',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500 experience-title">
          {experience.title}
        </h2>

        {/* Three-column layout: Professional experience and freelance work */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Professional Experience Column (spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="experience-card relative pl-8 border-l-2 border-blue-200"
                >
                  {/* Timeline dot indicator */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />

                  {/* Experience card content */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    {/* Job title, company, and type header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-blue-600 font-medium dark:text-blue-400">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {exp.type}
                      </span>
                    </div>

                    {/* Duration and location info */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-600 text-sm dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Job description */}
                    <p className="text-gray-600 mb-4 dark:text-gray-300">
                      {exp.description}
                    </p>

                    {/* Key achievements section */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2 dark:text-white">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm dark:text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Freelance & Side Projects Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              Freelance Work
            </h3>
            <div className="space-y-6">
              {experience.freelanceProjects.map((project, index) => (
                <div
                  key={index}
                  className="experience-card bg-gray-50 p-6 rounded-lg dark:bg-gray-800"
                >
                  <h4 className="font-semibold text-gray-800 mb-2 dark:text-white">
                    {project.title}
                  </h4>
                  <div className="text-blue-600 text-sm mb-2 dark:text-blue-400">
                    {project.client}
                  </div>
                  <div className="text-gray-500 text-sm mb-3 dark:text-gray-400">
                    {project.period}
                  </div>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Career highlights and statistics */}
            <div className="mt-12 bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white stats-section">
              <h4 className="text-xl font-bold mb-6">Career Highlights</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Years of Experience</span>
                  <span className="font-bold">
                    {experience.careerHighlights.yearsOfExperience}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="font-bold">
                    {experience.careerHighlights.projectsCompleted}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
