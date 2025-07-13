/**
 * Contact Component
 *
 * This component handles the contact section of the portfolio, including:
 * - Contact information display (email, phone, location)
 * - Social media links (GitHub, LinkedIn, Email)
 * - Contact form with EmailJS integration
 * - Form validation and submission handling
 * - Success/error status messages
 * - Confetti animation on successful submission
 * - GSAP ScrollTrigger animations for enhanced UX
 *
 * Features:
 * - Responsive design with grid layout
 * - Form validation and error handling
 * - EmailJS integration for email sending
 * - Loading states and user feedback
 * - Accessibility features (labels, titles, ARIA)
 * - Dark mode support
 * - Smooth animations and transitions
 */

import React, { useState, useEffect } from 'react';
import {
  Send,
  Handshake,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import emailjs from '@emailjs/browser';
import ConfettiRain from './ConfettiRain';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Component
 *
 * Renders the contact section with form, contact info, and social links
 * Handles form submission via EmailJS with proper error handling
 */
const Contact: React.FC = () => {
  // Extract contact data from portfolio configuration
  const { contact } = portfolioData;

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Submission state management
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Confetti animation state
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  /**
   * Initialize GSAP ScrollTrigger animations
   * Creates staggered animations for different sections
   */
  useEffect(() => {
    // Title animation - dropped effect with bounce
    gsap.fromTo(
      '.contact-title',
      { y: -200, opacity: 0, rotation: -10 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Contact elements - staggered bounce effect
    gsap.fromTo(
      '.contact-element',
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.contact-element',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Form animation - scale effect
    gsap.fromTo(
      '.contact-form',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  /**
   * Handle form input changes
   * Updates form state with new values
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission
   * Sends email via EmailJS and handles response
   */
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: contact.contactInfo.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Handle successful submission
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowConfetti(true);

        // Hide confetti after 5 seconds
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Open external link in new tab
   * Safely handles URL opening with fallback
   */
  const openExternalLink = (url: string): void => {
    window.open(url, '_blank');
  };

  /**
   * Get social link URL by name
   * Returns fallback URL if not found
   */
  const getSocialLink = (name: string): string => {
    return contact.socialLinks.find(social => social.name === name)?.url || '#';
  };

  return (
    <>
      {/* Confetti animation component */}
      <ConfettiRain isActive={showConfetti} />

      {/* Main contact section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-500 contact-title">
            {contact.title}
          </h2>

          {/* Two-column layout: Contact info and form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Column */}
            <div>
              {/* Main contact card */}
              <div className="contact-element bg-blue-500 rounded-lg p-8 text-white text-center mb-8">
                <Handshake className="w-16 h-16 mx-auto mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">{contact.subtitle}</h3>
                <p className="text-blue-100">{contact.description}</p>
              </div>

              {/* Contact details list */}
              <div className="space-y-6">
                {/* Email contact */}
                <div className="contact-element flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      {contact.contactInfo.email}
                    </p>
                  </div>
                </div>

                {/* Phone contact */}
                <div className="contact-element flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      {contact.contactInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Location contact */}
                <div className="contact-element flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-white">
                      {contact.contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="contact-element mt-8">
                <h4 className="font-semibold text-gray-800 mb-4 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {/* GitHub button */}
                  <button
                    onClick={() => openExternalLink(getSocialLink('GitHub'))}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    title="GitHub"
                    aria-label="Visit GitHub profile"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </button>

                  {/* LinkedIn button */}
                  <button
                    onClick={() => openExternalLink(getSocialLink('LinkedIn'))}
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    title="LinkedIn"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>

                  {/* Email button */}
                  <button
                    onClick={() =>
                      openExternalLink(`mailto:${contact.contactInfo.email}`)
                    }
                    className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                    title="Email"
                    aria-label="Send email"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              {/* Name and Email fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Subject field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Hey there!"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition-all dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg dark:bg-green-900 dark:border-green-700 dark:text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg dark:bg-red-900 dark:border-red-700 dark:text-red-300">
                  Failed to send message. Please try again or contact me
                  directly.
                </div>
              )}

              {/* Submit button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  } text-white`}
                  aria-label={
                    isSubmitting ? 'Sending message...' : 'Send message'
                  }
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit
                    </>
                  )}
                </button>
              </div>

              {/* Additional information card */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg dark:bg-gray-800">
                <h4 className="font-semibold text-gray-800 mb-3 dark:text-white">
                  Let's Work Together!
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a project in mind or just want to
                  chat about technology, feel free to reach out. I'll get back
                  to you as soon as possible!
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
