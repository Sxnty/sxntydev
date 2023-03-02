import React from 'react'
import illustration2 from '../assets/illustration2.png'

function Contact() {
  return (
<section className="contact">
        <div className="contact__main">
          <div className="contact__left">
            <img src={illustration2} alt="" />
          </div>
          <div className="contact__right">
            <h2>Contact form</h2>
            <form action="">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                required
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
                placeholder="Message"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="custom-shape-divider-top-1665581130">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1665582059">
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
      </section>
  )
}

export default Contact