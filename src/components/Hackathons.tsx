export const hackDetails1 = [
  {
    title1: "LUMOS",
    description1:
      "LUMOS Hackathon is an event that brings together participants from diverse backgrounds and skill sets to collaboratively solve real-world challenges using innovative technology solutions. The event is typically organized by LUMOS, a company that focuses on developing technology solutions for businesses, governments, and organizations.",
  },
  {
    title2: "ETHIndia",
    description2:
      "ETHIndia is a hackathon event that aims to bring together developers, entrepreneurs, and enthusiasts from around the world to explore the potential of blockchain technology and its real-world applications. The event is typically organized by Devfolio, a company that provides a platform for hackathons and other developer-focused events.",
  },
];

export const hackDetails2 = [
  {
    title3: "9Hacks",
    description3:
      "9Hacks is a hackathon event that provides a platform for developers, designers, and entrepreneurs to collaborate and build innovative solutions to real-world problems. The event is typically organized by 9Stacks, a company that offers an online platform for playing real-money skill games. It is conducted by the student run organisation lab called NextTech Lab for the student of the the lab only.",
  },
  {
    title4: "UNFOLD",
    description4:
      "An 'unfold hackathon' typically refers to a type of hackathon that is focused on creating innovative solutions to complex challenges related to sustainability, environmentalism, and social impact. The goal of an unfold hackathon is to bring together people from diverse backgrounds and skill sets to collaborate and create solutions that can help make a positive impact on the world.",
  },
];

import React from "react";
import {
  hack1,
  hack2,
  hack3,
  hack4,
  hack5,
  hack6,
  hack7,
  hack8,
  hack9,
  hack10,
  hack11,
  hack12,
  hack13,
  hack14,
  hack15,
  hack16,
} from "../assets";

const Hackathons = () => {
  return (
    <div className="w-full">
      <div className="flex ml-20 mr-20 text-justify text-[21px]">
        {hackDetails1.map((hackDet) => (
          <div className="">
            <div className="mr-20">
              <h1 className="text-center m-5 text-[40px] font-semibold">
                {hackDet.title1}
              </h1>
              <p className="">{hackDet.description1}</p>
            </div>
            <div className="ml-20">
              <h1 className="text-center m-5 text-[40px] font-semibold">
                {hackDet.title2}
              </h1>
              <p>{hackDet.description2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="m-[100px] box-group">
        <div className="box">
          <span style={{ "--i": 1 }}>
            <img src={hack1} />
          </span>
          <span style={{ "--i": 2 }}>
            <img src={hack2} />
          </span>
          <span style={{ "--i": 3 }}>
            <img src={hack3} />
          </span>
          <span style={{ "--i": 4 }}>
            <img src={hack4} />
          </span>
          <span style={{ "--i": 5 }}>
            <img src={hack5} />
          </span>
          <span style={{ "--i": 6 }}>
            <img src={hack6} />
          </span>
          <span style={{ "--i": 7 }}>
            <img src={hack7} />
          </span>
          <span style={{ "--i": 8 }}>
            <img src={hack8} />
          </span>
        </div>
      </div>
      <div className="w-full mt-[500px]">
        <div className="flex ml-20 mr-20 text-justify text-[21px]">
          {hackDetails2.map((hackDet) => (
            <div className="">
              <div className="mr-20">
                <h1 className="text-center m-5 text-[40px] font-semibold">
                  {hackDet.title3}
                </h1>
                <p className="">{hackDet.description3}</p>
              </div>
              <div className="ml-20">
                <h1 className="text-center m-5 text-[40px] font-semibold">
                  {hackDet.title4}
                </h1>
                <p>{hackDet.description4}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[100px] mb-[500px] box-group">
        <div className="box">
          <span style={{ "--i": 1 }}>
            <img src={hack1} />
          </span>
          <span style={{ "--i": 2 }}>
            <img src={hack2} />
          </span>
          <span style={{ "--i": 3 }}>
            <img src={hack3} />
          </span>
          <span style={{ "--i": 4 }}>
            <img src={hack4} />
          </span>
          <span style={{ "--i": 5 }}>
            <img src={hack5} />
          </span>
          <span style={{ "--i": 6 }}>
            <img src={hack6} />
          </span>
          <span style={{ "--i": 7 }}>
            <img src={hack7} />
          </span>
          <span style={{ "--i": 8 }}>
            <img src={hack8} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
