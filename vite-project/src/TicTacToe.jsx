import { useState, useEffect } from "react";
import Board from "./Board";
import "./index.css";

const checkWinner = (square, setStrikeClass, setWinner) => {
  const winningCombos = [
    { combo: [0, 1, 2], strikeClass: "strike-row-1" }, // top row
    { combo: [3, 4, 5], strikeClass: "strike-row-2" }, // middle row
    { combo: [6, 7, 8], strikeClass: "strike-row-3" }, // bottom row
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" }, // top left to bottom right
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" }, // top right to bottom left
    { combo: [0, 3, 6], strikeClass: "strike-column-1" }, // left column
    { combo: [1, 4, 7], strikeClass: "strike-column-2" }, // middle column
    { combo: [2, 5, 8], strikeClass: "strike-column-3" }, // right column
  ];
  for (const { combo, strikeClass } of winningCombos) {
    const [a, b, c] = combo;
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      setStrikeClass(strikeClass);
      if (square[a] === "X") {
        setWinner("X");
      } else {
        setWinner("O");
      }
      return;
    }
  }
  const isDraw = square.every((square) => square !== null);
  setWinner(isDraw ? "draw" : null);
};

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [strikeClass, setStrikeClass] = useState("hidden");
  const [winner, setWinner] = useState("");

  const handleCellClick = (index) => {
    if (winner) return;
    if (square[index] !== null) return;
    const newSquare = [...square];
    newSquare[index] = player;
    setSquare(newSquare);
    setPlayer(player === "X" ? "O" : "X");
  };

  useEffect(() => {
    checkWinner(square, setStrikeClass, setWinner);
  }, [square]);

  const handleReset = () => {
    if (!winner && winner !== "draw") return;
    setSquare(Array(9).fill(null));
    setPlayer("X");
    setStrikeClass("hidden");
    setWinner("");
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <Board
        square={square}
        onClick={handleCellClick}
        strikeClass={strikeClass}
        player={player}
        winner={winner}
        reset={handleReset}
      />
    </div>
  );
};

export default TicTacToe;
