import { useState } from 'react';
import './ColorBox.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from "chroma-js";

function ColorBox({color, name, colorId, paletteId, showMore=true}) {
  const [ copied, setCopied ] = useState(false);
  
  const isDark = chroma(color).luminance() <= 0.08;
  const isLight = chroma(color).luminance() >= 0.06;

  function onCopy(event){
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <CopyToClipboard text={color} onCopy={onCopy}>
      <div className="ColorBox" style={{backgroundColor:color}}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{backgroundColor:color}}></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={isLight && 'dark-text'}>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDark && 'light-text'}>{name}</span>
          </div>
          <button className={`copy-button ${isLight && 'dark-text'}`}>Copy</button>
        </div>
        {showMore && (
          <Link to={`/palettes/${paletteId}/${colorId}`} onClick={event => event.stopPropagation()}>
            <span className={`see-more ${isLight && 'dark-text'}`}>MORE</span>
          </Link>
        )}
        
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
