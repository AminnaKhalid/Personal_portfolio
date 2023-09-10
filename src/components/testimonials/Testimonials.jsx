import React from "react";
import me from "../../assets/me.jpg";
import Tracker from "./Tracker";
// import Swiper from "swiper";
// import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
// const swiper = new Swiper(".swiper", {
//   modules: [Pagination],
// });
const testimonialData = [
  {
    id: 1,
    image: me,
    title: "Client 1",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: me,
    title: "Client 2",
    para: "Nullam nec nunc quis nulla fringilla feugiat non vel ex.",
  },
  {
    id: 3,
    image: me,
    title: "Client 3",
    para: "Sed et ante nec mi aliquam faucibus vel non erat.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2 className="text-2xl">Testimonials</h2>
      <swiper className="container flex flex-col items-center justify-center">
        {testimonialData.map((testimonial) => (
          <div>
            <Tracker
              key={testimonial.id} // Ensure each item has a unique key
              image={testimonial.image}
              title={testimonial.title}
              para={testimonial.para}
            />
          </div>
        ))}
      </swiper>
    </section>
  );
};

export default Testimonials;
