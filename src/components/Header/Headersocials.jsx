import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import { TbBrandFiverr } from "@react-icons/Tb/TbBrandFiverr";
const Headersocials = () => {
  return (
    <>
      <div className="hidden md:flex md:absolute md:flex-col md:gap-3 md:left-0  ">
        <div>
          <a href="https://linkedin.com" className="">
            <BsLinkedin className="w-8 h-10" />
          </a>
        </div>
        <a href="https://github.com">
          <BsGithub className="w-8 h-10" />
        </a>
        <span
          className="w-1 h-14 ml-3"
          style={{ background: "#4db5ff" }}
        ></span>

        {/* <a href="https://fiverr.com">
          {" "}
          <TbBrandFiverr />
        </a> */}
      </div>
    </>
  );
};

export default Headersocials;
