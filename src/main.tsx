/**
 * Main Application Entry Point
 *
 * This file serves as the main entry point for the React application, including:
 * - React application initialization
 * - Lenis smooth scrolling setup
 * - Root element rendering
 * - Strict mode configuration
 *
 * Features:
 * - Lenis smooth scrolling integration
 * - React 18 createRoot API
 * - Strict mode for development
 * - Performance optimized scrolling
 * - Type-safe implementation
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import App from './App.tsx';
import './index.css';

/**
 * Initialize Lenis for smooth scrolling
 * Configures smooth scrolling with custom easing and duration
 */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

/**
 * Request Animation Frame function
 * Handles smooth scrolling animation loop
 *
 * @param time - Current timestamp from requestAnimationFrame
 */
function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// Start the animation loop
requestAnimationFrame(raf);

// Create and render the React application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
