import React from "react";

const Experiencetrack = ({ title, experience, icon }) => {
  return (
    <article className="flex gap-4 ">
      <div className="text-2xl text-green-400"> {icon}</div>
      <div>
        <h4 className="mt-6px">{title}</h4>
        <small className="text-md text-gray-200">{experience}</small>
      </div>
    </article>
  );
};

export default Experiencetrack;
