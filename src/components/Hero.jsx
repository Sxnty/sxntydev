import React from "react";
import illustration from '../assets/illustration1.png'

function Hero() {
  return (
    <>
      <section class="hero__main">
        <div class="custom-shape-divider-bottom-1665533085">
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
        <div class="main__text">
          <div class="text__container">
            <p class="p1">Hello there, I'm</p>
            <h2>Sxnty</h2>
            <span>
              <p class="p2">
                I'm an <span>frontend developer</span> and
                <span>UX/UI designer.</span>
              </p>
            </span>
            <p id="quote" class="quote">
              ´´If you can imagine, you can create it´´
            </p>
            <button class="button">Contact me</button>
          </div>
        </div>
        <div class="main__img">
          <img src={illustration} alt="programer illustration" />
        </div>
      </section>
    </>
  );
}

export default Hero;