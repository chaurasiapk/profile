/**
 * Hero Component
 *
 * The main landing section of the portfolio that displays:
 * - Personal introduction with typing animation
 * - Download resume functionality
 * - Social media links
 * - Interactive code editor with tech snippets
 * - Copy-to-clipboard functionality
 *
 * @component
 * @returns {JSX.Element} The hero section component
 */
import { useState, useEffect, useCallback } from 'react';
import {
  Github,
  Twitter,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  Copy,
  Check,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Tech card data with code snippets for each technology
 */
const TECH_CARDS = [
  {
    name: 'React',
    color: 'bg-blue-500',
    code: `import React from 'react';

const PradeepPortfolio = () => {
  return (
    <div className="portfolio">
      <h1>Hi, I'm Pradeep Chaurasia</h1>
      <p>Frontend Developer passionate about creating 
         beautiful and functional web experiences</p>
      <Skills />
      <Projects />
    </div>
  );
};

export default PradeepPortfolio;`,
  },
  {
    name: 'JavaScript',
    color: 'bg-yellow-500',
    code: `// Pradeep's JavaScript Skills
const developer = {
  name: 'Pradeep Chaurasia',
  role: 'Frontend Developer',
  skills: ['React', 'TypeScript', 'Node.js'],
  experience: '3+ years',
  passion: 'Building user-friendly applications'
};

const introduce = (dev) => {
  return \`Hi! I'm \${dev.name}, a \${dev.role} 
  with \${dev.experience} of experience.\`;
};

console.log(introduce(developer));`,
  },
  {
    name: 'Express',
    color: 'bg-green-500',
    code: `const express = require('express');
const app = express();

// Pradeep's Portfolio API
app.get('/api/about', (req, res) => {
  res.json({
    name: 'Pradeep Chaurasia',
    role: 'Frontend Developer',
    location: 'India',
    skills: ['React', 'TypeScript', 'Node.js'],
    projects: ['E-commerce', 'Portfolio', 'Dashboard']
  });
});

app.listen(3000, () => {
  console.log("Pradeep's portfolio server running!");
});`,
  },
  {
    name: 'HTML',
    color: 'bg-orange-500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pradeep Chaurasia - Portfolio</title>
    <meta name="description" content="Frontend Developer Portfolio">
</head>
<body>
    <header>
        <h1>Pradeep Chaurasia</h1>
        <p>Frontend Developer & UI/UX Enthusiast</p>
    </header>
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Passionate developer creating amazing web experiences</p>
        </section>
    </main>
</body>
</html>`,
  },
  {
    name: 'CSS',
    color: 'bg-purple-500',
    code: `/* Pradeep's Portfolio Styles */
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  animation: fadeInUp 1s ease-out;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}`,
  },
];

/**
 * Social media icon mapping
 */
const SOCIAL_ICONS = {
  Github,
  Twitter,
  Linkedin,
  Email: Mail,
  ExternalLink,
};

const Hero = (): JSX.Element => {
  // State management
  const [typedText, setTypedText] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('React');
  const [copied, setCopied] = useState<boolean>(false);

  const { hero } = portfolioData;
  const fullText = hero.name;

  /**
   * Typewriter effect for the name animation
   */
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  /**
   * GSAP animations for hero content
   */
  useEffect(() => {
    // Slide in from left effect for hero content
    gsap.fromTo(
      '.hero-content',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Fade in effect for code editor
    gsap.fromTo(
      '.code-editor',
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.code-editor',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  /**
   * Handle resume download with Google Docs link conversion
   */
  const handleResumeDownload = useCallback(() => {
    let downloadUrl = portfolioData.personal.resume;

    // Convert Google Docs view link to export link
    if (portfolioData.personal.resume.includes('docs.google.com')) {
      downloadUrl = portfolioData.personal.resume.replace(
        '/edit?tab=t.0',
        '/export?format=pdf'
      );
    }

    // Create temporary anchor element for download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Pradeep_Chaurasia_Frontend_Developer.pdf';
    link.style.display = 'none';

    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback: open in new tab if download fails
      window.open(downloadUrl, '_blank');
    }
  }, []);

  /**
   * Copy code snippet to clipboard
   */
  const handleCopyCode = useCallback(async () => {
    const selectedTechData = TECH_CARDS.find(
      tech => tech.name === selectedTech
    );
    if (selectedTechData) {
      try {
        await navigator.clipboard.writeText(selectedTechData.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    }
  }, [selectedTech]);

  /**
   * Get social media icon component
   */
  const getSocialIcon = (iconName: string) => {
    return SOCIAL_ICONS[iconName as keyof typeof SOCIAL_ICONS] || ExternalLink;
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Diagonal Blue Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 transform skew-x-12 origin-top-right translate-x-32" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content - Personal Introduction */}
          <div className="hero-content space-y-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-2 transition-colors duration-300">
                {hero.greeting}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 uppercase tracking-wide transition-colors duration-300">
                {hero.subtitle}
              </p>
            </div>

            {/* Resume Download Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 flex items-center gap-2 transform hover:scale-105 cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {hero.socialLinks.map((social, index) => {
                const Icon = getSocialIcon(social.icon);
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-200 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Interactive Code Editor */}
          <div className="relative">
            <div className="code-editor bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-md ml-auto border border-gray-200 dark:border-gray-700 transition-all duration-300">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-xs text-gray-500 dark:text-gray-400">
                    {selectedTech}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                  title="Copy code"
                >
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Scrollable Code Content */}
              <div
                className="space-y-3 font-mono text-sm max-h-64 overflow-y-auto"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#d1d5db #f3f4f6',
                }}
              >
                {TECH_CARDS.find(tech => tech.name === selectedTech)
                  ?.code.split('\n')
                  .map((line, index) => (
                    <div key={index} className="flex">
                      <span className="text-gray-400 w-6 select-none flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 dark:text-gray-200 ml-4 break-words">
                        {line}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Tech Selection Cards */}
            <div className="flex gap-2 mt-6 justify-center flex-wrap">
              {TECH_CARDS.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTech(tech.name)}
                  className={`px-3 py-2 rounded-lg text-white text-xs font-medium transition-all duration-200 transform hover:scale-110 hover:shadow-lg ${tech.color} ${
                    selectedTech === tech.name
                      ? 'ring-2 ring-white ring-opacity-50 scale-110 shadow-lg'
                      : ''
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
