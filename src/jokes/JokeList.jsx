import { useState, useEffect, useRef} from 'react'
import axios from 'axios';
import './JokeList.scss';
import Joke from './Joke';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh, faSpinner } from '@fortawesome/free-solid-svg-icons';

function JokeList({nJokes=10}) {
  const [ state, setState ] = useState({loading:false, jokes:JSON.parse(window.localStorage.getItem('jokes') || "[]")})
  const mounted = useRef();
  const seenJokes = new Set(state.jokes.map(j => (j.joke)));

  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;
      if(!state.jokes.length){
        getJokes();
      }
    }
    window.localStorage.setItem(
      "jokes",
      JSON.stringify(state.jokes)
    )
  })
  function moreJokes(event){
    getJokes();
  }

  async function getJokes(){
    setState({...state, loading:true});
    const jokes = [];
    while(jokes.length < nJokes){
      const res = await axios.get('https://icanhazdadjoke.com/', {headers:{Accept:'application/json'}});
      // if(!jokes.find((element) => element.id === res.data.id)){
      if(!seenJokes.has(res.data.joke)){
        jokes.push({id:res.data.id, joke:res.data.joke, score:0});
      }
    }
    setState({...state, jokes:[...state.jokes, ...jokes], loading:false});
  }

  function vote(data){
    const newJokes = state.jokes.map((item) => (item.id === data.id ? {...item, score:data.score} : item)).sort((a,b) => b.score-a.score);
    setState({...state, jokes:newJokes});
  }

  return (
    <div className="JokeList">
      <div className="left-panel">
        <h1 className="h1">Dad Jokes</h1>
        <div className="face">
          <FontAwesomeIcon icon={faFaceLaugh} />
        </div>
        <Button onClick={moreJokes} variant="info">More Jokes</Button>

      </div>
      <ul className="right-panel shadow">
        {state.loading ? (<div className="spinner"><FontAwesomeIcon icon={faSpinner} spin size="2xl" /><p>Loading...</p></div>) : 
        state.jokes.map(joke => <li key={joke.id}><Joke id={joke.id} joke={joke.joke} score={joke.score} handleVote={vote}/></li>)
        }
      </ul>
    </div>
  )
}

export default JokeList