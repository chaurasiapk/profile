import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="bg-[#213448] py-5">
      <div
        className={`
          fixed bottom-8 right-8 z-[1000]
          transition-all duration-300
          ${
            showButton
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center justify-center bg-[#213448] text-white rounded-full shadow-lg p-3 hover:bg-[#2d4666] transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </Link>
      </div>
      <Container>
        <Row className="mb-4">
          <Col
            xs={12}
            md={4}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <h5 className="fw-bold text-[#fff]">Portfolio</h5>
            <p className="mt-2 text-[#fff]">
              Showcasing my skills, projects, and professional journey.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <h5 className="fw-bold text-[#fff]">Quick Links</h5>
            <ul className="list-unstyled mt-2 flex justify-center gap-2">
              {["About", "Skills", "Projects", "Experience"].map((item, i) => (
                <>
                  {i !== 0 && <li className="text-[#fff]">|</li>}
                  <li key={item} className="mb-2">
                    <Link
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer no-underline hover:underline text-[#fff]"
                    >
                      {item}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5 className="fw-bold text-[#fff]">Connect</h5>
            <div className="social-icons mt-2 flex space-x-3 justify-center md:justify-end">
              <Link
                to="https://github.com/chaurasiapk"
                className="cursor-pointer text-white hover:text-gray-300 transition-colors"
                aria-label="GitHub"
                onClick={() =>
                  window.open(
                    "https://github.com/chaurasiapk",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <Github size={20} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/pradeepchaurasia93/"
                className="cursor-pointer text-white hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/pradeepchaurasia93/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <Linkedin size={20} />
              </Link>
              <Link
                to="mailto:chaurasia.pk6@gmail.com"
                className="cursor-pointer text-white hover:text-gray-300 transition-colors"
                aria-label="Email"
                onClick={() => window.open("mailto:chaurasia.pk6@gmail.com")}
              >
                <Mail size={20} />
              </Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <hr className="my-4 bg-[#fff] h-[2px]" />
            <p className="text-center  mb-0 text-[#fff]">
              © {new Date().getFullYear()} Pradeep Chaurasia. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
