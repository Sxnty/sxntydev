import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47c782i",
        "service_47c782i",
        form.current,
        "SEcWoYCeuY6zU54wB"
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

  <form ref={form} onSubmit={sendEmail}>
    <input
      type="text"
      name="user_name"
      id="name"
      placeholder="Your name"
      required
    />
    <input
      type="email"
      name="user_email"
      id="email"
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
    <button type="submit" value="Send">
      Send
    </button>
  </form>;
};
export default ContactUs;