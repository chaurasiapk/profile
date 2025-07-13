/**
 * Education Component
 *
 * This component displays the education section of the portfolio, including:
 * - Academic background with timeline layout
 * - Certifications and achievements
 * - Learning statistics and continuous learning info
 * - GSAP ScrollTrigger animations for enhanced UX
 *
 * Features:
 * - Responsive timeline design
 * - Staggered animations for education cards
 * - Bounce effects for certifications
 * - Learning statistics display
 * - Dark mode support
 * - Accessibility features
 * - Smooth animations and transitions
 */

import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Education Component
 *
 * Renders the education section with academic background, certifications,
 * and learning statistics with smooth animations
 */
const Education: React.FC = () => {
  // Extract education data from portfolio configuration
  const { education } = portfolioData;

  /**
   * Initialize GSAP ScrollTrigger animations
   * Creates different animation effects for various sections
   */
  useEffect(() => {
    // Title animation - center zoom effect
    gsap.fromTo(
      '.education-title',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.education-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Education cards - staggered rotation effect
    gsap.fromTo(
      '.education-card',
      { rotation: -15, opacity: 0, scale: 0.8 },
      {
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.education-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Certification cards - bounce effect
    gsap.fromTo(
      '.certification-card',
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.certification-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500 education-title">
          {education.title}
        </h2>

        {/* Two-column layout: Education timeline and certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              Academic Background
            </h3>
            <div className="space-y-8">
              {education.education.map((edu, index) => (
                <div
                  key={index}
                  className="education-card relative pl-8 border-l-2 border-blue-200"
                >
                  {/* Timeline dot indicator */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />

                  {/* Education card content */}
                  <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                    {/* Degree and grade header */}
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-blue-500 font-medium">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Institution and location info */}
                    <div className="flex items-center gap-4 mb-3 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <GraduationCap size={16} />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    {/* Duration period */}
                    <div className="flex items-center gap-1 mb-3 text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              Certifications
            </h3>

            {/* Certifications list */}
            <div className="space-y-4">
              {education.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="certification-card bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 dark:bg-blue-900/20 dark:border-blue-400"
                >
                  <p className="text-gray-800 font-medium dark:text-white">
                    {cert}
                  </p>
                </div>
              ))}
            </div>

            {/* Continuous learning information card */}
            <div className="mt-12 bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white">
              <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
              <p className="text-blue-100 leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest technologies. I regularly participate in online courses,
                workshops, and coding challenges to enhance my skills.
              </p>

              {/* Learning statistics */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">
                    {education.learningStats.courses}+
                  </div>
                  <div className="text-blue-200 text-sm">Online Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {education.learningStats.challenges}+
                  </div>
                  <div className="text-blue-200 text-sm">Coding Challenges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
