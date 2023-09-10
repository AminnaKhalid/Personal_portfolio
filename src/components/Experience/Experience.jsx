import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Experiencetrack from "./Experiencetrack";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="text-4xl">My Experience</h2>

      {/* experience front end  */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="track">
          <h3 className="flex items-center justify-center md:text-xl text-sm font-semibold text-blue-300 mb-2">
            Front-End Development
          </h3>
          {/* ====Calling Porps for front-end======= */}
          <div className="grid md:grid-cols-2 md:gap-5 gap-3 grid-cols-1">
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="HTML"
              experience="Experienced"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="CSS"
              experience="Intermediate"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="Tailwindcss"
              experience="Experienced"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="JavaScript"
              experience="Intermediate"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="React Js"
              experience="Intermediate"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="Next.js"
              experience="Beginner"
            />
          </div>
        </div>
        {/* backend */}
        <div className="track">
          <h3 className="flex items-center justify-center md:text-xl text-sm font-semibold text-blue-300 mb-2">
            Back-End Development
          </h3>
          <div className="grid md:grid-cols-2 md:gap-5 gap-4">
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="Node.js"
              experience="Beginner"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="PHP"
              experience="Intermediate"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="MY SQL"
              experience="intermediate"
            />
            <Experiencetrack
              icon={<AiFillCheckCircle />}
              title="Xammp"
              experience="Beginner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
