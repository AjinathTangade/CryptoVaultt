import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollEffect } from 'react-easy-scroll-effect';
import 'react-easy-scroll-effect/dist/index.css';
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
function Roadmap() {
  return (
    <div id="roadmap">
      <div className="bg-[#07252a] bg-no-repeat bg-local w-full pt-20">
      <ScrollEffect offset={100} duration={1} animateOut={true}>
        <div className="p-5 max-w-screen-xl mx-auto">
          <div>
            <h3 className="text-lg text-center text-teal-400 font-bold pb-3 flex justify-center items-center gap-5">
              <FontAwesomeIcon icon={faArrowRightLong} className="text-2xl" />{" "}
              Roadmap{" "}
              <FontAwesomeIcon icon={faArrowLeftLong} className="text-2xl" />
            </h3>
            <h2 className="text-center text-white text-3xl font-bold lg:leading-tight lg:text-5xl">
              The timeline of our Business
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 py-10">
          
            <div className="col-span-1">
              <div className=" lg:flex lg:flex-col gap-14 ">
                <div></div>
                <div></div>
                <div className="text-white bg-[#022B36] p-5 rounded-lg mt-6 relative">
                  <h4 className="text-2xl font-semibold">Blockchain</h4>
                  <p className="pt-1">24.07.2017</p>
                  <p className="pt-4">
                    In publishing and graphic design, Lorem used to demonstrate
                    the visual form of relying on meaningful content.
                  </p>
                  <span className="hidden lg:block absolute top-20 right-[-116px] xl:right-[-160px]">
                      <img src="/sh2.png" alt="" />
                    </span>
                    <span className="hidden lg:block absolute top-[100px] right-[-90px] xl:right-[-130px]">
                      <img src="/sh1.png" alt="" />
                    </span>
                </div>
                <div></div>
                <div></div>

                <div className="text-white bg-[#022B36] p-5 rounded-lg mt-10 lg:mt-6 relative">
                  <h4 className="text-2xl font-semibold">Circle</h4>
                  <p className="pt-1">24.07.2017</p>
                  <p className="pt-4">
                    In publishing and graphic design, Lorem used to demonstrate
                    the visual form of relying on meaningful content.
                  </p>
                  <span className="hidden lg:block absolute top-20 right-[-116px] xl:right-[-160px]">
                      <img src="/sh2.png" alt="" />
                    </span>
                    <span className="hidden lg:block absolute top-[100px] right-[-90px] xl:right-[-130px]">
                      <img src="/sh1.png" alt="" />
                    </span>
                </div>
                <div className="hidden lg:block"></div>
                <div className="hidden lg:block"></div>

                <div className="text-white bg-[#022B36] p-5 rounded-lg mt-10 relative">
                  <h4 className="text-2xl font-semibold">Token Bridge</h4>
                  <p className="pt-1">24.07.2017</p>
                  <p className="pt-4">
                    In publishing and graphic design, Lorem used to demonstrate
                    the visual form of relying on meaningful content.
                  </p>
                  <span className="hidden lg:block absolute top-20 right-[-116px] xl:right-[-160px]">
                      <img src="/sh2.png" alt="" />
                    </span>
                    <span className="hidden lg:block absolute top-[100px] right-[-90px] xl:right-[-130px]">
                      <img src="/sh1.png" alt="" />
                    </span>
                </div>
              </div>
            </div>
          
            <div className="hidden lg:block col-span-1">
              <div className="flex justify-center items-center">
                <img src="/line.png" alt="roadmap-img" />
              </div>
            </div>
            <ScrollEffect offset={200} duration={2} animateOut={true}>

            <div className="col-span-1">
              <div className="relative">
                <div className=" flex flex-col lg:gap-20">
                  <div className="hidden lg:block"></div>
                  <div className="hidden lg:block"></div>
                  <div className="hidden lg:block"></div>
                  <div className="hidden lg:block"></div>

                  <div className="text-white bg-[#022B36] p-5 rounded-lg relative mt-10 lg:mt-0">
                    <h4 className="text-2xl font-semibold">Times</h4>
                    <p className="pt-1">24.07.2017</p>
                    <p className="pt-4">
                      In publishing and graphic design, Lorem used to
                      demonstrate the visual form of relying on meaningful
                      content.
                    </p>
                    <span className="hidden lg:block absolute top-20 left-[-140px] xl:left-[-185px]">
                      <img src="/sh2.png" alt="" />
                    </span>
                    <span className="hidden lg:block absolute top-[100px] left-[-110px] xl:left-[-155px]">
                      <img src="/sh3.png" alt="" />
                    </span>
                  </div>

                  <div className="hidden lg:block"></div>

                  <div className="text-white bg-[#022B36] p-5 rounded-lg mt-10 relative ">
                    <h4 className="text-2xl font-semibold">IP Stars</h4>
                    <p className="pt-1">24.07.2017</p>
                    <p className="pt-4">
                      In publishing and graphic design, Lorem used to
                      demonstrate the visual form of relying on meaningful
                      content.
                    </p>
                    <span className=" absolute top-20 left-[-140px] xl:left-[-185px]">
                      <img src="/sh2.png" alt="" />
                    </span>
                    <span className=" absolute top-[100px] left-[-110px] xl:left-[-155px]">
                      <img src="/sh3.png" alt="" />
                    </span>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </div>
            </ScrollEffect>
          </div>
         
        </div>
        </ScrollEffect>
      </div>
    </div>
  );
}

export default Roadmap;
