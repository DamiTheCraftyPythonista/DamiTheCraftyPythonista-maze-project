import React, { useState } from "react"
import "../index.css";


export default function VisualizationNode(props) {

  return (
    <div
    key={props.id}
    className={`cell 
    ${props.isStart ? 'starting-cell' : ''}
    ${props.isTarget ? 'target-cell' : ''}
    ${props.isWall ? 'wall' : ''}    >
    `}
    >
    </div>
  );
}