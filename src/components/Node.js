import React, { useState } from "react"
import "../index.css";


export default function Node(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={props.id}
      className={`cell 
      ${props.isStart ? 'starting-cell' : ''}
      ${isHovered && props.startEditActivated ? 'start-activated-cell' : ''}`}

      onMouseDown={props.mouseDownHandler}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseUp={
        handleMouseOut
        //function passed from parent which takes the nodes row and col and uses them as inputs to change startPosition in parent
      }
    >
    </div>
  );
}