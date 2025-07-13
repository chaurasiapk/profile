/**
 * Main Application Component
 *
 * This component serves as the root of the portfolio application.
 * It wraps the entire app with the theme provider and renders
 * all the main sections of the portfolio.
 *
 * @component
 * @returns {JSX.Element} The main application component
 */
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
