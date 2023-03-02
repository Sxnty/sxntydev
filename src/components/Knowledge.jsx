import React from "react";
import { FaHtml5,FaCss3Alt,FaSass,FaJsSquare,FaReact,FaNodeJs,FaGitAlt } from "react-icons/fa";



function Knowledge() {
  return (
    <section className="knowledge" id="knowasdasd">
      <div className="know__main">
        <div className="custom-shape-divider-top-1665749965">
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
        <div className="know__top">
          <h2 className="skills">My Skills.</h2>
          <p className="plearning">every day learning new things</p>
        </div>
        <div className="know__bottom">
          <FaHtml5/>
          <FaCss3Alt/>
          <FaSass/>
          <FaJsSquare/>
          <FaReact/>
          <FaNodeJs/>
          <FaGitAlt/>

        </div>
      </div>
    </section>
  );
}

export default Knowledge;
