import React from "react";
import Portfoliotrack from "./Portfoliotrack";
import project1 from "../../assets/project1.PNG";
import project2 from "../../assets/project2.PNG";
import project3 from "../../assets/project3.PNG";
import project4 from "../../assets/project4.PNG";
// passing data through arrays
const data = [
  {
    id: 1,
    image: project1,
    heading: "To-Do-List",
    gitlink: "https://github.com/AminnaKhalid/TodoList",
    livedemo: "https://todo-list-ten-dun.vercel.app/",
  },
  {
    id: 2,
    image: project2,
    heading: "Luminous-Text",
    gitlink: "https://github.com/AminnaKhalid/Luminous_text",
    livedemo: "https://luminous-text.vercel.app/",
  },
  {
    id: 3,
    image: project3,
    heading: "Landing-Page PortfolioDesign",
    gitlink: "https://github.com/AminnaKhalid/Landingpage",
    livedemo: "https://landingpage-aminnakhalid.vercel.app/",
  },
  {
    id: 4,
    image: project4,
    heading: "LogIn-Form",
    gitlink: "https://github.com/AminnaKhalid/login",
    livedemo: "https://login-aminnakhalid.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    // portfolio section
    <section>
      <h5>My Recent Work</h5>
      <h2 className="text-4xl">Portfolio</h2>
      {/* ===passing data through props here */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <article className="portfolio_project" key={item.id}>
            <Portfoliotrack
              image={item.image}
              heading={item.heading}
              gitlink={item.gitlink}
              livedemo={item.livedemo}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
