import React, { useEffect } from "react";

function Home(): JSX.Element {
  return (
    <div className="overlay font-bold" id="overlay">
      <div>
        <div className="text-wrapper" id="text-wrapper">
          <h1>NextTech Lab</h1>
        </div>
        <div className="text" id="ntl_text">
          <div id="nxt" className="nxt">
            <h1>NextTech Lab</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
