import React from 'react';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors.js'

function SingleColorPalette() {
  console.log(seedColors)
  const { paletteId, colorId } = useParams();

  return (
    <div className="SingleColorPalette">
      {/* Probably add header here */}
      <h1>{paletteId}</h1>
      <h1>{colorId}</h1>
    </div>
  )
}

export default SingleColorPalette