import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { userData } from '../../data/portfolioData';
import { Users, Map, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills.',
    },
    {
      icon: <Map size={32} />,
      title: 'Problem Solving',
      description: 'Analytical thinker who loves tackling complex challenges.'
    },
    {
      icon: <Award size={32} />,
      title: 'Dedication',
      description: 'Committed to delivering high-quality work on time.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Passion',
      description: 'Enthusiastic about learning and growing professionally.'
    }
  ];

  return (
    <section id="about" className="about py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image">
              <img 
                src={userData.aboutImage} 
                alt="About me" 
                className="img-fluid rounded shadow-lg" 
              />
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="mb-3 fw-bold">Who I Am</h3>
            <p className="lead mb-4">{userData.aboutHeadline}</p>
            <p className="mb-4">{userData.aboutDescription}</p>
            
            <Row>
              {userData.personalDetails.map((detail, index) => (
                <Col xs={6} key={index} className="mb-3">
                  <p className="mb-0">
                    <strong>{detail.label}:</strong> {detail.value}
                  </p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          {highlights.map((item, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card className="text-center h-100 p-4 border-0 shadow-sm highlight-card">
                <div className="icon-wrapper mb-3">
                  {item.icon}
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;