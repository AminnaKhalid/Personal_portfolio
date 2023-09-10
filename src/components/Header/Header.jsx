import React from "react";
import CTA from "./CTA";
// import me from "../../assets/me.jpg";
import Headersocials from "./Headersocials";

const Header = () => {
  return (
    // container
    <div className="container  pt-24 overflow-hidden">
      {/* Whole header div */}
      <div className="items-center justify-center flex flex-col relative h-[100%]">
        <h5>I am</h5>
        <h1 className="md:text-4xl text-3xl">Amna Khalid</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
        {/* ===== BUTTONS===== */}
        <CTA />
        {/* ===== SOCIAL ICONS ON LEFT */}
        <Headersocials />
        {/* ==== Message on right ====== */}
        <a
          href="#contact"
          className="md:absolute md:-right-10 md:rotate-90 md:font-semibold"
        >
          Scroll Down
        </a>
        {/* ==== AREA FOR PIC UNUSED FOR NOW ====== */}
        {/* <div className="me w-96 h-96 left-[50%] mt-7 bg-blue-500 rounded-tl-full rounded-tr-full overflow-hidden grid place-content-center my-2">
          <img src={me} alt="" className=" w-48 h-72" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
