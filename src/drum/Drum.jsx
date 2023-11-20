import { useState } from 'react';
import Pad from './pad';
import padlist from './padlist.js';
import './Drum.css';

export default function Drum() {
  const [display,setDisplay] = useState('');
  
  function onPress(data){
    setDisplay(data.display);
  }

  return (
      <div id="drum-machine">
        <h1 id="display">{display}</h1>
        <div className="drum-pads">
          { padlist.map((item) => <Pad key={item.name} {...item} onPress={onPress}/>)}
        </div>
      </div>
  )
    
}