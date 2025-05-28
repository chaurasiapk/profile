import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { userData } from '../../data/portfolioData';

const Skills: React.FC = () => {
  // Divide skills into technical and soft skills
  const technicalSkills = userData.skills.filter(skill => skill.category === 'technical');
  const softSkills = userData.skills.filter(skill => skill.category === 'soft');
  
  // Group technical skills by type
  const groupedTechnicalSkills = technicalSkills.reduce((acc, skill) => {
    const type = skill.type || 'Other';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(skill);
    return acc;
  }, {} as Record<string, typeof technicalSkills>);

  return (
    <section id="skills" className="skills py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">My Skills</h2>
            <div className="section-divider"></div>
            <p className="section-description mx-auto">
              A showcase of my technical abilities and professional strengths
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="mb-4">Technical Skills</h3>
            
            {Object.entries(groupedTechnicalSkills).map(([type, skills]) => (
              <div key={type} className="mb-5">
                <h4 className="mb-3">{type}</h4>
                <Row>
                  {skills.map((skill, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.level} 
                        className="skill-progress" 
                        variant={getVariantForLevel(skill.level)}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Soft Skills</h3>
            <Row>
              {softSkills.map((skill, index) => (
                <Col md={6} lg={4} key={index} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    className="skill-progress" 
                    variant={getVariantForLevel(skill.level)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Helper function to get Bootstrap variant based on skill level
function getVariantForLevel(level: number): string {
  if (level >= 90) return 'success';
  if (level >= 75) return 'info';
  if (level >= 60) return 'primary';
  return 'secondary';
}

export default Skills;