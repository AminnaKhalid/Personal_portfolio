import React from "react";

const CTA = () => {
  return (
    <div
      id="CTA"
      className="grid grid-cols-1  md:grid-cols-2 mt-9 gap-2 place-content-center md:flex md:justify-center md:items-center"
    >
      <a href="./assets/amnacv.pdf" className="btn order-2 md:order-1 ">
        Download Cv
      </a>

      <a
        href="#contact"
        className="btn btn-primary order-1 md:order-2 ml-4 md:ml-0"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
