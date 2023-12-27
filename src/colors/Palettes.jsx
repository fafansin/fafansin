import React from 'react';
import seedColors from './seedColors.js';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

function Palettes() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="Palettes">
      <Palette data={seedColors[0]} />
    </div>
  )
}

export default Palettes