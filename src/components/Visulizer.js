import React, { useState } from "react"
import Grid from "./Grid.js"
import Footer from "./Footer.js"
import Toolbar from "./Toolbar.js"


const GRID_WIDTH = 48;
const GRID_HEIGHT = 21;
const DEFAULT_START_ROW = 11;
const DEFAULT_START_COL = 11;
const DEFAULT_END_ROW = 11;
const DEFAULT_END_COL = 37; 


const handleCellClick = (row, col) => {
  console.log(`Clicked on cell (${row}, ${col})`);

};


function resetGrid(gridRows, gridColumns) {
    
  const cells = [];

    for (let row = 0; row < gridRows; row++) {
      const rowArray = []
      for (let col = 0; col < gridColumns; col++) {
        const cellKey = `${row}-${col}`;
        rowArray.push(
          <div 
              key={cellKey} 
              className="cell"
              onClick={() => handleCellClick(row, col)}>
          </div>
          );
      }
      
      cells.push(rowArray)
    }
  
    return (cells);
  };
  

  function useMazeState() {
    const [grid, setGrid] = useState(() => resetGrid(GRID_HEIGHT, GRID_WIDTH));
    const [startPosition, setStartPosition] = useState([DEFAULT_START_ROW, DEFAULT_START_COL]); 
    const [endPosition, setEndPosition] = useState([DEFAULT_END_ROW, DEFAULT_END_COL]); 
  
    const updateGrid = (newGrid) => {
      setGrid(newGrid);
    };
  
    return {
      grid,
      startPosition,
      endPosition,
      updateGrid,
      setStartPosition,
      setEndPosition,
    };
  }


function Visualizer() {

    const { grid, startPosition, endPosition, updateGrid, setStartPosition, setEndPosition } = useMazeState();

    return(
    <div>
        <Toolbar />
        <Grid cells={grid}/>
        <Footer />
    </div>
    )
}

export default Visualizer