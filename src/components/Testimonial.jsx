import React from "react";
import { ScrollEffect } from 'react-easy-scroll-effect';
import 'react-easy-scroll-effect/dist/index.css';
export const testimonial = [
  {
    id: 1,
    img: "/ic13.png",
    text: "“You might wonder why a designer would choose to use lorem ipsum text instead of a few paragraphs in English or their native language. Why not just copy and paste a page from an old book or lyrics from a famous song”",
    imgProfile: "/tst1.png",
    clientName: "Marielle Wigington",
    clientCity: "Los Angeles. CA",
  },
  {
    id: 2,
    img: "/ic13.png",
    text: "“You might wonder why a designer would choose to use lorem ipsum text instead of a few paragraphs in English or their native language. Why not just copy and paste a page from an old book or lyrics from a famous song”",
    imgProfile: "/tst1.png",
    clientName: "Marielle Wigington",
    clientCity: "Los Angeles. CA",
  },
  {
    id: 3,
    img: "/ic13.png",
    text: "“You might wonder why a designer would choose to use lorem ipsum text instead of a few paragraphs in English or their native language. Why not just copy and paste a page from an old book or lyrics from a famous song”",
    imgProfile: "/tst1.png",
    clientName: "Marielle Wigington",
    clientCity: "Los Angeles. CA",
  },
];
function Testimonial() {
  return (
    <div className="p-5 bg-[#07252a] pb-20 z-0">
      <ScrollEffect offset={100} duration={1} animateOut={true}>
      <div className="max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
            See Whats Our Clients <br />
            Say’s About Us
          </h2>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-10 mt-20">
            {testimonial.map((testimonial) => (
              <div key={testimonial.text}>
                <div className="bg-[#022B36] p-5 flex flex-col justify-center items-center">
                  <div className="border-b border-slate-700 flex flex-col justify-center items-center">
                    <img src={testimonial.img} alt="testimonial" />
                    <p className="pb-5 text-slate-400 text-center italic">{testimonial.text}</p>
                  </div>
                  <div className="flex gap-10 mt-6">
                    <div>
                      <img src={testimonial.imgProfile} alt="testimonial" />
                    </div>
                    <div>
                      <h4 className="text-white">{testimonial.clientName}</h4>
                      <p className="text-slate-400">{testimonial.clientCity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ScrollEffect>
    </div>
  );
}

export default Testimonial;
