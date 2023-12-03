import { useState, useEffect, useRef } from 'react';
import list from './list.js';
import './Quotes.scss';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

export default function Quote(){
  
  const radii = [
    "59% 41% 53% 47% / 39% 80% 20% 61%",
    "35% 65% 56% 44% / 20% 37% 63% 80%",
    "39% 61% 30% 70% / 51% 33% 67% 49%",
    "39% 61% 52% 48% / 51% 37% 63% 49%",
    "28% 72% 41% 59% / 60% 48% 52% 40%",
    "72% 28% 58% 42% / 53% 12% 88% 47%",
    "6% 94% 9% 91% / 53% 12% 88% 47%"
  ]

  const [ indexer, setIndexer ] = useState(0);
  const [ color, setColor ] = useState('#ffffff');
  const [ bgColor, setBgColor ] = useState('#ffffff');
  const [ radius, setRadius ] = useState(radii[0]);
  const mounted = useRef();
  

  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
      // console.log(`rgb(${getRandomColor()})`);
      getRandom();
    }
  });

  function getRandom(){
    setIndexer(Math.floor(Math.random() * list.length));
    const rand = getRandomColor();
    // console.log(`rgb(${rand})`);
    setColor(`rgb(${rand})`);
    setBgColor(`rgba(${rand}, 0.25)`);
    const num  = Math.floor(Math.random()*radii.length);
    console.log(num);
    setRadius(radii[num]);
  }
  function getRandomColor(){
    const rands = [];
    for(let i=0; i < 3; i++){
      rands.push(Math.floor(Math.random()*150));
    }
    return `${rands.join(',')}`;
  }
  return(
    <div className="quotes px-1 px-md-5">
      <div className="wrap shadow" style={{borderRadius:radius}}>
        <div id="quote-box" className="jumbotron" style={{color:color, backgroundColor:bgColor, borderColor:color, borderRadius:radius}}>
          <blockquote>
            <h1 className="display-6" id="text">
              {`" ${list[indexer].quote} "`}
            </h1>
            <footer id="author" className="lead">{`~ ${list[indexer].author}`}</footer>
          </blockquote>
        </div>
      </div>
      <div className="wrap-button d-flex justify-content-between">
        <div className="d-flex gap-2">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${list[indexer].quote} ${list[indexer].author}`} 
            target="_blank" 
            rel="noreferrer" 
            id="tweet-quote" 
            style={{backgroundColor:color, border:"none"}}
            className="btn btn-primary btn-small">
              <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href={`https://www.tumblr.com`} 
            target="_blank" 
            rel="noreferrer" 
            id="tweet-quote" 
            style={{backgroundColor:color, border:"none"}}
            className="btn btn-primary btn-small">
              <FontAwesomeIcon icon={faTumblr} />
          </a>
        </div>
        <Button 
          id="new-quote" 
          size="sm" 
          style={{backgroundColor:color, border:"none"}}
          onClick={getRandom}>Get Quote <FontAwesomeIcon icon={faShuffle} /></Button>
      </div>
    </div>
  )
}