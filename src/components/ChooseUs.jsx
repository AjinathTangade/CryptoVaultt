import React from "react";
import { Link } from "react-router-dom";
function ChooseUs() {
  return (
    <div className="bg-[#07252a] pt-4 pb-20 z-0 px-5 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10">
          <div className="lg:pt-14 lg:pt-0">
            <div>
              <h3 className="text-lg text-teal-400 font-bold pb-3">
                Why Choose Us
              </h3>
              <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
                We’ve Built A Platform To Buy & Sell Shares
              </h2>
              <p className="text-slate-400 pt-6">
                The main reason for using lorem ipsum text is that it keeps{" "}
                <br /> people from focusing on the actual text.
              </p>
              <div className="pt-10 flex flex-col gap-6">
                <div className="flex gap-8">
                  <div className="h-16 lg:h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
                    <img src="/ic12.png" alt="choose-us-sub" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Secure User Data
                    </h3>
                    <p className="text-slate-400 pt-2">
                      The main reason for using lorem ipsum text is that <br />{" "}
                      it keeps people from focusing on the actual text.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="h-16 lg:h-20 w-20 bg-slate-700 rounded-full flex justify-center items-center">
                    <img src="/ic11.png" alt="choose-us-sub" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Big Data Insights
                    </h3>
                    <p className="text-slate-400 pt-2">
                      The main reason for using lorem ipsum text is that <br />{" "}
                      it keeps people from focusing on the actual text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/wc1.png"
              alt="choose-us-img"
              className="w-11/12 h-auto "
            />
          </div>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
            <div className="flex justify-center items-center">
              <img
                src="/ex.png"
                alt="choose-us-img"
                className="w-10/12 h-auto"
              />
            </div>
            <div className="pt-14 lg:pt-0">
              <div>
                <h3 className="text-lg text-teal-400 font-bold pb-3">
                  Why Choose Us
                </h3>
                <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
                  We’ve Built A Platform To Buy & Sell Shares
                </h2>
                <p className="text-slate-400 pt-6">
                  The main reason for using lorem ipsum text is that it keeps{" "}
                  people from <br /> focusing on the actual text.
                </p>
                <div className="pt-10 flex gap-6 flex-col">
                  <div className="flex gap-4 lg:gap-8">
                    <div className="flex items-center justify-between bg-slate-700 rounded-lg w-full">
                      <div className="flex items-center justify-between text-white w-full">
                        <span className="text-md text-slate-400 pl-3 border-r border-dashed w-5/12 md:w-8/12 lg:w-5/12 xl:w-3/12 text-center">
                          Amount
                        </span>
                        <input
                          type="text"
                          placeholder="1500"
                          className="p-4 bg-transparent text-end placeholder:text-white focus:outline-none w-8/12"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end w-6/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="flex items-center text-white gap-6 bg-slate-700 rounded-lg px-3 lg:px-6 py-2">
                        <img src="/fg-1.png" alt="choose-us-img" />
                        <h3>USD</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 lg:gap-8">
                    <div className="flex items-center justify-between bg-slate-700 rounded-lg w-full">
                      <div className="flex items-center justify-between text-white w-full">
                        <span className="text-md text-slate-400 pl-3 border-r border-dashed w-5/12 md:w-8/12 lg:w-5/12 xl:w-3/12 text-center">
                          Get
                        </span>
                        <input
                          type="text"
                          placeholder=".0165"
                          className="p-4 bg-transparent text-end placeholder:text-white focus:outline-none w-8/12"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end w-6/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                      <div className="flex items-center text-white gap-6 bg-slate-700 rounded-lg px-3 lg:px-6 py-2">
                        <img src="/bit-1.png" alt="choose-us-img" />
                        <h3>BTC</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <Link
                  to=""
                  className="px-5 py-3 md:px-10 md:py-5 rounded-full text-white font-semibold bg-teal-400 hover:bg-amber-500 flex items-center justify-center"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
