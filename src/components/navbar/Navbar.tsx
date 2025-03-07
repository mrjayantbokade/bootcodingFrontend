

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SolutionPopup from "../navbarPopups/SolutionPopup";
import ProductPopup from "../navbarPopups/ProductPopup";
import { IoMenu } from "react-icons/io5";

interface NavItem {
  label: string;
  element?: JSX.Element;
  link: string;
}

const navItems: NavItem[] = [
  {
    label: "Products",
    element: <ProductPopup />,

    link: "/",
  },
  {
    label: "Solution",
    element: <SolutionPopup />,
    link: "/solution",
  },
  {
    label: "Career",
    link: "/career",
  },
  {
    label: "About",

    link: "/about",
  },
];

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (index: number) => {
    clearTimeout(timeoutId);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveIndex(null);
    }, 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="opacity-100    ">
      <nav className="lg:h-24 rounded-br-3xl rounded-bl-3xl mx-auto  px-5 lg:px-10 py-5 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-5 sticky  backdrop-blur-lg">
        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link
            to="/"
            className="text-xl font-bold text-white tracking-wide flex items-center"
            aria-label="Go to homepage"
          >
            <img
              src="/img/bootcoding_logo.svg"
              className="h-8 w-8"
              alt="Logo"
            />
            <h1 className="pt-1 -ml-1.5 lg:-ml-1">ootcoding</h1>
          </Link>
          <button className="lg:hidden" onClick={toggleMenu}>
            <IoMenu className="text-2xl text-white" />
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`flex flex-col lg:flex-row gap-5 lg:gap-10 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group text-left cursor-pointer text-sm font-bold text-white"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.link}>
                <h1 className={`font-inter font-light `}>{item.label}</h1>
              </Link>

              {/* Dropdown */}
              {activeIndex === index && item.element && (
                <div
                  className="absolute -left-[600px] mt-2 rounded-2xl   min-h-auto w-fit  h-fit min-w-fit"
                  onMouseEnter={() => clearTimeout(timeoutId)}
                  onMouseLeave={handleMouseLeave}
                >

                    {item.element}
                
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
