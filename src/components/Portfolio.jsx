import React from 'react'

function Portfolio() {
  return (
<section class="portfolio">
        <div class="portfolio__main">
          <div class="port__top">
            <h2 class="works">WORKS.</h2>
            <p class="pworks">your page could be here, What are you waiting for?</p>
          </div>
          <div class="port__bottom">
            <div class="port__card work1">
              <a href="https://sxnty.github.io/weather/">
                <img
                  src="https://cdn.discordapp.com/attachments/642749336903614465/1079193172246265886/image.png"
                  alt="weather app"
                />
              </a>
            </div>
            <div class="port__card work2">
              <a href="https://sxnty.github.io/to-do/">
                <img
                  src="https://cdn.discordapp.com/attachments/642749336903614465/1079193424017772635/image.png"
                  alt="to-do app"
                />
              </a>
            </div>
            <div class="port__card work3">
              <a href="https://github.com/Sxnty/NiceVet">
                <img
                  src="https://cdn.discordapp.com/attachments/642749336903614465/1079846495139926056/image.png"
                  alt="NiceVet page"
                />
              </a>
            </div>
            <div class="port__card work4">
              <a href="https://sxnty.github.io/Huddle/">
                <img
                  src="https://cdn.discordapp.com/attachments/642749336903614465/1079846551213592606/image.png"
                  alt="Huddle"
                />
              </a>
            </div>
            <div class="custom-shape-divider-bottom-1665582059">
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
        </div>
      </section>
  )
}

export default Portfolio