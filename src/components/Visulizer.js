import React, { useState } from "react"
import Grid from "./Grid.js"
import Footer from "./Footer.js"
import Toolbar from "./Toolbar.js"


const GRID_WIDTH = 48;
const GRID_HEIGHT = 21;
const DEF_START = {row: 11, col: 11};


function resetGrid(gridRows, gridColumns) {
    const cells = [];

    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridColumns; col++) {
        const cellKey = `${row}-${col}`;
        cells.push(
          <div 
              key={cellKey} 
              className="cell">
          </div>
          );
      }
    }
  
    return (cells);
  };
  

  function useMazeState() {
    const [grid, setGrid] = useState(() => resetGrid(GRID_HEIGHT, GRID_WIDTH));
    const [startPosition, setStartPosition] = useState(null); 
    const [endPosition, setEndPosition] = useState(null); 
  
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