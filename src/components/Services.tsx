import { useEffect, useRef } from "react";
import "./styles/Services.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const services = serviceRefs.current.filter(Boolean);
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    timeline.fromTo(
      ".services-section h2",
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

    timeline.fromTo(
      services,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Hover animations
    services.forEach((service) => {
      if (!service) return;
      
      service.addEventListener("mouseenter", () => {
        gsap.to(service, {
          scale: 1.05,
          y: -10,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      service.addEventListener("mouseleave", () => {
        gsap.to(service, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    return () => {
      timeline.kill();
      services.forEach((service) => {
        if (service) {
          service.removeEventListener("mouseenter", () => {});
          service.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <div className="services-section section-container" id="services" ref={containerRef}>
      <div className="services-container">
        <h2>
          Active <span>Services</span>
        </h2>
        <div className="services-grid">
          {config.services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <svg className="service-icon-bg" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--accentColor)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--accentColor)"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-details">{service.details}</p>
              <div className="service-border">
                <svg width="100%" height="100%">
                  <defs>
                    <linearGradient id={`gradient-${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accentColor)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="var(--accentColor)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke={`url(#gradient-${service.id})`}
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    rx="8"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
