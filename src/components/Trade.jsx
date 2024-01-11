import React from "react";
import { ScrollEffect } from 'react-easy-scroll-effect';
import 'react-easy-scroll-effect/dist/index.css';
function Trade() {
  return (
    <div className="p-5 bg-[#07252a] pb-20">
      <div className="max-w-screen-xl mx-auto">
        <div
          style={{
            backgroundImage: "url(/app-bg.png)",
          }}
          className="bg-no-repeat bg-cover lg:h-[500px] px-4 py-10 lg:p-20"
        >
          <ScrollEffect offset={200} duration={2} animateOut={true}>
          <div className=" flex flex-col flex-col-reverse lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
                Trade on The Mobile App
              </h2>
              <p className="text-slate-400 pt-3">
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small.
              </p>
              <div className="flex gap-4 lg:gap-8 mt-8">
                <div className="hover:bg-teal-400 bg-amber-500 px-4 py-2 rounded flex justify-center items-center gap-2">
                  <img
                    src="/ic15.png"
                    alt="btn-img"
                    className="bg-no-repeat h-8 w-8 bg-contain"
                  />

                  <button className="flex flex-col gap-0">
                    <span className="text-white leading-tight text-sm">
                      Get in on
                    </span>
                    <span className="font-semibold text-white text-lg leading-tight	">
                      Google Play
                    </span>
                  </button>
                </div>
                <div className="hover:bg-teal-400 bg-amber-500 px-4 rounded flex justify-center items-center gap-2">
                  <img
                    src="/ic14.png"
                    alt="btn-img"
                    className="bg-no-repeat h-8 w-8 bg-contain"
                  />

                  <button className="flex flex-col gap-0">
                    <span className="text-white leading-tight text-sm">
                      Get in on
                    </span>
                    <span className="font-bold text-white text-lg leading-tight	">
                      App Store
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/app.png"
                alt="trade-img"
                className="h-50 lg:h-96 bg-cover bg-no-repeat"
              />
            </div>
          </div>
          </ScrollEffect>
        </div>
      </div>
    </div>
  );
}

export default Trade;
