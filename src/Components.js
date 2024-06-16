import React, { useState } from "react";

export function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  // }

  // return (
  //   <button className="square" onClick={handleClick}>
  //     {value}
  //   </button>
  // );
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
