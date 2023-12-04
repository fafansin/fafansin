import { useState } from 'react';
import './TitleBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMinimize } from '@fortawesome/free-solid-svg-icons'

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
      <p className="text-light">{title}</p>
      {onToggle && 
          <button className="btn btn-outline d-lg-none" onClick={handleClick}>{isOpen ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}</button>
      }
      
    </div>
  )
}

export default TitleBar