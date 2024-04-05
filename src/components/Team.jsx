import React from "react";
import { ScrollEffect } from 'react-easy-scroll-effect';
import 'react-easy-scroll-effect/dist/index.css';

export const team = [
  {
    id: 1,
    img:"/tm1.png",
    title: "Jane Cooper",
    subTitle: "Investor in firm",
    social: "Twitter | Dribbble | Behance",
  },
  {
    id: 2,
    img:"/tm1.png",
    title: "Jenny Wilson",
    subTitle: "Investor in firm",
    social: "Twitter | Dribbble | Behance",
  },
  {
    id: 3,
    img:"/tm1.png",
    title: "Eleanor Pena",
    subTitle: "Investor in firm",
    social: "Twitter | Dribbble | Behance",
  },
  {
    id: 4,
    img:"/tm1.png",
    title: "Leslie Alexander",
    subTitle: "Investor in firm",
    social: "Twitter | Dribbble | Behance",
  },
  {
    id: 5,
    img:"/tm1.png",
    title: "Robert Fox",
    subTitle: "Investor in firm",
    social: "Twitter | Dribbble | Behance",
  },
  {
    id: 6,
    img:"/tm1.png",
    title: "Floyd Miles",
    subTitle: "Investor in firm",
    social: "Twitter | Dribbble | Behance",
  },
];

function Team() {
  return (
    <div className="p-5 bg-[#07252a] pb-20 z-0" id="team">
      <ScrollEffect offset={200} duration={2} animateOut={true}>
      <div className="max-w-screen-xl mx-auto">
        <div>
          <div>
            <h2 className=" text-center text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
              Crypto Live Market Price
            </h2>
            <p className="text-center text-slate-400 pt-3">
              {" "}
              When someone creates a template and asks for feedback on it, they
              don't want <br />
              the people reviewing it to get distracted.
            </p>
          </div>
          <div className="flex flex-col lg:grid grid-cols-3 gap-8 pt-20">
            {team.map((team) => (
                <div className="bg-[#022B36] flex justify-center items-center px-4 py-8 gap-6 hover:bg-teal-400 rounded-lg" key={team}>
                  <div>
                    <img src={team.img} alt="team-img" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {team.title}
                    </h3>
                    <p className="text-white">{team.subTitle}</p>
                    <div className="pt-3">
                      <span className="text-white text-md">
                        {team.social}
                      </span>
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

export default Team;
