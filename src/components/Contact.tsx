import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    // Animate title from bottom - faster animation
    contactTimeline.fromTo(
      ".contact-section h3",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }
    );

    // Animate contact boxes with stagger from bottom - faster
    contactTimeline.fromTo(
      ".contact-box",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Animate map
    contactTimeline.fromTo(
      ".contact-map",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.1"
    );

    // Clean up
    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>
        <div className="contact-main-layout">
          <div className="contact-info-section">
            <div className="contact-flex">
              <div className="contact-box">
                <h4>Contact Details</h4>
                <div className="contact-detail-item">
                  <strong>Email:</strong>
                  <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                    {config.contact.email}
                  </a>
                </div>
                <div className="contact-detail-item">
                  <strong>Phone:</strong>
                  <a href={`tel:${config.social.phone}`} data-cursor="disable">
                    {config.social.phone}
                  </a>
                </div>
                <div className="contact-detail-item">
                  <strong>Location:</strong>
                  <span>{config.social.location}</span>
                </div>
              </div>
              <div className="contact-box">
                <h4>Social Media</h4>
                <a
                  href={config.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  <span>GitHub</span> <MdArrowOutward />
                </a>
                <a
                  href={config.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  <span>LinkedIn</span> <MdArrowOutward />
                </a>
                {config.contact.portfolio && (
                  <a
                    href={config.contact.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                  >
                    <span>Portfolio</span> <MdArrowOutward />
                  </a>
                )}
              </div>
            </div>
            <div className="contact-box contact-footer">
              <h2>
                Designed and Developed <br /> by <span>{config.developer.fullName}</span>
              </h2>
              <h5>
                <MdCopyright /> {new Date().getFullYear()}
              </h5>
            </div>
          </div>
          <div className="contact-map-container">
            <h4>Find Me</h4>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5!2d71.4753!3d30.1575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698765432109!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Multan, Punjab, Pakistan"
              ></iframe>
              <div className="map-overlay">
                <a
                  href="https://www.google.com/maps/place/Multan,+Punjab,+Pakistan/@30.1575,71.4753,12z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                  data-cursor="disable"
                >
                  View on Google Maps <MdArrowOutward />
                </a>
              </div>
              <div className="map-overlay">
                <a
                  href="https://www.google.com/maps/place/Multan,+Punjab,+Pakistan/@30.1575,71.4753,12z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                  data-cursor="disable"
                >
                  View on Google Maps <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
