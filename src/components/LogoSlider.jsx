import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function LogoSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="absolute lg:bottom-[-72px] w-full">
      <div className="max-w-screen-xl mx-auto bg-[#022B36] py-14">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{}}
          responsiveProps={[
            {
              itemsToShow: 5,
              itemsToScroll: 3,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p1.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p2.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p3.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p1.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p2.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p3.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p1.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[300px] xl:w-[200px] flex items-center justify-center">
            <img src="/p2.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <img src="/p3.png" alt="slider-img" className="w-24 h-8 bg-no-repeat bg-cover" />
          </div>
        </ReactSimplyCarousel>
      </div>
    </div>
  );
}

export default LogoSlider;
