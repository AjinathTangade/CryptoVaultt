import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffect } from 'react-easy-scroll-effect';
import 'react-easy-scroll-effect/dist/index.css';
import {
  faCaretDown,
  faCaretUp,
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
export const cryptolive = [
  {
    id: 1,
    img: "/ic5.png",
    title: "Ethereum",
    first: "Change 1h",
    second: "Change 24h",
    third: "Last7d",
    four: ["USD", "CAD", "EUR"],
    firstValue: "3,074.0",
    secondValue: "0.56",
    thirdValue: "4.59",
    fourValue: "6.59",
  },
  {
    id: 2,
    img: "/ic6.png",
    title: "Bitcoin",
    first: "Change 1h",
    second: "Change 24h",
    third: "Last7d",
    four: ["USD", "CAD", "EUR"],
    firstValue: "3,074.0",
    secondValue: "0.56",
    thirdValue: "4.59",
    fourValue: "6.59",
  },
  {
    id: 3,
    img: "/ic7.png",
    title: "Binance Coin",
    first: "Change 1h",
    second: "Change 24h",
    third: "Last7d",
    four: ["USD", "CAD", "EUR"],
    firstValue: "3,074.0",
    secondValue: "0.56",
    thirdValue: "4.59",
    fourValue: "6.59",
  },
  {
    id: 4,
    img: "/ic8.png",
    title: "USD Coin",
    first: "Change 1h",
    second: "Change 24h",
    third: "Last7d",
    four: ["USD", "CAD", "EUR"],
    firstValue: "3,074.0",
    secondValue: "0.56",
    thirdValue: "4.59",
    fourValue: "6.59",
  },
  {
    id: 5,
    img: "/ic9.png",
    title: "Cardano",
    first: "Change 1h",
    second: "Change 24h",
    third: "Last7d",
    four: ["USD", "CAD", "EUR"],
    firstValue: "3,074.0",
    secondValue: "0.56",
    thirdValue: "4.59",
    fourValue: "6.59",
  },
  {
    id: 6,
    img: "/ic10.png",
    title: "Tether",
    first: "Change 1h",
    second: "Change 24h",
    third: "Last7d",
    four: ["USD", "CAD", "EUR"],
    firstValue: "3,074.0",
    secondValue: "0.56",
    thirdValue: "4.59",
    fourValue: "6.59",
  },
];

function LivePrice() {
  return (
    <div className="bg-[#07252a] bg-no-repeat bg-local w-full pb-14 lg:pt-8 lg:pb-20">
      <ScrollEffect offset={100} duration={1} animateOut={true}>
      <div className="p-5 max-w-screen-xl mx-auto">
        <h3 className="text-lg text-center text-teal-400 font-bold pb-3 flex justify-center items-center gap-5">
          <FontAwesomeIcon icon={faArrowRightLong} className="text-2xl" /> Live
          Price <FontAwesomeIcon icon={faArrowLeftLong} className="text-2xl" />
        </h3>
        <h2 className=" text-center text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
          Crypto Live Market Price
        </h2>
        <p className="text-center text-slate-400 pt-3">
          {" "}
          When someone creates a template and asks for feedback on it, they
          don't want <br />
          the people reviewing it to get distracted.
        </p>
        <div className="pt-10 lg:pt-20 pb-6">
        {/* <ScrollAnimation animateIn="fadeIn" delay={50}> */}
        
          <div className="flex overflow-x-auto xl:grid grid-cols-3 gap-4 pb-10">
            {cryptolive.map((cryptolive) => (
              <div
                className="bg-[#022B36] px-6 py-10 rounded-lg group h-full w-full"
                key={cryptolive.id}
              >
                <div className="flex gap-4">
                  <div className="h-14 w-14 bg-slate-700 rounded-full flex justify-center items-center group-hover:animate-bounce">
                    <img src={cryptolive.img} alt="grid-icon" />
                  </div>
                  <h3 className="font-semibold text-xl text-white py-3">
                    {cryptolive.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <table className="flex justify-center items-center">
                    <tbody>
                      <tr className="text-white border-dashed border-neutral-600 border-b-2 flex justify-center items-center">
                        <th className="border-dashed border-neutral-600 border-r-2 px-1 pb-2">
                          <select
                            id="countries"
                            className=" border-none text-white rounded-lg bg-transparent "
                          >
                            {cryptolive.four.map((four) => (
                              <option className="text-gray-900" key={four}>
                                {four}
                              </option>
                            ))}
                          </select>
                        </th>
                        <th className="border-dashed border-r-2 border-neutral-600 px-2 pb-2 ">
                          {cryptolive.second}
                        </th>
                        <th className="border-dashed border-r-2 border-neutral-600 px-3 pb-2 ">
                          {cryptolive.third}
                        </th>
                        <th className="px-2 pb-2 ">{cryptolive.first}</th>
                      </tr>
                      <tr className="text-white flex justify-center items-center">
                        <td className="border-dashed border-r-2 px-4 pt-2 border-neutral-600 text-center ">
                          {cryptolive.firstValue}
                        </td>
                        <td className="border-dashed border-r-2 px-4 pt-2 border-neutral-600 text-center  flex justify-center items-center gap-3">
                          <FontAwesomeIcon
                            icon={faCaretUp}
                            className="text-teal-400 text-lg"
                          />{" "}
                          {cryptolive.secondValue}
                        </td>
                        <td className="border-dashed border-r-2 border-neutral-600 px-4 pt-2  flex justify-center items-center gap-3">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="text-red-600 text-lg"
                          />{" "}
                          {cryptolive.thirdValue}
                        </td>
                        <td className="px-4 pt-2 text-center  flex justify-center items-center gap-3">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="text-red-600 text-lg"
                          />{" "}
                          {cryptolive.fourValue}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-400">{cryptolive.para}</p>
              </div>
            ))}
          </div>
          
          {/* </ScrollAnimation> */}
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-5 py-3 md:px-10 md:py-4 rounded-full text-white font-semibold bg-amber-500 hover:bg-teal-400"
          >
            More Currency
          </Link>
        </div>
      </div>
      </ScrollEffect>
    </div>
  );
}

export default LivePrice;
