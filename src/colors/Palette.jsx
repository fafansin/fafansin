import React from 'react';
import ColorBox from './ColorBox';
import { v4 as uuidv4 } from 'uuid';
import './Palette.scss';


function Palette({data}) {
  return (
    <div className="Palette">
      <div className="Palette-colors">
        {data.colors.map(color => (<ColorBox key={uuidv4()} {...color}/>))}
      </div>
    </div>
  )
}

export default Palette