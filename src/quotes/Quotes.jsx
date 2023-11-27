import { useState, useEffect, useRef } from 'react';
import list from './list.js';
import './Quotes.scss';
import { Button } from 'react-bootstrap';

export default function Quote(){
  
  const [ indexer, setIndexer ] = useState(0);
  const [ color, setColor ] = useState('#ffffff');
  const mounted = useRef();

  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
      setColor(getRandomColor());
    }
  },[]);

  function getRandom(){
    setIndexer(Math.floor(Math.random() * list.length))
    setColor(getRandomColor());
  }
  function getRandomColor(){
    const rands = [];
    for(let i=0; i < 3; i++){
      rands.push(Math.floor(Math.random()*150));
    }
    return `rgb(${rands.join(',')})`;
  }
  return(
    <div className="quotes px-1 px-md-5 " style={{backgroundColor:color}}>
      <div id="quote-box" className="jumbotron border shadow rounded p-4" style={{color:color, backgroundColor:"#ffffff"}}>
        <blockquote>
          <h1 className="display-6" id="text">
            {`" ${list[indexer].quote} "`}
          </h1>
          <footer id="author" className="lead">{`~ ${list[indexer].author}`}</footer>
        </blockquote>
        <div className="d-flex justify-content-end gap-2">
          <Button 
            id="new-quote" 
            size="sm" 
            style={{backgroundColor:color, border:"none"}}
            onClick={getRandom}>New</Button>
          <a href="https://twitter.com/intent/tweet" 
            target="_blank" 
            rel="noreferrer" 
            id="tweet-quote" 
            style={{backgroundColor:color, border:"none"}}
            className="btn btn-primary btn-small">
              Twitter
          </a>
        </div>
      </div>
    </div>
  )
}