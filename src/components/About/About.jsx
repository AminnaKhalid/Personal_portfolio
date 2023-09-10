import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TiFolderOpen } from "react-icons/ti";

import about from "../../assets/about.jpg";
const About = () => {
  return (
    // whole about section
    <section id="about">
      {/* ==== HEADING==== */}

      <h5>Get To know</h5>
      <h2 className="text-4xl">About Me</h2>

      {/* ==== GRID SECTION==== */}
      <div className="conatiner grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {/* ====SECTION 1 GRID FOR PIC */}
        <div className="p-10 place-content-center md:flex md:items-center md:justify-center">
          <div className="md:w-96 md:h-72 w-fit bg-blue-800 bg-opacity-40 rounded ">
            <img
              src={about}
              alt=""
              className="md:w-96 md:h-72 w-fit rounded overflow-hidden transition ease-in-out duration-200 transform rotate-12 hover:transform hover:rotate-0 "
            />
          </div>
        </div>

        {/* ==== SECTION 2 FOR ABOUT === */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <article className="gridcard">
              <FaAward className="text-3xl text-blue-400" />
              <h5 className="mt-1 font-bold text-lg">Experience</h5>
              <small className="text-md text-gray-300">1 year +</small>
            </article>
            <article className="gridcard">
              <FiUsers className="text-3xl text-blue-400" />
              <h5 className="mt-1 font-bold text-lg">Clients</h5>
              <small className="text-md text-gray-300">30 + </small>
            </article>
            <article className="gridcard">
              <TiFolderOpen className="text-3xl text-blue-400" />
              <h5 className="mt-1 font-bold text-lg">Projects</h5>
              <small className="text-md text-gray-300">30 + Completed</small>
            </article>
          </div>
          <p className="my-6 mx-3 md:mx-0">
            Seasoned front-end developer with over 1 year of experience in HTML,
            CSS, Sass, Tailwind CSS, JavaScript, React and Next.js. Proficient
            in creating engaging web interfaces.
          </p>
          <a href="#contact " className="btn btn-primary mx-3 md:mx-0 ">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
