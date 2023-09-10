import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
const Nav = () => {
  return (
    <>
      <nav className=" w-max" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <div className="card">
          <a href="# " className="icon">
            <AiOutlineHome className="h-7 w-6" />
          </a>
          <a href="#about" className="icon">
            <AiOutlineUser className="h-7 w-6" />
          </a>

          <a href="#services " className="icon">
            <BiBook className="h-7 w-6" />
          </a>
          <a href="#experience " className="icon">
            <RiServiceLine className="h-7 w-6" />
          </a>
          <a href="#contact " className="icon">
            <BiMessageSquareDetail className="h-7 w-6" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
