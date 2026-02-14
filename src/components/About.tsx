import { useEffect, useRef } from "react";
import "./styles/About.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    timeline.fromTo(
      ".about-section .title",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }
    );

    timeline.fromTo(
      ".about-section .para",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.2"
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <div className="about-svg-bg">
          <svg viewBox="0 0 200 200" className="about-animated-svg">
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accentColor)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accentColor)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#aboutGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="about-circle-1"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="url(#aboutGradient)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              className="about-circle-2"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="url(#aboutGradient)"
              strokeWidth="1"
              strokeDasharray="2,2"
              className="about-circle-3"
            />
          </svg>
        </div>
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description}
        </p>
      </div>
    </div>
  );
};

export default About;
