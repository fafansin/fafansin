import React from 'react';
import seedColors from './seedColors.js';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import '@fontsource/roboto';

function Palettes() {
  return (
    <div className="Palettes">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  )
}

export default Palettes