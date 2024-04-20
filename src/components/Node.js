import React, { useState } from "react"
import "../index.css";


export default function Node(props) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseOver = () => {
    if (props.wallEditActivated) {
      props.wallToggler(props.row, props.col)
    } else {
      setIsHovered(true);
    }
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    if (props.wallEditActivated && typeof props.mouseUpHandler === 'function') {
      props.mouseUpHandler(props.row, props.col)
    } else if (props.startEditActivated && typeof props.mouseUpHandler === 'function') {
      props.mouseUpHandler(props.row, props.col)
    } else if (props.targetEditActivated && typeof props.mouseUpHandler === 'function') {
      props.mouseUpHandler(props.row, props.col)
    }
    setIsHovered(false);
  };


  return (
    <div
      key={props.id}
      className={`cell 
      ${props.isStart ? 'starting-cell' : ''}
      ${props.isTarget ? 'target-cell' : ''}
      ${props.isWall ? 'wall' : ''}
      ${isHovered && props.startEditActivated ? 'start-activated-cell' : ''}
      ${isHovered && props.targetEditActivated ? 'target-activated-cell' : ''}`}
      onMouseDown={() => props.mouseDownHandler(props.row, props.col)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseUp={handleMouseUp}

      style={{ userSelect: 'none' }}
    >
    </div>
  );
}