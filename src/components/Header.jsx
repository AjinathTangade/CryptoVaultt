import React from "react";
import { Navbar } from "keep-react";
import { Link } from "react-router-dom";

export const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Live Price", href: "#liveprice", current: false },
  { name: "Road Map", href: "#roadmap", current: false },
  { name: "Testimonial", href: "#testimonial", current: false },
  { name: "Team", href: "#team", current: false },
  { name: "Blog", href: "#blog", current: false },
];

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#022B36] fixed top-0 z-20 w-full">
      <div className="container max-w-screen-xl mx-auto lg:py-4">
        <Navbar fluid={true} className="bg-[#022B36] py-3 px-0">
          <Navbar.Container className="flex items-center justify-between">
            <Navbar.Container className="flex px-0">
              <Navbar.Brand>
                <img src="/logo-3.png" alt="website-logo" className="w-5/12" />
              </Navbar.Brand>
            </Navbar.Container>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-12"
            >
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`font-bold text-lg ${
                      item.current
                        ? "text-teal-400"
                        : "text-teal-400"
                    } rounded-md text-base font-medium hover:text-amber-500`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href.substring(1))}
                      className={`font-bold text-lg ${
                        item.current
                          ? "text-teal-500"
                          : "text-teal-500"
                      } rounded-md text-base font-medium hover:text-amber-500`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </Navbar.Container>
            </Navbar.Collapse>
            <Navbar.Toggle className="block lg:hidden stroke-white-800 ml-5 border-2 border-white-800 p-2 rounded fill-red-700 bg-teal-500" />
          </Navbar.Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
