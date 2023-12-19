import { useEffect, useRef, useState } from 'react';
import './Cards.scss';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Cards() {
  const [ state, setState ] = useState({cards:[], deckId:null, remaining:0, loading:false});
  const mounted = useRef();
  
  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;
      // initialize deck
      shuffle();
    }
  });

  async function shuffle(){
    setState({...state, loading:true, remaining:0});
    try{
      const  { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      setState({...state, deckId:data.deck_id, remaining:data.remaining, loading:false, cards:[]});
    }catch(error){
      console.error("Error Shuffle", error);
    }
  }

  async function getCard(){
    setState({...state, loading:true})
    try {
      const { data } = await axios.get(`https://deckofcardsapi.com/api/deck/${state.deckId}/draw/?count=1`);  
      setState({...state, 
          loading:false,
          cards:[...state.cards, {
            code:data.cards[0].code, 
            url:data.cards[0].images.png, 
            rotation:Math.floor(Math.random() * 18) * (Math.random() < 0.5 ? -1 : 1)}], 
          remaining:data.remaining});
    } catch (error) {
      console.error("ERROR get Card", error);
    }
    
  }
  return (
    <div className="Cards text-center border shadow py-3">
      <h1 className="text-center">Card Dealer</h1>
      <div className="d-flex gap-3 justify-content-center">
        <Button variant="primary" onClick={getCard} disabled={state.loading || state.remaining < 1}>GIMME A CARD!</Button>
      </div>
      <div className="pile mt-5">
        {state.cards.map((card) => (
          <img 
            key={card.code} 
            data={card} 
            alt={card.code} 
            src={card.url}
            style={{rotate:`${card.rotation}deg`}}
            />))}
      </div>
      <p>Cards Remaming: {state.remaining}</p>
      <Button variant="info" onClick={shuffle}>SHUFFLE!</Button>
    </div>
  )
}

export default Cards