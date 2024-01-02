import { useState } from 'react';
import Pad from './pad';
import padlist from './padlist.js';
import './Drum.scss';

export default function Drum() {
  const [display,setDisplay] = useState('Drum Beat');
  
  function onPress(data){
    setDisplay(data.display);
  }

  return (
    <div className="drum">
      <h1 className="text-center display-4">Drum Machine</h1>
      <div id="drum-machine" className="machine border shadow">
        <div className="display-wrap">
          <span id="display" className="display-5">{display}</span>
        </div>
        <div className="drum-pads border-top">
          { padlist.map((item) => <Pad key={item.name} {...item} onPress={onPress}/>)}
        </div>
      </div>
    </div>
  )
}