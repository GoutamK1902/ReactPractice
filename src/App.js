import React, { useState } from "react";

export default function MyApp() {
  const hunter =
    "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-dapper-white-1668160571994.jpg?q=80&wm=3";
  const ronin =
    "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/tvs-select-model-galactic-grey-1657171920806.png?q=80&wm=3";

  const [url, setUrl] = useState(hunter);
  const [count, setCount] = useState(0);
  const [btnColor, setBtnColor] = useState("red");

  function handleClick() {
    setUrl((currentBike) => (currentBike == ronin ? hunter : ronin));
    setCount(count + 1);
    setBtnColor((currentColor) => (currentColor == "red" ? "blue" : "red"));
  }

  return (
    <div>
      <h1>Bike Image Swap</h1>
      <button
        count={count}
        style={{ backgroundColor: btnColor }}
        onClick={handleClick}
        className="btn"
      >
        Swap Bike - clicked {count}
      </button>
      <img src={url} alt="bike photo" style={{ width: "50dvw" }} />
    </div>
  );
}
