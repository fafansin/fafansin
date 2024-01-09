import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import SortableList from 'react-easy-sort';
import { styled } from '@mui/material/styles';
const MainList = styled(SortableList)(() => ({
  height:"100%"
}))

function DraggableColorList({colors, remove, onSortEnd}) {
  return (
    <MainList onSortEnd={onSortEnd} className="DraggableColorList">
      {colors.map((color, i) => (
        <DraggableColorBox key={color.name} color={color.color} name={color.name} remove={remove}/>
      ))}
    </MainList>
  )
}

export default DraggableColorList;