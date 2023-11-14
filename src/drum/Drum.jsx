import { useEffect } from 'react';

export default function Drum() {
  
  const list = ['E','A','S','D','Z','X','C'];

  function onClick(event){
    event.preventDefault();
    console.log(event.target.value);
  }

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    }
  })

  function onKeyUp(event){
    event.preventDefault();
    console.log(event)
  }
  
  return (
      <div id="drum-machine" onKeyUp={onKeyUp}>
        <div id="display">
          { 
            list.map((item) => (
              <button id={item} key={item}
                onClick={onClick} value={item}>{item}</button>))
          }
        </div>
      </div>
  )
    
}