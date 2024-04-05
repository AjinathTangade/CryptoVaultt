import React from "react";
import Slider from "react-slick";
import { ScrollEffect } from "react-easy-scroll-effect";
import "react-easy-scroll-effect/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    title: "Coinbase Releases Investor Resources in 2021",
    description:
      "I will give you a complete account of the explorer of the truth, the master builder.",
    image: "/blg2.png",
    authorImage: "/b-ath1.png",
    authorName: "Cameron Williamson",
    blogDate: "February 19, 22",
  },
  {
    title: "Releases Investor Coinbase Resources in 2023",
    description:
      "I will give you a complete account of the explorer of the truth, the master builder.",
    image: "/blg1.png",
    authorImage: "/b-ath1.png",
    authorName: "Cameron Williamson",
    blogDate: "February 19, 22",
  },
  {
    title: "Investor Releases Coinbase Resources in 2022",
    description:
      "I will give you a complete account of the explorer of the truth, the master builder.",
    image: "/blg3.png",
    authorImage: "/b-ath1.png",
    authorName: "Cameron Williamson",
    blogDate: "February 19, 22",
  },
  {
    title: "Releases Investor Coinbase Resources in 2023",
    description:
      "I will give you a complete account of the explorer of the truth, the master builder.",
    image: "/blg1.png",
    authorImage: "/b-ath1.png",
    authorName: "Cameron Williamson",
    blogDate: "February 19, 22",
  },
  {
    title: "Coinbase Releases Investor Resources in 2021",
    description:
      "I will give you a complete account of the explorer of the truth, the master builder.",
    image: "/blg2.png",
    authorImage: "/b-ath1.png",
    authorName: "Cameron Williamson",
    blogDate: "February 19, 22",
  },
];

function Blog() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "50px",
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots">{dots}</ul>
        <div className="additional-dot text-white"></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-5 bg-[#07252a] pt-16 pb-20 xl:pt-0" id="blog">
      <ScrollEffect offset={200} duration={2} animateOut={true}>
        <div className="max-w-screen-xl mx-auto">
          <div>
            <h2 className="text-white text-3xl text-center font-bold lg:leading-tight lg:text-5xl ">
              Recent Cryptocurrency Blog
            </h2>
            <p className="text-slate-400 pt-3 text-center ">
              The main reason for using lorem ipsum text is that it keeps people
              from focusing on the actual text.
            </p>
          </div>
          <div className="mt-14">
            <Slider {...settings}>
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="mx-2 px-3 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="overflow-hidden transition-transform transform hover:scale-100">
                    <img
                      src={post.image}
                      alt={`Blog Post Image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                    />
                    <div className="pt-5 pb-4">
                      <h3 className="text-2xl font-bold text-white hover:text-teal-400">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-slate-400">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex gap-6 items-center ">
                      <div>
                        <img src={post.authorImage} alt="Author" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">
                          {post.authorName}
                        </h4>
                        <span className="font-semibold text-slate-400">
                          {post.blogDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </ScrollEffect>
    </div>
  );
}

export default Blog;
