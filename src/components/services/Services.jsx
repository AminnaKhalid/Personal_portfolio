import React from "react";
import { BsCheckLg } from "react-icons/bs";
import List from "./List";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 className="text-4xl">Services</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <article className="card2">
          <div id="head" className="head">
            <h3 className="text-blue-300 text-center text-xl">UI/UX Design</h3>
          </div>
          <ul>
            <List
              icon={<BsCheckLg />}
              para={
                " I elevate user experiences with intuitive interfaces and stunning designs."
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                " Optimize usability and engagement with my expert UI/UX solutions"
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                " Seamlessly blending aesthetics and functionality for unparalleled usability."
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                "    I transform ideas into engaging, pixel-perfect user experiences."
              }
            />
          </ul>
        </article>
        {/*====== END OF UI/UX DESIGN PAGE======  */}
        <article className="card2">
          <div id="head" className="head">
            <h3 className="text-blue-300 text-center text-xl">
              Web Development
            </h3>
          </div>
          <ul>
            <List
              icon={<BsCheckLg />}
              para={"Proficiency in HTML5, CSS3, and JavaScript."}
            />
            <List
              icon={<BsCheckLg />}
              para={"Experience integrating third-party APIs and web services."}
            />
            <List
              icon={<BsCheckLg />}
              para={
                "Understanding of SEO principles and techniques to improve website visibility "
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                "Effective communication with clients, team members, and stakeholders."
              }
            />
          </ul>
        </article>
        {/* end of webdevelopment container */}
        <article className="card2">
          <div
            id="head"
            className="n
          head"
          >
            <h3 className="text-blue-300 text-center text-xl">
              Content Creation
            </h3>
          </div>
          <ul>
            <List
              icon={<BsCheckLg />}
              para={
                "Ability to create clear, concise, and engaging content across various formats."
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                "Understanding of SEO and keyword research for content optimization."
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                "Proficiency in creating and maintaining blogs, including ideation, writing, and publishing."
              }
            />
            <List
              icon={<BsCheckLg />}
              para={
                "Basic graphic design skills to create visuals and graphics for content."
              }
            />
          </ul>
        </article>
        {/* end of content creation container */}
      </div>
    </section>
  );
};

export default Services;
