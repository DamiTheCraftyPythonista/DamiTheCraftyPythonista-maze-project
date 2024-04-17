import React from "react";
import "../index.css";
import Node from "./Node"


function Grid(props) {

  return (
    <div className="grid">
      {props.cells.map((rowArray, rowIndex) => (
        <div key={rowIndex} className='row'>
          {rowArray.map((cell) => (
            <Node 
              key={`${cell.row}-${cell.col}`}
              row={cell.row}
              col={cell.col}
              // id={`${cell.row}-${cell.col}`}
              isStart={cell.isStart ? true : false}
              isTarget={cell.isTarget ? true : false}
              mouseDownHandler={cell.mouseDownHandler}
              mouseUpHandler={cell.mouseUpHandler}
              startEditActivated={cell.startEditActivated}
              targetEditActivated={cell.targetEditActivated}
            />
          ))}
        </div>
      ))}
    </div>
  );
};


export default Grid;