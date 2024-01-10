import React from "react";
import { Link } from "react-router-dom";
function StartTrading() {
  return (
    <div
      style={{
        backgroundImage: "url(/rg-bg.png)",
      }}
      className="p-5 py-20 bg-no-repeat bg-cover"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-white text-3xl font-bold lg:leading-tight lg:text-4xl text-center">
          Start Trading on Crypto Wallet
        </h2>
        <p className="text-slate-400 pt-3 text-center">
          If you use this site regularly and would like to help keep the site on
          the Internet, please consider donating a small.
        </p>
       
        <Link
              to=""
              className="h-14 w-full lg:w-2/12 mt-6 flex justify-center items-center text-center rounded-full text-white font-semibold bg-amber-500 hover:bg-teal-400"
            >
              Register Now
            </Link>
    
      </div>
    </div>
  );
}

export default StartTrading;
