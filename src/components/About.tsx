/**
 * About Component
 *
 * Displays a personal introduction, highlights, and inspirational quotes.
 * Includes GSAP scroll-triggered animations for engaging effects.
 *
 * @component
 * @returns {JSX.Element} The about section component
 */
import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

const About = (): JSX.Element => {
  const { about } = portfolioData;

  useEffect(() => {
    // Animate main about section sliding in from the left
    gsap.fromTo(
      '.about-main',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-main',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate quote cards with a drop and scale effect
    gsap.fromTo(
      '.quote-card',
      { y: -50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.quote-card',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500">
          {about.title}
        </h2>

        {/* Main About Content with Profile Image and Highlights */}
        <div className="relative about-main">
          {/* Decorative Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transform -skew-y-2 origin-top-left" />

          <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 py-16 px-8 text-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-black/30 cursor-pointer group">
                  <img
                    src={about.image}
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Description and Highlights */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg mb-4 leading-relaxed">
                  {about.description}
                </p>
                {about.highlights.map((highlight, index) => (
                  <p key={index} className="text-lg mb-4 leading-relaxed">
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quotes Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {about.quotes.map((quote, index) => (
            <div
              key={index}
              className="quote-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group"
            >
              <p className="text-sm text-blue-500 pb-2 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                {quote.author}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
