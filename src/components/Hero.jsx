import React, { useState } from "react";
import Illustration1 from "./svg/Illustration1";

import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init();
  return (
    <section className="hero__main">
      <div className="custom-shape-divider-bottom-1665533085">
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
      <div className="text__container">
        <p className="p1" data-aos="fade-right" data-aos-delay="300">
          Hello there, I'm
        </p>
        <h2 data-aos="fade-right" data-aos-delay="500">
          Sxnty
        </h2>
        <span>
          <p className="p2" data-aos="fade-up" data-aos-delay="550">
            I'm an <span>frontend developer</span> and
            <span> UX/UI designer.</span>
          </p>
        </span>
        <p id="quote" className="quote" data-aos="fade-up" data-aos-delay="650">
          {
            <Typewriter
              options={{
                strings: [
                  "´´If you can imagine, you can create it´´",
                  "´´The only limit is in our own minds´´",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString().pauseFor(2500).deleteAll().start();
              }}
            />
          }
        </p>
        <div data-aos="zoom-in-up" data-aos-delay="700">
          <button className="button">Contact me</button>
        </div>
      </div>
      <div className="main__illustration">
        <Illustration1 />
      </div>
    </section>
  );
}

export default Hero;
