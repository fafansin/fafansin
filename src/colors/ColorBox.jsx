import { useState } from 'react';
import './ColorBox.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ColorBox({color, name}) {
  const [ copied, setCopied ] = useState(false);
  
  function onCopy(event){
    setCopied(true);
  }

  return (
    <CopyToClipboard text={color} onCopy={onCopy}>
      <div className="ColorBox" style={{backgroundColor:color}}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{backgroundColor:color}}></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
