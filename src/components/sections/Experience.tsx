import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { userData } from '../../data/portfolioData';

const Experience: React.FC = () => {
  console.log('userData.experience:', userData.experience);
  
  return (
    <section id="experience" className="experience py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-divider"></div>
            <p className="section-description mx-auto">
              My professional journey and career milestones
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="timeline">
              {userData.experience.map((exp, index) => (
                <Card key={index} className="timeline-item border-0 shadow-sm mb-4">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="mb-3 mb-md-0">
                        <div className="experience-duration d-flex align-items-center mb-2">
                          <Calendar size={18} className="me-2 text-primary" />
                          <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                        </div>
                        <div className="experience-location d-flex align-items-center mb-2">
                          <MapPin size={18} className="me-2 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="experience-type d-flex align-items-center">
                          <Briefcase size={18} className="me-2 text-primary" />
                          <span>{exp.employmentType}</span>
                        </div>
                      </Col>
                      <Col md={9}>
                        <h4 className="fw-bold mb-1">{exp.position}</h4>
                        <h5 className="mb-3 text-primary">{exp.company}</h5>
                        <p className="mb-3">{exp.description}</p>
                        
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <>
                            <h6 className="fw-bold mb-2">Key Responsibilities:</h6>
                            <ul className="mb-3">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}.</li>
                              ))}
                            </ul>
                          </>
                        )}
                        
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div>
                            <h6 className="fw-bold mb-2">Technologies:</h6>
                            <div>
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge  text="dark\" className="me-2 mb-2\" key={techIndex}>
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;