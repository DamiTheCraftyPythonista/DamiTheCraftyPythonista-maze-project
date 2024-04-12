import React, { useState } from "react"
import Grid from "./Grid.js"
import Footer from "./Footer.js"
import Toolbar from "./Toolbar.js"


const GRID_WIDTH = 48;
const GRID_HEIGHT = 21;
const DEFAULT_START_ROW = 10;
const DEFAULT_START_COL = 10;
const DEFAULT_END_ROW = 11;
const DEFAULT_END_COL = 37; 


const createCell = (row, col) => {
  return {
    row,
    col,
    isStart: row === DEFAULT_START_ROW && col === DEFAULT_START_COL,
    isEnd: row === DEFAULT_END_ROW && col === DEFAULT_END_COL,
  };
};


const resetGrid = (gridRows, gridColumns) => { 
  const cells = [];

    for (let row = 0; row < gridRows; row++) {
      const rowArray = []
      for (let col = 0; col < gridColumns; col++) {
        const cell = createCell(row, col);
        rowArray.push(cell);
      }
      cells.push(rowArray);
    }
  
    return cells;
  };


  const useMazeState = () => {
    const [grid, setGrid] = useState(() => resetGrid(GRID_HEIGHT, GRID_WIDTH));
    //   const [startPosition, setStartPosition] = useState([DEFAULT_START_ROW, DEFAULT_START_COL]); 
    //   const [endPosition, setEndPosition] = useState([DEFAULT_END_ROW, DEFAULT_END_COL]); 

    return {
      grid,
      updateGrid: setGrid,
        //     startPosition,
        //     endPosition,
    };
  };


function Visualizer() {

    const { grid, updateGrid } = useMazeState();

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