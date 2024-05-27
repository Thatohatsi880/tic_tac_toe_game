import React from "react";
import Square from "./Square";
import "./index.css";

const Board = ({ square, onClick, strikeClass, player, winner, reset }) => {
  return (
    <div className="board-container">
      <div className="grid relative">
        <Square
          value={square[0]}
          onClick={() => onClick(0)}
          className="square border-r-4 border-b-4"
          player={player}
        />
        <Square
          value={square[1]}
          onClick={() => onClick(1)}
          className="square border-r-4 border-b-4"
          player={player}
        />
        <Square
          value={square[2]}
          onClick={() => onClick(2)}
          className="square border-b-4"
          player={player}
        />
        <Square
          value={square[3]}
          onClick={() => onClick(3)}
          className="square border-r-4 border-b-4"
          player={player}
        />
        <Square
          value={square[4]}
          onClick={() => onClick(4)}
          className="square border-r-4 border-b-4"
          player={player}
        />
        <Square
          value={square[5]}
          onClick={() => onClick(5)}
          className="square border-b-4"
          player={player}
        />
        <Square
          value={square[6]}
          onClick={() => onClick(6)}
          className="square border-r-4"
          player={player}
        />
        <Square
          value={square[7]}
          onClick={() => onClick(7)}
          className="square border-r-4"
          player={player}
        />
        <Square
          value={square[8]}
          onClick={() => onClick(8)}
          className="square"
          player={player}
        />
        <div
          className={`absolute w-full bg-orange-600 z-40 ${strikeClass}`}
        ></div>
      </div>
      {winner && (
        <div className="flex justify-center mt-16 border-2 p-4">
          <h3 className="text-4xl">
            {winner === "draw" ? "It's a Tie" : `Player ${winner} Wins!`}
          </h3>
        </div>
      )}
      <div className="flex justify-center mt-16 border-2 p-4 text-4xl">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Board;
