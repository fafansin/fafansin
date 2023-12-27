import React from 'react';
import seedColors from './seedColors.js';
import Palette from './Palette';

function Palettes() {
  return (
    <div className="Palettes">
      <Palette data={seedColors[0]} />
    </div>
  )
}

export default Palettes