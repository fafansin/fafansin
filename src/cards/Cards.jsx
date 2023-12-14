import { useEffect, useRef, useState } from 'react';
import './Cards.scss';
import Card from './Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Cards() {
  const [ cards, setCards ] = useState([]);
  const [ deckId, setDeckId ] = useState(null);
  const [ remaining, setRemaining ] = useState(52) ;

  const mounted = useRef();
  
  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;
      // initialize deck
      shuffle();
    }
    return () => {
      setDeckId(null);
      setRemaining(52);
    }
  });

  async function shuffle(){
    try{
      const  { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      console.log(data)
      setDeckId(data.deck_id);
      setRemaining(data.remaining);
    }catch(error){
      console.error("Error Shuffle", error);
    }
    
  }

  async function getCard(){
    try {
      const { data } = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);  
      console.log("GET CARD", data);
      setCards([...cards, data.cards[0]]);
      setRemaining(data.remaining);
    } catch (error) {
      console.error("ERROR get Card", error);
    }
    
  }
  return (
    <div className="Cards">
      <h1>PANIS {deckId} NATITIRA {remaining}</h1>
      <Button variant="primary" onClick={getCard}>GIMME A CARD!</Button>
      <Button variant="info" onClick={shuffle}>SHUFFLE!</Button>
      <div className="pile">
        {cards.map((card) => (<img data={card} alt={card.code}/>))}
      </div>
    </div>
  )
}

export default Cards