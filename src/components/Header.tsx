import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const closeNavbar = () => setExpanded(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <Container className="flex items-center justify-between py-3">
        <span className="fw-bold fs-4">Portfolio</span>
        {/* Desktop Nav */}
        <Nav className="ms-auto gap-2 d-none d-lg-flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              className="nav-link mx-2 cursor-pointer"
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.name}
            </Link>
          ))}
        </Nav>
        {/* Mobile Menu Icon */}
        <button
          className="d-lg-none border-0 bg-transparent"
          onClick={() => setExpanded(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </Container>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${expanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeNavbar}
      />
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ${expanded ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button className="border-0 bg-transparent" onClick={closeNavbar} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <Nav className="flex flex-col items-end gap-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              className="nav-link text-lg cursor-pointer w-full"
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeNavbar}
            >
              {item.name}
            </Link>
          ))}
        </Nav>
      </div>
    </nav>
  );
};

export default Header;