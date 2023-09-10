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
              para={"my name is amna khalid a full stack developer"}
            />
            <List
              icon={<BsCheckLg />}
              para={"my name is amna khalid a full stack developer"}
            />
            <List
              icon={<BsCheckLg />}
              para={"my name is amna khalid a full stack developer"}
            />
            <List
              icon={<BsCheckLg />}
              para={"my name is amna khalid a full stack developer"}
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
              para={"my name is amna khalid a full stack developer"}
            />
            <List
              icon={<BsCheckLg />}
              para={"my name is amna khalid a full stack developer"}
            />
            <List
              icon={<BsCheckLg />}
              para={"my name is amna khalid a full stack developer"}
            />
            <List
              icon={<BsCheckLg />}
              para={"my name is amna khalid a full stack developer"}
            />
          </ul>
        </article>
        {/* end of content creation container */}
      </div>
    </section>
  );
};

export default Services;
