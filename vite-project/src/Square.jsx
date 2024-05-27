import React from "react";
import PropTypes from "prop-types";
import "./index.css"; // Ensure this file exists in the same directory

const Square = ({ onClick, value, className, player }) => {
  let hoverClass = null;
  console.log('value:', value, 'player:', player); // Debugging line
  if (value === null && player !== undefined && player !== null) { // Check for undefined and null
    hoverClass = `${player.toLowerCase()}-hover`;
  }
  return (
    <button
      onClick={onClick}
      className={`w-28 h-28 text-5xl ${className} ${hoverClass}`}>
      {value}
    </button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  player: PropTypes.string,
};

export default Square;
