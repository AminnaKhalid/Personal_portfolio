import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef(); // Define the form variable

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tco8agb",
        "template_f28hcxw",
        form.current, // Use the form ref here
        "RDYxWv3Q_JNbc2MLZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="text-2xl">Contact Me</h2>
      <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {/* Contact Options */}
        <div className="md:w-full w-full lg:w-1/2">
          <article className="contact text-center">
            <div className="flex items-center justify-center text-3xl">
              <MdOutlineMailOutline className="" />
            </div>
            <h4>Email</h4>
            <h5 className="text-sm">aminnakhalid@gmail.com</h5>
            <a href="mailto:aminnakhliad@gmail.com" target="_blank ">
              Send a Message
            </a>
          </article>
          <article className="contact">
            <div className="flex items-center justify-center text-3xl">
              <AiOutlineLinkedin className="" />
            </div>
            <h4>Message On Linkedin</h4>
            <h5 className="truncate  text-sm">www.linkedin.com/àmnâ-kkhalid</h5>
            <a
              href="https://www.linkedin.com/in/àmnâ-kkhalid-630818245"
              target="_blank "
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="lis"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="lis bg-transparent"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            className="lis"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* End of Form */}
      </div>
    </section>
  );
};

export default Contacts;
