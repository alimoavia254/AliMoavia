import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>A</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cybersecurity</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Digital Forensics | AI Tool Developer</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/475336308_1153648909672584_2056771662981172433_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGXz7UPoKEKYdD3BNKOOdgKiUlN6RcrYLKJSU3pFytgspCSmVvvy2IBB17X1q1BjaMKJdZb61zy5BStYR-icbv8&_nc_ohc=xFH0qNqCgDoQ7kNvwFe3YqY&_nc_oc=AdkDPXcgZ0wSiFSrNCB05zZdlgz7DB1nRrGLQYIlLNnapQgi8YZqqy7NRwg6866jcco&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=OWPasI2iT0Ayge-vGC9wRA&oh=00_AftBIDpN4mIyLieHDi6CbzWOyGrLrjxz8JhHBgHebRZQwQ&oe=69961CFD" alt="Ali Moavia" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
