import React, { useState, useEffect } from "react"
import Grid from "./Grid.js"
import Footer from "./Footer.js"
import Toolbar from "./Toolbar.js"
import VisualizationGrid from "./VisualizingGrid.js"
import dijkstra from "../Algorithms/Dijkstras.js"
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
          isWall: false, 
          startEditActivated: false,
          targetEditActivated: false, 
          wallEditActivated: false,
          mouseDownHandler: () => {},
          mouseUpHandler: () => {},
          wallToggler: () => {}, 
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
  const [visualizingModeOn, setVisualizingModeOn] = useState(false)
  const [visualizingGrid, setVisualizingGrid] = useState([])


  //Grid updating

  function regenerateGrid(inputObject) {
    const updatedGrid = grid.map((row) =>
          row.map((node) => {
              if (node.row === startPosition.row && node.col === startPosition.col) {
                  return { 
                    ...node, 
                    isWall: false, 
                    isStart: true, 
                    mouseDownHandler: handleStartMouseDown, 
                    ...inputObject, 
                  };
              } else if (node.row === targetPosition.row && node.col === targetPosition.col) {
                  return { 
                    ...node, 
                    isWall: false, 
                    isTarget: true, 
                    mouseDownHandler: handleTargetMouseDown, 
                    ...inputObject, 
                  };
              } else {
                return ({
                  ...node, 
                  isStart: false, 
                  isTarget: false, 
                  mouseDownHandler: handleNodeMouseDown, 
                  ...inputObject,
                })
              }
          })
      );
      setGrid([...updatedGrid]);
  };


  useEffect(() => {
    regenerateGrid({
      targetEditActivated: false, 
      startEditActivated: false, 
      mouseUpHandler: () => {},
      })
  }, [startPosition, targetPosition])


  //Visualization Grid

  function handleGridSwitch() {
    console.log(grid)
    generateVisualizingGrid(grid)
    setVisualizingModeOn(!visualizingModeOn)
    // setGrid(() => initializeGrid())
  }

  function generateVisualizingGrid(currentGrid) {

    if (!currentGrid || currentGrid.length === 0) {
      console.error("Invalid or empty grid provided.");
      return;
    }

    const newGrid = currentGrid.map((row) => {
      const strippedRow = row.map(({ row, col, isWall, isStart, isTarget }) => (
        { row, col, isWall, isStart, isTarget }
      ));

      const newNodes = strippedRow.map((strippedNode) => ({
        ...strippedNode,
        distance: Infinity,
        visited: false
      }));
  
      return newNodes;
    });
    
    setVisualizingGrid(newGrid);
  }

  // function visualizeStepInPath(currentRow, currentCol) {
  //   const updatedGrid = visualizingGrid.map((row) =>
  //   row.map((node) => {
  //       if (node.row === currentRow && node.col === currentCol) {
  //         return ({
  //           ...node, 
  //           visited: true
  //         })
  //       } else {
  //         return ({
  //         ...node, 
  //         })
  //       }}
  //       )
  //     )
  //     setVisualizingGrid([...updatedGrid])
  // };


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


  // Handle walls

  function handleNodeMouseDown(nodeRow, nodeCol) {
    toggleWall(nodeRow, nodeCol)
  }

  function toggleWall(nodeRow, nodeCol) {
    const updatedGrid = [...grid]
    const targetNode = updatedGrid[nodeRow][nodeCol]
    targetNode.isWall = !targetNode.isWall
    setGrid(updatedGrid)
    regenerateGrid(
      {wallEditActivated: true, 
      wallToggler: toggleWall, 
      mouseUpHandler: handleWallMouseUp}
    )
  }

  function handleWallMouseUp() {
    regenerateGrid(
      {wallEditActivated: false, 
      wallToggler: () => {}, 
      mouseUpHandler: () => {}}
    )
  }

  //Visualizations

  // function visualizeDijkstra() {
  //   const dijkstrasPath = dijkstra(visualizingGrid, startPosition, targetPosition)
  //   generateVisualizingGrid(grid)

  //   dijkstrasPath.forEach((node, index) => {
  //     // setTimeout(() => {
  //       visualizeStepInPath(node.row, node.col)
  //     // }, index * 250); 
  //   });
  // }


  //App

  return (
    <div>
      <Toolbar />
      <button onClick={handleGridSwitch}>Toggle Grid</button>
      {/* <button onClick={handleGridSwitch}>Toggle Grid</button>
      <button onClick={visualizeDijkstra}>Visualize Dijkstra</button>
      <button onClick={() => console.log(grid)}>log VisualizingGrid</button> */}
      {/* <button onClick={() => setVisualizingGrid(() => generateVisualizingGrid(grid))}>Clean visGrid</button> */}

      {visualizingModeOn ?      
      <VisualizationGrid cells={visualizingGrid}/>
      :
      <Grid cells={grid} />
      }
      <Footer />
    </div>
  );
}

export default Visualizer