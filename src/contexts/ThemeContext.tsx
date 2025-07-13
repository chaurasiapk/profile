/**
 * ThemeContext
 *
 * This context provides theme management functionality for the portfolio, including:
 * - Dark/light theme state management
 * - Theme persistence in localStorage
 * - System theme preference detection
 * - Theme toggle functionality
 * - CSS class management for Tailwind dark mode
 *
 * Features:
 * - Automatic theme detection from system preferences
 * - Persistent theme storage across sessions
 * - Smooth theme transitions
 * - Type-safe context implementation
 * - Error handling for context usage
 * - Tailwind CSS dark mode integration
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Theme context interface
 * Defines the structure for theme-related state and functions
 */
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Create theme context with undefined default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 *
 * Provides theme context to the application
 * Manages theme state and persistence
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Theme state management
  const [isDark, setIsDark] = useState<boolean>(false);

  /**
   * Initialize theme from localStorage or system preference
   * Runs once on component mount
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // Use saved theme preference
      setIsDark(savedTheme === 'dark');
    } else {
      // Use system theme preference as default
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  /**
   * Update localStorage and CSS classes when theme changes
   * Persists theme preference and applies Tailwind dark mode
   */
  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Apply Tailwind dark mode classes
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  /**
   * Toggle between dark and light themes
   * Updates theme state which triggers useEffect
   */
  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme Hook
 *
 * Custom hook to access theme context
 * Provides type-safe access to theme state and functions
 *
 * @throws Error if used outside ThemeProvider
 * @returns ThemeContextType - Theme state and toggle function
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
