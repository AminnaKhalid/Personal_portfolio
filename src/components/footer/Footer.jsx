import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-center px-10 py-0 text-base mt-20 pt-6">
      <div className="text-4xl font-bold mb-4 block">AMNA-WORK</div>
      {/* ----- links inside the footer ---- */}

      <ul className="flex flex-row justify-center flex-wrap gap-6 my-4">
        <li>
          <a href=" #" className="text-blue-900">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-blue-900">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-blue-900">
            Services
          </a>
        </li>
        <li>
          <a href="#experience" className="text-blue-900">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-blue-900">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="text-blue-900">
            Contact
          </a>
        </li>
      </ul>

      {/* === social icons inside the footer ==== */}
      <div className="flex justify-center gap-4 ">
        <a
          href="https://www.linkedin.com/in/àmnâ-kkhalid-630818245"
          className="text-blue-400 bg-blue-950 p-3 rounded-xl flex border hover:bg-transparent hover:text-blue-900 hover:border-blue-400"
        >
          <AiOutlineLinkedin className="text-2xl" />
        </a>

        <a
          href="https://github.com/AminnaKhalid"
          className="text-blue-400 bg-blue-950 p-3 rounded-xl flex border hover:bg-transparent hover:text-blue-900 hover:border-blue-400"
        >
          <AiFillGithub className="text-2xl" />
        </a>
        <a
          href="twitter"
          className="text-blue-400 bg-blue-950 p-3 rounded-xl flex border hover:bg-transparent hover:text-blue-900 hover:border-blue-400 "
        >
          <AiOutlineTwitter className="text-2xl" />
        </a>
      </div>

      {/* ---- copyright inside the footer ---- */}
      <div className="pb-28 text-blue-900 m-2">
        <small>&copy; AmnaPortfolio. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
