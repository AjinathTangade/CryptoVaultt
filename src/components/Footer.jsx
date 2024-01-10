import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhoneFlip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const usefulLinks = [
  { id: 1, text: "Privacy Policy" },
  { id: 2, text: "Terms of Service" },
  { id: 3, text: "Disclamier" },
  { id: 4, text: "Credits" },
  { id: 5, text: "FaqUseful" },
];

export const quickLinks = [
  { id: 1, text: "Home" },
  { id: 2, text: "About" },
  { id: 3, text: "Market" },
  { id: 4, text: "Trading" },
  { id: 5, text: "Team" },
];

function Footer() {
  return (
    <div
      style={{
        backgroundImage: "url(/footer-img.png)",
      }}
      className="px-5 bg-no-repeat bg-cover"
    >
      <div className="max-w-screen-xl mx-auto ">
        <div className="pb-5">
          <div className="lg:flex border-b border-slate-400">
            <div className="lg:w-8/12 lg:border-r border-slate-400">
              <div className="">
                <div className="lg:flex gap-4 border-b border-slate-400 pt-14 pb-8 lg:pr-14 lg:pt-24">
                  <img
                    src="/logo-3.png"
                    alt="footer-log"
                    className="bg-no-repeat w-9/12 md:w-1/4 "
                  />
                  <p className="text-slate-400">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that.
                  </p>
                </div>
                <div className="flex flex-wrap gap-10 lg:gap-8 pt-10">
                  <div className="">
                    <h3 className="text-white font-semibold text-xl">
                      Useful links
                    </h3>
                    <ul className="pt-4">
                      {usefulLinks.map((link) => (
                        <li key={link.id} className="py-1 ">
                          <Link className="text-white font-semibold hover:text-teal-400">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <h3 className="text-white font-semibold text-xl">
                      Quick Links
                    </h3>
                    <ul className="pt-4">
                      {quickLinks.map((link) => (
                        <li
                          key={link.id}
                          className="py-1 text-white hover:text-teal-400"
                        >
                          <Link className="text-white font-semibold hover:text-teal-400">
                            {" "}
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <h3 className="text-white font-semibold text-xl">
                      Office Address
                    </h3>
                    <div className="flex flex-col gap-5 pt-8">
                      <div className="flex gap-5 items-center ">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-white"
                        />
                        <p className="text-white ">
                          Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                        </p>
                      </div>
                      <div className="flex gap-5 items-center ">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-white"
                        />
                        <p className="text-white ">themexriver@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-5">
                        <FontAwesomeIcon
                          icon={faPhoneFlip}
                          className="text-white"
                        />
                        <p className="text-white ">+2(305) 587-3407</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12">
              <div className="pt-10 lg:pt-24 lg:pl-14 pb-14 border-b border-slate-400">
                <div className="">
                  <h3 className="text-white font-semibold text-xl">
                    Newsletter
                  </h3>
                  <p className="text-slate-400 pt-2">
                    Readable content of a page when looking at its layout. The
                    point of usingis that.
                  </p>
                </div>
                <div className="mt-6 relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-full p-4 outline-none bg-transparent border text-white font-semibold"
                    placeholder="Email Here"
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-white bg-amber-500 h-6 w-6 p-4 mt-[1px] mr-[1px] rounded-full absolute top-0 right-0 hover:bg-teal-400"
                  />
                </div>
              </div>
              <div className="pt-6 pb-10 lg:pl-14 lg:pb-14 ">
                <h3 className="text-white font-bold text-2xl">
                  Join the Conversation
                </h3>
                <div className="flex gap-6 mt-5">
                  <img src="/facebook.svg" alt="facebook-icon" />
                  <img src="/twitter.svg" alt="twitter-icon" />
                  <img src="/twitch.svg" alt="twitch-icon" />
                  <img src="/youtube.svg" alt="youtube-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-between">
            <div>
              <p className="text-white">
                Copyright@cryptovault 2024 . All rights reserved.
              </p>
            </div>
            <div className="flex gap-5">
              <Link to="#" className="text-white font-semibold">
                Support
              </Link>
              <Link to="#" className="text-white font-semibold">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
