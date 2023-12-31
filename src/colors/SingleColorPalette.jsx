import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors.js';
import { v4 as uuidv4 } from 'uuid';
import PaletteHeader from './PaletteHeader';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';

function SingleColorPalette() {
  const { paletteId, colorId } = useParams();
  const [ format, setFormat ] = useState('hex');
  const [ paletteData, setPaletteData ] = useState({palette:{paletteName:'', emoji:''}, shades:[]});

  const mounted = useRef();
  useEffect(() =>{
    if(!mounted.current){
      //Getting Information
      mounted.current = true;
      const pdd = seedColors.find((palette) => palette.id === paletteId);

      const palette = generatePalette(pdd)
      const referrer = [];

      for(let key in palette.colors){
        referrer.push(palette.colors[key].find((color) => (color.id === colorId)))
      }
      setPaletteData({palette:pdd, shades:referrer});

    }
  },[paletteId, colorId])

  function handleChangeFormat(value){
    setFormat(value);
  }

  return (
    <div className="Palette">
      <PaletteHeader showLevel={false} format={format} changeFormat={handleChangeFormat}/>
      <div className="Palette-colors">
        {paletteData.shades.map(color => (
          <ColorBox className="box" showMore={false} key={uuidv4()} color={color[format]} name={color.name} colorId={color.id} paletteId={paletteId} />
          // <div className="box" key={uuidv4()} style={{backgroundColor:color.hex}}>{color.name}</div>
        ))}
      </div>
      <PaletteFooter paletteName={paletteData.palette.paletteName} emoji={paletteData.palette.emoji} />
    </div>
  )
}

export default SingleColorPalette