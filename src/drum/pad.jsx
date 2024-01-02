import { useEffect } from 'react';

const Pad = ({ beat, src, name, id, playing, onPress }) => {
  // let interval;
  useEffect(()=> {
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    }
  })
  function onKey(event){
    event.preventDefault();
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
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    
    document.getElementById(name).classList.add('active');
    onPress({display:name})
    setTimeout(() => {
      document.getElementById(name).classList.remove('active');
      
    }, 150)

  }

  return(
    <div id={name} className="drum-pad bg-primary rounded-circle shadow" value={beat} onClick={onClick} onKeyUp={onKey}>
      <span>{beat}</span>
      <audio id={id} className="clip" src={src}/>
    </div>
  )
}

export default Pad