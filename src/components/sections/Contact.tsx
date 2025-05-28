import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { userData } from "../../data/portfolioData";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_gsjv8mh";
const TEMPLATE_ID = "template_umhf1kj";
const USER_ID = "UK6o3FOlq_Nr2-m4q";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setSending(true);
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          USER_ID
        )
        .then(() => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setValidated(false); // Hide validation errors after success
        })
        .catch(() => {
          setSuccess("Failed to send message. Please try again.");
          setValidated(false);
        })
        .finally(() => setSending(false));
    }

    setValidated(true);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: userData.email,
      link: `mailto:${userData.email}`,
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: userData.phone,
      link: `tel:${userData.phone}`,
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: userData.location,
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">Contact Me</h2>
            <div className="section-divider"></div>
            <p className="section-description mx-auto">
              Let's get in touch! Feel free to reach out with any questions or
              opportunities.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <h3 className="mb-4">Get In Touch</h3>
            <p className="mb-4">
              I'm interested in full time or freelance opportunities and I'm
              always ready to discuss new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <Card key={index} className="mb-3 border-0 shadow-sm">
                  <Card.Body className="d-flex align-items-center">
                    <div className="contact-icon me-3 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">{info.title}</h5>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-decoration-none text-secondary"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="mb-0 text-secondary">{info.content}</p>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4">Send Message</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a subject.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your message"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a message.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="d-flex align-items-center"
                    disabled={sending}
                  >
                    <Send size={18} className="me-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                  {success && (
                    <div
                      className={`mt-3 ${
                        success.includes("successfully")
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {success}
                    </div>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
