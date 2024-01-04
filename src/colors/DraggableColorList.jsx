import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

function DraggableColorList({colors, remove}) {
  return (
    <div className="DraggableColorList" style={{height:"100%"}}>
      {colors.map((color, i) => (
        <DraggableColorBox 
          index={i}
          key={color.name} 
          remove={remove}
          {...color} />
      ))}
    </div>
  )
}

export default SortableContainer(DraggableColorList);