"use client";

import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Antonio Rogers",
    work: "MINISTRY OF WATER, SANITATION AND IRRIGATION.",
    review:
      "I've worked with Warren for over a year, and they have consistently impressed me with their dedication, professionalism, and great attitude.",
  },
  {
    name: "Marvin Gates",
    work: "MINISTRY OF WATER, SANITATION AND IRRIGATION.",
    review:
      "Warren has gone above and beyond to ensure that the team is successful, taking on additional responsibilities and consistently delivering high-quality work.",
  },
  {
    name: "Kevin James",
    work: "ROADS AND TRANSPORT SECTOR.",
    review:
      "Warren is a natural leader and has an excellent communication style. They are always able to motivate and inspire their colleagues.",
  },
  {
    name: "Antonio Rogers",
    work: "MINISTRY OF WATER, SANITATION AND IRRIGATION.",
    review:
      "I've worked with Warren for over a year, and they have consistently impressed me with their dedication, professionalism, and great attitude.",
  },
  {
    name: "Marvin Gates",
    work: "MINISTRY OF WATER, SANITATION AND IRRIGATION.",
    review:
      "Warren has gone above and beyond to ensure that the team is successful, taking on additional responsibilities and consistently delivering high-quality work.",
  },
];

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="w-full h-fit py-20 relative bg-white"
    >
      <div className="max-w-[1400px] w-[91%] mx-auto">
        <div className="flex justify-center">
          <span className="bg-yellow-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5">
            Testimonials
          </span>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          speed={500}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full bg-white"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
