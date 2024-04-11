import React from "react"
import "../index.css"



export default function Grid (props) {
  const cells = [];

  for (let row = 0; row < props.numRows; row++) {
    for (let col = 0; col < props.numCols; col++) {
      const cellKey = `${row}-${col}`;
      cells.push(
        <div 
            key={cellKey} 
            className="cell">
        </div>
        );
    }
  }

  return (
    <div className="grid">
      {cells}
    </div>
  );
};
