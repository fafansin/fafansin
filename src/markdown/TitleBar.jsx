import { useState } from 'react';
import './TitleBar.scss';

function TitleBar({title, onToggle}) {
  const [isOpen, setIsOpen ] = useState(true);

  function handleClick(event){
    event.preventDefault();
    if(onToggle){
      onToggle(!isOpen);
    }
    setIsOpen(!isOpen);
  }
  return (
    <div className="TitleBar">
      <p>{title}</p>
      {onToggle && 
          <button className="btn btn-outline d-lg-none" onClick={handleClick}>{isOpen ? 'close me' : 'open me'}</button>
      }
      
    </div>
  )
}

export default TitleBar