import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import { v4 as uuidv4 } from 'uuid';
import PaletteHeader from './PaletteHeader';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import { Link, useOutletContext } from 'react-router-dom';

function SingleColorPalette() {
  const [ pelettes ] = useOutletContext();
  const { paletteId, colorId } = useParams();
  const [ format, setFormat ] = useState('hex');
  const [ paletteData, setPaletteData ] = useState({palette:{paletteName:'', emoji:''}, shades:[]});

  const mounted = useRef();
  useEffect(() =>{
    if(!mounted.current){
      //Getting Information
      mounted.current = true;
      const pdd = pelettes.find((palette) => palette.id === paletteId);

      const palette = generatePalette(pdd)
      const referrer = [];

      for(let key in palette.colors){
        referrer.push(palette.colors[key].find((color) => (color.id === colorId)))
      }
      setPaletteData({palette:pdd, shades:referrer.splice(1)});

    }
  },[paletteId, colorId, pelettes])

  function handleChangeFormat(value){
    setFormat(value);
  }

  return (
    <div className="SingleColorPalette Palette">
      <PaletteHeader showLevel={false} format={format} changeFormat={handleChangeFormat}/>
      <div className="Palette-colors">
        {paletteData.shades.map(color => (
          <ColorBox className="box" 
              showMore={false} 
              key={uuidv4()} 
              color={color[format]} 
              name={color.name} 
              colorId={color.id} 
              paletteId={paletteId} />
        ))}
        <div className="ColorBox go-back">
          {/* <Link to={`/palettes/${paletteId}/${colorId}`} onClick={event => event.stopPropagation()}>
            <span className="see-more">MORE</span>
          </Link> */}
          <Link className="back-button" to={`/palettes/${paletteId}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteData.palette.paletteName} emoji={paletteData.palette.emoji} />
    </div>
  )
}

export default SingleColorPalette