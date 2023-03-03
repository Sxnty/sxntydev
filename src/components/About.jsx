import React, {useRef} from "react";
import me from "../assets/sxntyoil.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function About() {
  return (
    <section className="about">
      <div className="about__main">
        <div className="about__left">
          <img src={me} />
          <div className="custom-shape-divider-bottom-1665750197">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="about__right">
          <h2 className="h2about" data-aos="fade-left" data-aos-duration="600">About me.</h2>
          <p className="pabout" data-aos="fade-right">
            Hi there! I'm a passionate and enthusiastic Junior Front-end
            Developer. I love working on interesting and challenging projects,
            utilizing current web development trends and technologies.
          </p>
          <p className="pabout2" data-aos="fade-right" data-aos-delay="300">
            I'm a dedicated, curious, and creative worker who's always eager to
            learn new things and collaborate with others to achieve common
            goals. If you're looking for someone to join your development team,
            feel free to contact me!
          </p>
          <div className="" data-aos="fade-right" data-aos-delay="350">
            <a href="#" className="downloadcv">
              Download CV here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
