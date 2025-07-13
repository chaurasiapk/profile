/**
 * Skills Component
 *
 * This component displays the skills section of the portfolio, including:
 * - Interactive skill cards with category filtering
 * - Technology icons and proficiency levels
 * - Animated category buttons with hover effects
 * - GSAP ScrollTrigger animations for enhanced UX
 *
 * Features:
 * - Category-based skill filtering
 * - Interactive skill cards with hover animations
 * - Technology icons mapping
 * - Proficiency level indicators
 * - Responsive grid layout
 * - Dark mode support
 * - Accessibility features
 * - Smooth animations and transitions
 */

import React, { useState, useEffect } from 'react';
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  GitBranch,
  FileCode,
  Server,
  Layers,
  Cloud,
  Figma,
  Wrench,
  Lock,
  Monitor,
  MousePointer,
  Package,
  Wifi,
  Sliders,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Icon mapping for different technologies
 * Maps skill names to their corresponding Lucide icons
 */
const iconMap: Record<string, React.ElementType> = {
  React: Code,
  TypeScript: FileCode,
  JavaScript: FileCode,
  HTML5: FileCode,
  CSS3: FileCode,
  'Next.js': Layers,
  'Tailwind CSS': Layers,
  'SCSS/SASS': Layers,
  'Node.js': Server,
  'Express.js': Server,
  MongoDB: Database,
  'Rest Api': Cloud,
  Github: GitBranch,
  'VS Code': Monitor,
  Cursor: MousePointer,
  Figma: Figma,
  WebAuthn: Lock,
  WebSockets: Wifi,
  Docker: Package,
  Git: GitBranch,
  Blender: Wrench,
  'Adobe XD': Palette,
  'State Management': Sliders,
  Tools: Wrench,
};

/**
 * Get icon component for category buttons
 * Returns appropriate icon based on category name
 */
const getIconComponent = (iconName: string): React.ElementType => {
  switch (iconName) {
    case 'Zap':
      return Zap;
    case 'Code':
      return Code;
    case 'Palette':
      return Palette;
    case 'Database':
      return Database;
    case 'Smartphone':
      return Smartphone;
    case 'Globe':
      return Globe;
    default:
      return Zap;
  }
};

/**
 * Skills Component
 *
 * Renders the skills section with interactive cards, category filtering,
 * and animated skill displays
 */
const Skills: React.FC = () => {
  // Extract skills data from portfolio configuration
  const { skills } = portfolioData;

  // Active category state for filtering
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  /**
   * Get filtered skills based on active category
   * Returns all skills if 'all' is selected, otherwise filters by category
   */
  const getFilteredSkills = () => {
    if (activeCategory === 'all') return skills.skills;
    return skills.skills.filter(skill => skill.category === activeCategory);
  };

  /**
   * Initialize GSAP ScrollTrigger animations
   * Creates slide and scale effects for different sections
   */
  useEffect(() => {
    // Title animation - right slide effect
    gsap.fromTo(
      '.skills-title',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skills-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Skill cards - left to right slide effect
    gsap.fromTo(
      '.skill-card',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Continuous rotation animation for skill cards
    gsap.to('.skill-card', {
      rotation: -45,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.2,
    });
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="py-12 px-2 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 skills-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {skills.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I use to bring
            ideas to life
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skills.skillCategories.map(category => {
            const Icon = getIconComponent(category.icon);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs transition-all duration-500 ease-in-out font-medium shadow-sm transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer group ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white scale-110 shadow-xl shadow-blue-500/40 ring-2 ring-blue-300 dark:ring-blue-600'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-700'
                }`}
                aria-label={`Filter skills by ${category.name}`}
              >
                <Icon
                  size={14}
                  className="transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12"
                />
                <span className="transition-all duration-500 ease-in-out group-hover:translate-x-1">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {getFilteredSkills().map((skill, index) => {
            const Icon = iconMap[skill.name] || Zap;
            return (
              <div
                key={index}
                className="skill-card relative flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-700 ease-in-out group p-3 min-h-[210px] hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 transform-gpu cursor-pointer"
                style={{ minWidth: 0 }}
              >
                {/* Icon section - 60% of card height */}
                <div
                  className={`w-full flex items-center justify-center relative transition-all duration-500 ease-in-out group-hover:scale-105`}
                  style={{ height: '60%' }}
                >
                  <div
                    className={`w-16 h-16 rounded-full shadow flex items-center justify-center border-2 border-white dark:border-gray-900 transition-all duration-500 ease-in-out ${skill.color} group-hover:shadow-lg group-hover:shadow-black/20`}
                  >
                    <Icon
                      className="text-white group-hover:scale-125 transition-all duration-500 ease-in-out"
                      size={32}
                    />
                  </div>
                </div>

                {/* Skill content section */}
                <div className="pt-4 pb-2 px-2 flex flex-col items-center w-full transition-all duration-500 ease-in-out group-hover:scale-105">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 truncate w-full text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 ease-in-out">
                    {skill.name}
                  </h3>
                  <span className="inline-block mb-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold group-hover:bg-blue-200 group-hover:text-blue-800 transition-all duration-500 ease-in-out">
                    Level: {skill.level}%
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500 ease-in-out">
                    {skill.category.charAt(0).toUpperCase() +
                      skill.category.slice(1)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
