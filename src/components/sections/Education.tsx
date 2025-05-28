import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Calendar, MapPin, Award } from 'lucide-react';
import { userData } from '../../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="education py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">Education</h2>
            <div className="section-divider"></div>
            <p className="section-description mx-auto">
              My academic background and qualifications
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="timeline">
              {userData.education.map((edu, index) => (
                <Card key={index} className="timeline-item border-0 shadow-sm mb-4">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="mb-3 mb-md-0">
                        <div className="education-year d-flex align-items-center mb-2">
                          <Calendar size={18} className="me-2 text-primary" />
                          <span>{edu.startYear} - {edu.endYear}</span>
                        </div>
                        <div className="education-location d-flex align-items-center mb-2">
                          <MapPin size={18} className="me-2 text-primary" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="education-gpa d-flex align-items-center">
                            <Award size={18} className="me-2 text-primary" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </Col>
                      <Col md={9}>
                        <h4 className="fw-bold mb-1">{edu.degree}</h4>
                        <h5 className="mb-3 text-primary">{edu.institution}</h5>
                        <p className="mb-2">{edu.description}</p>
                        {edu.achievements && edu.achievements.length > 0 && (
                          <>
                            <h6 className="fw-bold mt-3 mb-2">Achievements:</h6>
                            <ul className="mb-0">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </>
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

export default Education;