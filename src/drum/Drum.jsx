import { useState } from 'react';
import Pad from './pad';
import padlist from './padlist.js';
import './Drum.scss';

export default function Drum() {
  const [display,setDisplay] = useState('');
  
  function onPress(data){
    setDisplay(data.display);
  }

  return (
    <div className="drum pt-5">
      <div id="drum-machine" className="machine border shadow">
        <div className="display-wrap">
          <span id="display" className="display-4">{display}</span>
        </div>
        <div className="drum-pads border-top">
          { padlist.map((item) => <Pad key={item.name} {...item} onPress={onPress}/>)}
        </div>
      </div>
    </div>
  )
}