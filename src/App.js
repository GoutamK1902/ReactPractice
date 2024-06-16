import React, { useState } from "react";
import { Square } from "./Components";

export default function Board() {
  const [xIsNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  /* Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array. Each entry in the array corresponds to the value of a square. When you fill the board in later, the squares array will look like this:

['O', null, 'X', 'X', 'X', 'O', 'O', null, null] */

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  let disable = true;
  let visible = "none";

  if (winner) {
    status = "Winner " + winner;
    disable = false;
    visible = "flex";
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw!";
    disable = false;
    visible = "flex";
  } else {
    status = (xIsNext ? "X" : "O") + "'s Turn";
    disable = true;
    visible = "none";
  }
  function resetHandler() {
    setSquares(Array(9).fill(null));
    setIsNext(true);
  }
  const resetBtnValue = "Play Again";

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button
        disabled={disable}
        style={{ display: visible }}
        className="reset"
        onClick={resetHandler}
      >
        {resetBtnValue}
      </button>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
/* 












































*/
// import React, { useState } from "react";

// export default function MyApp() {
//   const hunter =
//     "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-dapper-white-1668160571994.jpg?q=80&wm=3";
//   const ronin =
//     "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/tvs-select-model-galactic-grey-1657171920806.png?q=80&wm=3";

//   const [url, setUrl] = useState(hunter);
//   const [count, setCount] = useState(0);
//   const [btnColor, setBtnColor] = useState("red");

//   function handleClick() {
//     setUrl((currentBike) => (currentBike == ronin ? hunter : ronin));
//     setCount(count + 1);
//     setBtnColor((currentColor) => (currentColor == "red" ? "blue" : "red"));
//   }

//   return (
//     <div className="board-row"
//       style={{ display: "flex", flexDirection: "column", alignItems: "center" ,rowGap:"20px"}}
//     >
//       <h1 style={{ textAlign: "center" }}>Bike Image Swap</h1>
//       <button
//         count={count}
//         style={{ backgroundColor: btnColor, width: "max-content" }}
//         onClick={handleClick}
//         className="btn"
//       >
//         Swap Bike - clicked {count}
//       </button>
//       <img src={url} alt="bike photo" style={{ width: "55dvw" }} />
//     </div>
//   );
// }
