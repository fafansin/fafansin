import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors.js';
import { v4 as uuidv4 } from 'uuid';
import PaletteHeader from './PaletteHeader';
import ColorBox from './ColorBox';
// import './SingleColorPalette.scss';
// import './Palette.scss';

function SingleColorPalette() {
  const { paletteId, colorId } = useParams();
  const [ format, setFormat ] = useState('hex');
  const colorList = getColorList();

  function findPalette(id){
    return seedColors.find((palette) => palette.id === id);
  }

  function handleChangeFormat(value){
    setFormat(value);
  }

  function getColorList(){
    const palette = generatePalette(findPalette(paletteId))
    const referrer = [];

    for(let key in palette.colors){
      referrer.push(palette.colors[key].find((color) => (color.id === colorId)))
    }
    return referrer.slice(1);
  }


  return (
    <div className="Palette">
      <PaletteHeader showLevel={false} format={format} changeFormat={handleChangeFormat}/>
      <div className="Palette-colors">
        {colorList.map(color => (
          <ColorBox className="box" showMore={false} key={uuidv4()} color={color[format]} name={color.name} colorId={color.id} paletteId={paletteId} />
          // <div className="box" key={uuidv4()} style={{backgroundColor:color.hex}}>{color.name}</div>
        ))}
      </div>
    </div>
  )
}

export default SingleColorPalette