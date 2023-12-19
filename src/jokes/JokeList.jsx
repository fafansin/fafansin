import { useState, useEffect, useRef} from 'react'
import axios from 'axios';
import './JokeList.scss';

function JokeList({nJokes=10}) {
  const [ state, setState ] = useState({jokes:[]})
  const mounted = useRef();
  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;

      getJokes()
    }

  })

  async function getJokes(){
    const jokes = [];
    while(jokes.length < nJokes){
      const res = await axios.get('https://icanhazdadjoke.com/', {headers:{Accept:'application/json'}});
      jokes.push(res.data);
      console.log('Getting', jokes)
    }
    
    
    setState({...state, jokes:jokes});

  }
  return (
    <div className="JokeList">
      <h1 className="h1">Dad Jokes</h1>
      <ul>
        {state.jokes.map(joke => <li key={joke.id}>{joke.joke}</li>)}
      </ul>
    </div>
  )
}

export default JokeList