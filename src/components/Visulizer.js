import React, { useState } from "react"
import Grid from "./Grid.js"
import Footer from "./Footer.js"
import Toolbar from "./Toolbar.js"


// const GRID_WIDTH = 48;
// const GRID_HEIGHT = 21;
const DEFAULT_START_ROW = 10;
const DEFAULT_START_COL = 10;
const DEFAULT_END_ROW = 11;
const DEFAULT_END_COL = 37; 



function initializeGrid () { 
  const cells = [];

    for (let row = 0; row < 21; row++) {
      const rowArray = []
      for (let col = 0; col < 48; col++) {
        const cell = {
          row, 
          col, 
          isStart: row === DEFAULT_START_ROW && col === DEFAULT_START_COL,
          isEnd: row === DEFAULT_END_ROW && col === DEFAULT_END_COL,
          startEditActivated: false,
          clickHandler: null,
        };
        rowArray.push(cell);
      }
      cells.push(rowArray);
    }
  
    return cells;
  };


function Visualizer() {

  const [grid, setGrid] = useState(() => initializeGrid());
  const [startPosition, setStartPosition] = useState([DEFAULT_START_ROW, DEFAULT_START_COL]); 
  const [startClicked, setStartClicked] = useState(false)


  // function regenerateGrid () {
  //     const updatedGrid = grid.map((row) =>
  //         row.map((node) => {
  //             if (node.row === startRow && node.col === startCol) {
  //                 return { ...node, isStart: true };
  //             }
  //             return node;
  //         })
  //     );
  //     setGrid(updatedGrid);
  // };

  
  function handleStartClicked () {
    setStartClicked(true)
    // regenerateGrid()
  }


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