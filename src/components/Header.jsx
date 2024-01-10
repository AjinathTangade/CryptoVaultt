import React from "react";
import { Navbar, Button } from "keep-react";
import { Link } from "react-router-dom";
export const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Live Price", href: "/aboutus", current: false },
  { name: "Road Map", href: "/contact", current: false },
  { name: "Testimonial", href: "/help", current: false },
  { name: "Team", href: "/terms", current: false },
  { name: "Blog", href: "/terms", current: false },
];
function Header() {
  return (
    <div className="bg-[#022B36]">
      <div className="container max-w-screen-xl mx-auto mx-auto lg:py-4">
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
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${item.current}
                      ? "font-bold  text-lg text-amber-500"
                      : "font-bold text-white text-lg"
                  }rounded-md text-base font-medium hover:text-amber-500 ${
                    // Display as block on medium screens and flex on large screens
                    "md:inline-block lg:flex"
                  }`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${item.current}
                          ? "font-bold  text-lg text-amber-500"
                          : "font-bold  text-lg"
                      }rounded-md text-base font-medium hover:text-amber-500 ${
                        // Display as block on medium screens and flex on large screens
                        "md:inline-block lg:flex"
                      }`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </Navbar.Container>
            </Navbar.Collapse>
            <Navbar.Toggle className="block lg:hidden stroke-white-800 ml-5 border-2 border-white-800 p-2 rounded fill-red-700" />
          </Navbar.Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
