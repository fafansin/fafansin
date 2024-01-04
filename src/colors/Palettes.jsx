import React from 'react';
import { generatePalette } from './colorHelpers';
import { useParams, useOutletContext } from 'react-router-dom';
import Palette from './Palette';
import '@fontsource/roboto';

function Palettes() {
  const { id } = useParams();
  const [ palettes, setPalettes ] = useOutletContext();

  function findPalette(id){
    return palettes.find((palette) => palette.id === id)
  }

  return (
    <div className="Palettes">
      <Palette palette={generatePalette(findPalette(id))} />
    </div>
  )
}

export default Palettes