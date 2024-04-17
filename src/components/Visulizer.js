import React, { useState, useEffect } from "react"
import Grid from "./Grid.js"
import Footer from "./Footer.js"
import Toolbar from "./Toolbar.js"
import "../index.css";


// const GRID_WIDTH = 48;
// const GRID_HEIGHT = 21;
const DEFAULT_START_ROW = 10;
const DEFAULT_START_COL = 10;
const DEFAULT_TARGET_ROW = 10;
const DEFAULT_TARGET_COL = 37; 



function initializeGrid () { 
  const cells = [];

    for (let row = 0; row < 21; row++) {
      const rowArray = []
      for (let col = 0; col < 48; col++) {
        const cell = {
          row, 
          col, 
          isStart: row === DEFAULT_START_ROW && col === DEFAULT_START_COL,
          isTarget: row === DEFAULT_TARGET_ROW && col === DEFAULT_TARGET_COL,
          startEditActivated: false,
          targetEditActivated: false, 
          mouseDownHandler: () => {},
          mouseUpHandler: () => {}, 
        };
        rowArray.push(cell);
      }
      cells.push(rowArray);
    }
  
    return cells;
  };


function Visualizer() {

  const [grid, setGrid] = useState(() => initializeGrid());
  const [startPosition, setStartPosition] = useState({row: DEFAULT_START_ROW, col: DEFAULT_START_COL}); 
  const [targetPosition, setTargetPosition] = useState({row: DEFAULT_TARGET_ROW, col: DEFAULT_TARGET_COL}); 


  //grid updating

  function regenerateGrid(inputObject) {
    const updatedGrid = grid.map((row) =>
          row.map((node) => {
              if (node.row === startPosition.row && node.col === startPosition.col) {
                  return { 
                    ...node, 
                    isStart: true, 
                    mouseDownHandler: handleStartMouseDown, 
                    ...inputObject, 
                  };
              } else if (node.row === targetPosition.row && node.col === targetPosition.col) {
                  return { 
                    ...node, 
                    isTarget: true, 
                    mouseDownHandler: handleTargetMouseDown, 
                    ...inputObject, 
                  };
              } else {
                return ({
                  ...node, 
                  isStart: false, 
                  isTarget: false, 
                  mouseDownHandler: () => {}, 
                  ...inputObject,
                })
              }
          })
      );
      setGrid([...updatedGrid]);
  };


  useEffect(() => {
    regenerateGrid({
      startEditActivated: false, 
      mouseUpHandler: () => {},
      })
  }, [startPosition])


  useEffect(() => {
    regenerateGrid({
      targetEditActivated: false, 
      mouseUpHandler: () => {},
      })
  }, [targetPosition])


  //Start and target nodes drag and drop

  function handleStartMouseDown() {
    regenerateGrid(
      {startEditActivated: true, 
      mouseUpHandler: handleStartMouseUp,
      }
    )
  }

  function handleStartMouseUp(newStartRow, newStartCol) {
    setStartPosition({row: newStartRow, col: newStartCol})
    regenerateGrid(
    {startEditActivated: false}
    )
  }


  function handleTargetMouseDown() {
    regenerateGrid(
      {targetEditActivated: true, 
      mouseUpHandler: handleTargetMouseUp,
      }
    )
  }

  function handleTargetMouseUp(newTargetRow, newTargetCol) {
    setTargetPosition({row: newTargetRow, col: newTargetCol})
    regenerateGrid(
      {targetEditActivated: false}
    )
  }


  //App

  return (
    <div>
      <Toolbar />
      <Grid 
        cells={grid} 
      />
      <Footer />
    </div>
  );
}

export default Visualizer