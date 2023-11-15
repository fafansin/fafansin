import { useEffect } from 'react';

const Pad = ({ beat, src, name, id, playing, onPress }) => {
  
  useEffect(()=> {
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    }
  })
  function onKey(event){
    if(event.key.toUpperCase() === beat){
      play();
    }
  }
  function onClick(event){
    event.preventDefault();
    play();
    
  }
  function play(){
    const audio = document.getElementById(beat);
    audio.currentTime = 0;
    audio.play();
    onPress({display:name})

  }

  return(
    <div id={name} className="drum-pad" value={beat} onClick={onClick} onKeyDown={onKey}>
      <h4>{beat}</h4>
      <audio id={id} className="clip" src={src}/>
    </div>
  )
}

export default Pad