import React from "react";
import { McCarthy, Norman, Pausch, Satoshi, Tesla } from "../Pages";
import { Player } from "@lottiefiles/react-lottie-player";

export const labDetails = [
  {
    illustration: (
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
        className="lottie"
        background="transparent"
        speed={1}
        style={{ width: "270px", height: "270px" }}
        hover
        loop
      ></Player>
    ),
    labName: "Norman Lab",
    description: "Web Development/ App Development",
  },
  {
    illustration: (
      <Player
        src="https://assets7.lottiefiles.com/packages/lf20_e3E837.json"
        className="lottie"
        background="transparent"
        speed={1}
        style={{ width: "200px", height: "200px" }}
        hover
        loop
      ></Player>
    ),
    labName: "McCarthy Lab",
    description: "Artificial Intelligence/ Machine Lab",
  },
  {
    illustration: (
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_t03tbmqu.json"
        className="lottie"
        background="transparent"
        speed={1}
        style={{ width: "250px", height: "250px" }}
        hover
        loop
      ></Player>
    ),
    labName: "Pausch Lab",
    description: "Augmented Reality & Virtual Reality",
  },
  {
    illustration: (
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_yc9ywdm7.json"
        className="lottie"
        background="transparent"
        speed={1}
        style={{ width: "200px", height: "200px" }}
        hover
        loop
      ></Player>
    ),
    labName: "Satoshi Lab",
    description: "Blockchain and Cryptocurrency",
  },
  {
    illustration: (
      <Player
        src="https://assets5.lottiefiles.com/packages/lf20_hlvOdjjxTF.json"
        className="lottie"
        background="transparent"
        speed={1}
        style={{ width: "250px", height: "250px" }}
        hover
        loop
      ></Player>
    ),
    labName: "Tesla Lab",
    description: "Internet of Things",
  },
];

const Labs = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        {labDetails.map((labDet) => (
          <div className="">
            <div className="">
              <div className="">{labDet.illustration}</div>
            </div>
            <div className="">
              <h1 className="">{labDet.labName}</h1>
              <h4 className="">{labDet.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
