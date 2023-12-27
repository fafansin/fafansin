import { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuidv4 } from 'uuid';
import './Palette.scss';
import Form from 'react-bootstrap/Form';


function Palette({palette}) {
  const [ level, setLevel ] = useState(500);

  function handleRange(event){
    setLevel(event.target.value);
  }
  return (
    <div className="Palette">
      <div className="Palette-controls">
        <Form.Range value={level} min="100" max="900" step="100" onChange={handleRange}/>
      </div>
      <div className="Palette-colors">
        {palette.colors[level].map(color => (<ColorBox key={uuidv4()} color={color.hex} name={color.name} />))}
      </div>
    </div>
  )
}

export default Palette