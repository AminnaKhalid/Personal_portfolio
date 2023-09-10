import React from "react";

const Portfoliotrack = ({ image, heading, gitlink, livedemo }) => {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="rounded-3xl object-center overflow-hidden object-contain w-full h-56 "
      />
      <h3 className="mx-3 my-4 text-xl"> {heading}</h3>
      <div className="flex items-center justify-center gap-2">
        <a
          href={gitlink}
          className="btn  md:ml-4 "
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          href={livedemo}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          LiveDemo
        </a>
      </div>
    </div>
  );
};

export default Portfoliotrack;
