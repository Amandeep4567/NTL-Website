export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "hackathons",
    title: "Hackathons",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "research",
    title: "Research",
  },
  {
    id: "labs",
    title: "Labs",
  },
];

import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 px-4 sm:px-10 justify-between items-center navbar">
      <img src={logo} alt="NtlLogo" className="w-[60px] h-[auto]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index: number) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden z-10 flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[24px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index: number) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
