import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Download, ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { userData } from "../../data/portfolioData";

const cvLink =
  "https://drive.google.com/uc?export=download&id=19yc_0mfqMyIMwpn7P0MoZvoPbTdLfbQ1";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero d- flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={6}
            className="hero-content order-2 order-lg-1 text-center text-lg-start"
          >
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="highlight-text">{userData.name}</span>
            </h1>
            <h2 className="fs-3 mb-4 text-secondary">{userData.title}</h2>
            <p className="lead mb-5">{userData.bio}</p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cvLink;
                  link.download = "PradeepChaurasiaCV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="primary"
                size="lg"
                className="d-flex align-items-center"
              >
                <Download size={20} className="me-2" />
                Download CV
              </Button>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline-primary btn-lg"
              >
                Contact Me
              </Link>
            </div>
          </Col>
          <Col
            lg={6}
            className="hero-image order-1 order-lg-2 text-center flex justify-content-center"
          >
            <img
              src={userData.profileImage}
              alt={userData.name}
              className="img-fluid rounded-circle profile-image"
              width="450"
              height="450"
            />
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="scroll-down-link"
            >
              <ArrowDown size={30} className="animate-bounce" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
