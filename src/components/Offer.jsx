import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Offer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className="bg-no-repeat bg-cover bg-[#07252a]"
      style={{
        backgroundImage: "url(/off-bg.png)",
      }}
    >
      <div className="max-w-screen-xl mx-auto py-20 px-5">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
              Special Offer-<span className="text-amber-500">30% </span>off For
              This Month
            </h2>
            <p className="text-slate-400 pt-3">
              The main reason for using lorem ipsum text is that it keeps
              people.
            </p>
            <div className="flex gap-4 pt-6">
              <div className="bg-[#00E3C21A] text-center p-2 h-full w-3/12 lg:w-2/12 rounded-lg">
                <p className="font-bold text-3xl text-white">-251</p>
                <span className="text-lg text-white">Days</span>
              </div>
              <div className="bg-[#00E3C21A] text-center p-2 h-full w-3/12 lg:w-2/12 rounded-lg">
                <p className="font-bold text-3xl text-white">-17</p>
                <span className="text-lg text-white">Hours</span>
              </div>
              <div className="bg-[#00E3C21A] text-center p-2 h-full w-3/12 lg:w-2/12  rounded-lg">
                <p className="font-bold text-3xl text-white">-20</p>
                <span className="text-lg text-white">Minutes</span>
              </div>
              <div className="bg-[#00E3C21A] text-center p-2 h-full w-3/12 lg:w-2/12 rounded-lg">
                <p className="font-bold text-3xl text-white">{count}</p>
                <span className="text-lg text-white">Seconds</span>
              </div>
            </div>
            <Link
              to=""
              className="h-14 w-full lg:w-5/12 mt-6 flex justify-center items-center text-center rounded-full text-white font-semibold bg-amber-500 hover:bg-teal-400"
            >
              Join & Buy Token Now
            </Link>
          </div>
          <div>
            <img
              src="/offer.png"
              alt="offer-img"
              className="bg-no-repeat bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
