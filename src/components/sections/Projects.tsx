/* eslint-disable no-constant-binary-expression */
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { ExternalLink, Github } from "lucide-react";
import { userData } from "../../data/portfolioData";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  // Get unique categories from projects
  const categories = [
    "all",
    ...new Set(userData.projects.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? userData.projects
      : userData.projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">My Projects</h2>
            <div className="section-divider"></div>
            <p className="section-description mx-auto">
              Explore some of my recent work and personal projects
            </p>
          </Col>
        </Row>
        {false && (
          <Row className="mb-4 justify-content-center">
            <Col lg={8} className="text-center">
              <div className="filter-buttons">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={
                      filter === category ? "primary" : "outline-primary"
                    }
                    className="mx-2 mb-2 text-capitalize"
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        )}
        <Row>
          {filteredProjects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 project-card border-0 shadow-sm">
                <div className="project-image-container">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light me-2"
                        >
                          <ExternalLink size={18} className="me-1" />
                          Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light"
                        >
                          <Github size={18} className="me-1" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-2">
                    {project.title}
                  </Card.Title>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        bg="light\"
                        text="dark\"
                        className="me-2 mb-1\"
                        key={techIndex}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {filteredProjects.length === 0 && (
          <Row className="mt-3">
            <Col className="text-center">
              <p>No projects found in this category.</p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Projects;
