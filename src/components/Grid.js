import React from "react";
import "../index.css";


const Grid = ({ cells }) => {
  return (
    <div className="grid">
      {cells.map((rowArray, rowIndex) => (
        <div key={rowIndex} className="row">
          {rowArray.map((cell, colIndex) => (
            <div
              key={`${cell.row}-${cell.col}`}
              className={`cell ${cell.isStart ? 'starting-cell' : ''} ${cell.isEnd ? 'target-cell' : ''}`}
            >
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default Grid;