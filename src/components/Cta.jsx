import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import LogoSlider from "./LogoSlider";
function Cta() {
  return (
    <div className="relative z-10">
      <div className="bg-[url('./banner.png')] bg-no-repeat bg-local w-full relative">
        <div className="max-w-screen-xl mx-auto">
          <div className=" p-10 md:pl-10 py-20 lg:py-0">
            <div className="block lg:flex justify-items-center gap-4 items-center lg:h-[750px]">
              <div className="basis-4/6 relative xl:pr-36">
                <div className="relative">
                  <div className="bg-[url('./bit1.png')] bg-no-repeat bg-local h-14 w-14 absolute left-[-140px] top-[115px] animate-[wiggle_1s_ease-in-out_infinite]"></div>
                  <div className="bg-[url('./bit3.png')] bg-no-repeat bg-local h-14 w-14 animate-bounce opacity-30"></div>
                  <h1 className="font-extrabold text-5xl lg:text-7xl text-white leading-tight">
                    Trusted & Secure Trading{" "}
                    <span className="text-teal-400">Crypto</span> Wallet
                  </h1>
                  <div className="relative bottom-6 lg:left-60 hidden lg:block">
                    <div className="w-28 border-2 border-teal-400 bottom-10 "></div>{" "}
                    <div className="w-2 h-2 rounded-full border-2 border-teal-400 absolute lg:bottom-0 lg:left-32">
                      <span className="w-1 h-1 rounded-full border-2 border-teal-400 absolute lg:bottom-0 "></span>
                    </div>
                  </div>
                  <div className="my-6">
                    <p className="text-white">
                      You might wonder why a designer would choose to use Morem
                      text
                      <br />
                      Paragraphs in English or their native language.
                    </p>
                  </div>
                </div>
                <div className="mt-16 flex items-center gap-10">
                  <Link
                    to=""
                    className="px-5 py-3 md:px-10 md:py-5 rounded-full text-white font-semibold bg-teal-400 hover:bg-amber-500"
                  >
                    Get Started
                  </Link>
                  <div className="flex items-center gap-4 relative">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="h-12 text-teal-400"
                    />
                    <span className=" h-10 w-10 animate-ping absolute left-1 inline-flex rounded-full bg-sky-400 opacity-75"></span>
                    <Link className="text-white font-semibold text-lg">
                      {" "}
                      How It Work
                    </Link>
                  </div>
                </div>
              </div>
              <div className="basis-2/6"></div>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />
    </div>
  );
}

export default Cta;
