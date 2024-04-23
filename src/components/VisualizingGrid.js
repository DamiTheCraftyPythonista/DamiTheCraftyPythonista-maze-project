import React from "react";
import VisualizationNode from "./VisualizationNode"
import "../index.css";


export default function VisualizationGrid(props) {

  return (
    <div className="grid">
      {props.cells.map((rowArray, rowIndex) => (
        <div key={rowIndex} className='row'>
          {rowArray.map((cell) => (
            <VisualizationNode 
                key={`${cell.row}-${cell.col}`}
                row={cell.row}
                col={cell.col}
                isStart={cell.isStart ? true : false}
                isTarget={cell.isTarget ? true : false}
                isWall={cell.isWall ? true : false}
                isVisited={cell.visited ? true : false}
            />
          ))}
        </div>
      ))}
    </div>
  );
};