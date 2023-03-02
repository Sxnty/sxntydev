import React from "react";

import me from '../assets/sxntyoil.png';

function About() {
  return (
    <section class="about">
      <div class="about__main">
        <div class="about__left">
          <img src={me} />
          <div class="custom-shape-divider-bottom-1665750197">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div class="about__right">
          <h2 class="h2about">About me.</h2>
          <p class="pabout">
            Hi there! I'm a passionate and enthusiastic Junior Front-end
            Developer. I love working on interesting and challenging projects,
            utilizing current web development trends and technologies.
            <p class="pabout2">
              I'm a dedicated, curious, and creative worker who's always eager
              to learn new things and collaborate with others to achieve common
              goals. If you're looking for someone to join your development
              team, feel free to contact me!
            </p>
          </p>
          <a href="#" class="downloadcv">
            Download CV here
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;