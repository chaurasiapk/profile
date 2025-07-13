/**
 * useGSAP Hook
 *
 * This custom hook provides GSAP animation utilities for React components, including:
 * - Fade-in animations with scroll triggers
 * - Staggered animations for multiple elements
 * - Scale and slide animations
 * - ScrollTrigger integration for scroll-based animations
 *
 * Features:
 * - Reusable animation functions
 * - Scroll-triggered animations
 * - Staggered element animations
 * - Multiple animation types (fade, scale, slide)
 * - Type-safe implementation
 * - Performance optimized with refs
 * - Easy integration with React components
 */

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * useGSAP Hook
 *
 * Provides GSAP animation utilities for React components
 * Returns ref and animation functions for easy integration
 *
 * @returns Object containing elementRef and animation functions
 */
export const useGSAP = () => {
  // Reference to the element that will be animated
  const elementRef = useRef<HTMLDivElement>(null);

  /**
   * Fade in animation from bottom to top
   * Animates element with opacity and y-position changes
   *
   * @param delay - Delay before animation starts (default: 0)
   */
  const fadeInUp = (delay = 0): void => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  };

  /**
   * Staggered fade-in animation for multiple elements
   * Animates multiple elements with staggered timing
   *
   * @param selector - CSS selector for elements to animate
   * @param stagger - Time between each element animation (default: 0.1)
   * @param delay - Initial delay before first animation (default: 0)
   */
  const staggerFadeIn = (selector: string, stagger = 0.1, delay = 0): void => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  /**
   * Scale in animation
   * Animates element with scale and opacity changes
   *
   * @param delay - Delay before animation starts (default: 0)
   */
  const scaleIn = (delay = 0): void => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  };

  /**
   * Slide in animation from left
   * Animates element sliding in from the left side
   *
   * @param delay - Delay before animation starts (default: 0)
   */
  const slideInFromLeft = (delay = 0): void => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  };

  /**
   * Slide in animation from right
   * Animates element sliding in from the right side
   *
   * @param delay - Delay before animation starts (default: 0)
   */
  const slideInFromRight = (delay = 0): void => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  };

  return {
    elementRef,
    fadeInUp,
    staggerFadeIn,
    scaleIn,
    slideInFromLeft,
    slideInFromRight,
  };
};
