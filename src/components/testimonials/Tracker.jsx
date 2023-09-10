import React from "react";

const Tracker = ({ image, title, para }) => {
  return (
    <article className="md:w-[40%] w-full bg-blue-900 p-8 border-2 select-none rounded-3xl">
      <div className="flex flex-col items-center justify-center ">
        <img src={image} alt="" className="testimonial_image " />
        <h5 className="font-bold text-lg">{title}</h5>
        <small className="text-center text-gray-300 mx-auto">{para}</small>
      </div>
    </article>
  );
};

export default Tracker;
