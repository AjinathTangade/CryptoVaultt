import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
export const feature = [
  {
    id: 1,
    img: "/ic1.png",
    title: "Easy To Transfer",
    para: "Keeps people from focusing on want the people reviewing it to get example, look for typos.",
  },
  {
    id: 2,
    img: "/ic2.png",
    title: "Save Transaction",
    para: "Keeps people from focusing on want the people reviewing it to get example, look for typos.",
  },
  {
    id: 3,
    img: "/ic3.png",
    title: "Trusted Security",
    para: "Keeps people from focusing on want the people reviewing it to get example, look for typos.",
  },
  {
    id: 4,
    img: "/ic4.png",
    title: "Trading Platform",
    para: "Keeps people from focusing on want the people reviewing it to get example, look for typos.",
  },
];

function Feature() {
  return (
    <div className="p-5 bg-[#07252a] pt-56 pb-14 lg:pt-44 lg:pb-20 z-0">
      <div className="max-w-screen-xl mx-auto lg:flex gap-10 justify-between">
        <div>
          <ScrollAnimation animateIn="fadeIn">
            <div className="grid grid-cols-2 gap-4">
              {feature.map((feature) => (
                <div
                  className="bg-[#022B36] p-6 rounded-lg group"
                  key={feature.id}
                >
                  <div className="h-14 w-14 bg-slate-700 rounded-full flex justify-center items-center">
                    <img
                      src={feature.img}
                      alt="grid-icon"
                      className=" group-hover:animate-bounce"
                    />
                  </div>
                  <h3 className="font-semibold text-2xl text-white py-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.para}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
        <div className="pt-14 lg:pt-0">
          <div>
            <h3 className="text-lg text-teal-400 font-bold pb-3">
              CryptoWallet Feature
            </h3>
            <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
              The most Trusted and Secure Cryptocurrency Platform
            </h2>
            <p className="text-slate-400 pt-6">
              The main reason for using lorem ipsum text is that it keeps people
              from focusing on the actual text.
            </p>
            <p className="text-slate-400 pt-6">
              When someone creates a template and asks for feedback on it, they
              don't want the people reviewing it to get distracted by what the
              text says. for example, look for typos.
            </p>
          </div>
          <div className="my-10">
            <Link
              to=""
              className="px-5 py-3 md:px-10 md:py-5 rounded-full text-white font-semibold bg-amber-500 hover:bg-teal-400"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
