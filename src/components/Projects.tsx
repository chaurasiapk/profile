/**
 * Projects Component
 *
 * This component displays the projects section of the portfolio, including:
 * - Creative coding projects with 3D flip card effects
 * - Project images, descriptions, and technology stacks
 * - Demo and GitHub links for each project
 * - GSAP ScrollTrigger animations for enhanced UX
 *
 * Features:
 * - 3D flip card animations on hover
 * - Responsive grid layout
 * - Technology tags with horizontal scrolling
 * - Project type categorization (Frontend/Backend/Full Stack)
 * - Image hover effects
 * - Dark mode support
 * - Accessibility features
 * - Smooth animations and transitions
 */

import React, { useEffect } from 'react';
import { Github, Monitor } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Projects Component
 *
 * Renders the projects section with interactive 3D flip cards,
 * project details, and external links
 */
const Projects: React.FC = () => {
  // Extract projects data from portfolio configuration
  const { projects } = portfolioData;

  /**
   * Initialize GSAP ScrollTrigger animations
   * Creates stack and flip effects for project cards
   */
  useEffect(() => {
    // Title animation - stack effect
    gsap.fromTo(
      '.projects-title',
      { y: -50, opacity: 0, scale: 1.2 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Project cards - staggered flip effect
    gsap.fromTo(
      '.project-card',
      { rotationY: 90, opacity: 0, scale: 0.8 },
      {
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  /**
   * Determine project type based on technologies used
   * Categorizes projects as Frontend, Backend, or Full Stack
   */
  const getProjectType = (technologies: string[]): string => {
    if (technologies.includes('React') && technologies.includes('Node.js')) {
      return 'Full Stack';
    }

    const frontendTechs = ['React', 'Vue', 'Angular', 'HTML', 'CSS'];
    if (technologies.some(tech => frontendTechs.includes(tech))) {
      return 'Frontend';
    }

    return 'Backend';
  };

  /**
   * Open external link in new tab
   * Safely handles URL opening
   */
  const openExternalLink = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500 projects-title">
          {projects.title}
        </h2>

        {/* Projects grid layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.creativeCodingProjects.map((project, index) => (
            <div key={index} className="project-card perspective-1000">
              <div className="relative w-full h-64 flip-card cursor-pointer">
                {/* Front of card */}
                <div className="flip-card-front">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out">
                    {/* Project image section - 60% height */}
                    <div className="w-full" style={{ height: '60%' }}>
                      {project.images.length > 0 ? (
                        <img
                          src={project.images[0]}
                          alt={`${project.title} - Front`}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <h3 className="text-base font-bold text-white text-center">
                            {project.title}
                          </h3>
                        </div>
                      )}
                    </div>

                    {/* Project content section - 40% height */}
                    <div
                      className="p-4 flex-1 flex flex-col justify-between"
                      style={{ height: '40%' }}
                    >
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300 text-sm">
                          {project.title}
                        </h3>
                        <p
                          className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed overflow-hidden"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Project title */}
                        <div className="mb-3">
                          <h3
                            className="font-semibold text-gray-800 dark:text-gray-200 text-base overflow-x-auto scrollbar-hide whitespace-nowrap"
                            style={{
                              scrollbarWidth: 'none',
                              msOverflowStyle: 'none',
                            }}
                          >
                            {project.title}
                          </h3>
                        </div>

                        {/* Project description - 2 lines with ellipsis */}
                        <p
                          className="text-gray-600 dark:text-gray-400 text-xs mb-4 leading-relaxed overflow-hidden"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Project type badge */}
                        <div className="mb-3">
                          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                            {project.technologies &&
                              getProjectType(project.technologies)}
                          </span>
                        </div>

                        {/* Technology stack */}
                        {project.technologies && (
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">
                              Used Tech:
                            </p>
                            <div
                              className="flex gap-1 overflow-x-auto scrollbar-hide"
                              style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                              }}
                            >
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full whitespace-nowrap flex-shrink-0"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action buttons - Demo and GitHub */}
                      <div className="flex gap-2">
                        <button
                          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110"
                          onClick={() => openExternalLink(project.demo)}
                          title="View Demo"
                          aria-label={`View demo for ${project.title}`}
                        >
                          <Monitor size={16} />
                        </button>
                        <button
                          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110"
                          onClick={() => openExternalLink(project.github)}
                          title="View Code"
                          aria-label={`View code for ${project.title}`}
                        >
                          <Github size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
