/**
 * Header Component
 *
 * This component handles the main navigation header of the portfolio, including:
 * - Responsive navigation menu (desktop and mobile)
 * - Active section tracking based on scroll position
 * - Dark/light theme toggle functionality
 * - Smooth scrolling to sections
 * - Mobile menu with animations
 * - GSAP ScrollTrigger animations for enhanced UX
 *
 * Features:
 * - Fixed position with backdrop blur
 * - Responsive design for all screen sizes
 * - Active section highlighting
 * - Theme switching capability
 * - Mobile menu with smooth transitions
 * - Accessibility features (ARIA labels)
 * - Dark mode support
 * - Smooth animations and transitions
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Header Component
 *
 * Renders the main navigation header with responsive menu, theme toggle,
 * and smooth scrolling functionality
 */
const Header: React.FC = () => {
  // Navigation state management
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Theme context
  const { isDark, toggleTheme } = useTheme();

  // Navigation items configuration
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'My Skillsets' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  /**
   * Initialize GSAP ScrollTrigger animations
   * Creates animations for logo and navigation items
   */
  useEffect(() => {
    // Logo animation - slide effect
    gsap.fromTo(
      '.header-logo',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.header-logo',
          start: 'top top',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Navigation items - staggered fade effect
    gsap.fromTo(
      '.nav-item',
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.nav-item',
          start: 'top top',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  /**
   * Handle scroll events to update active section
   * Tracks which section is currently in view
   */
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Scroll to specific section smoothly
   * Closes mobile menu after navigation
   */
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  /**
   * Handle clicks outside mobile menu
   * Prevents body scroll when menu is open
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center header-logo">
            <img
              src="https://res.cloudinary.com/dobci6t4h/image/upload/v1752325513/logo1_jerwwb.png"
              alt="Portfolio Logo"
              className="h-[56px]"
            />
          </div>

          {/* Desktop navigation menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme toggle and mobile menu controls */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle button */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full transition-colors duration-200"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? '☀️ LIGHT' : '🌙 DARK'}
            </button>

            {/* Mobile menu toggle button */}
            <button
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu with smooth transitions */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm pl-2 transition-all duration-200 transform ${
                    activeSection === item.id
                      ? 'text-blue-500 scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-105'
                  } ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
