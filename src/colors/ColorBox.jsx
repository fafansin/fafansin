import React from 'react';
import './ColorBox.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ColorBox({color, name}) {
  return (
    <CopyToClipboard text={color}>
      <div className="ColorBox" style={{backgroundColor:color}}>
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
