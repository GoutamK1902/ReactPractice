import React, { useState } from "react";
import { Square } from "./Components";

// Board.js
export function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let disable = true;
  let visible = "none";

  if (winner) {
    status = "Winner: " + winner;
    disable = false;
    visible = "flex";
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw!";
    disable = false;
    visible = "flex";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    disable = true;
    visible = "none";
  }

  function resetHandler() {
    onPlay(Array(9).fill(null));
  }
  const resetBtnValue = "Play Again";

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
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

// Game.js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/* TODO: implement game history display */}</ol>
      </div>
    </div>
  );
}
