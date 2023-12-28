import React from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors.js'

function SingleColorPalette() {
  const { paletteId, colorId } = useParams();

  function findPalette(id){
    return seedColors.find((palette) => palette.id === id)
  }
  
  const palette = generatePalette(findPalette(paletteId))
  console.log("YARI KA", palette);


  return (
    <div className="SingleColorPalette">
      {/* Probably add header here */}
      <h1>{paletteId}</h1>
      <h1>{colorId}</h1>
    </div>
  )
}

export default SingleColorPalette