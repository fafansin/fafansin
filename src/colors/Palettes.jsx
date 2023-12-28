import React from 'react';
import seedColors from './seedColors.js';
import { generatePalette } from './colorHelpers';
import { useParams } from 'react-router-dom';
import Palette from './Palette';
import '@fontsource/roboto';

function Palettes() {
  const { id } = useParams();

  function findPalette(id){
    return seedColors.find((palette) => palette.id === id)
  }

  return (
    <div className="Palettes">
      <Palette palette={generatePalette(findPalette(id))} />
    </div>
  )
}

export default Palettes