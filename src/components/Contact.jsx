import React, { useRef } from "react";
import illustration2 from "../assets/illustration2.png";
import emailjs from "@emailjs/browser";
import Illustration2 from "./svg/Illustration2";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = e.target.elements;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact__main">
        <div className="contact__left">
          <Illustration2/>
        </div>
        <div className="contact__right">
          <h2>Contact form</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="to_name"
              id="to_name"
              placeholder="your@email.com"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              placeholder="Message"
            ></textarea>
            <button type="submit" value="Send">Send</button>
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
  );
}

export default Contact;
