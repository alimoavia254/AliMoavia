import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll - optimized for faster scrolling
    lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 2.5,
      touchMultiplier: 2.5,
      infinite: false,
    });

    // Start immediately - no pause
    lenis.start();

    // Handle smooth scroll animation frame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // Handle navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 0.8,
              });
            }
          }
        }
      });
    });

    // Handle resize
    const handleResize = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", handleResize);

    // Keyboard scroll handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lenis) {
        if (e.key === "ArrowDown" || e.key === "PageDown") {
          e.preventDefault();
          lenis.scrollBy(window.innerHeight * 0.8, { duration: 0.5 });
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
          e.preventDefault();
          lenis.scrollBy(-window.innerHeight * 0.8, { duration: 0.5 });
        } else if (e.key === "Home") {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 0.5 });
        } else if (e.key === "End") {
          e.preventDefault();
          lenis.scrollTo(document.body.scrollHeight, { duration: 0.5 });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.destroy();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AMN
        </a>
        <a
          href="mailto:alimoavia80@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          alimoavia80@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#services" href="#services">
              <HoverLinks text="SERVICES" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
