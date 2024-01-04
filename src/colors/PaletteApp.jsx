import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

function PaletteApp() {
  const [ palettes, setPalettes ] = useState(useLoaderData())

  return (
    <div className="PaletteApp">
      <Outlet context={[palettes, setPalettes]}/>
    </div>
  )
}

export default PaletteApp