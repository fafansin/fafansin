import { useState, useEffect } from 'react';
import list from './list.js';

import './Quotes.css';

export default function Quote(){
  
  const [ indexer, setIndexer ] = useState(0);
  
  useEffect(getRandom);

  function getRandom(){
    setIndexer(Math.floor(Math.random() * list.length))
  }
  
  return(
    <div className="quote">
      <div id="quote-box">
        <h1 id="text">{list[indexer].quote}</h1>
        <p id="author">{list[indexer].author}</p>
        <button id="new-quote" onClick={getRandom}>New Quote</button>
        <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote" className="btIcon">Tweet Me</a>
      </div>
    </div>
    
  )
}