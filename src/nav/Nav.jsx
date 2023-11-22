import React from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';

class Nav extends React.Component{
  render(){
    return (
      <nav className={s.Nav}>
        <ul>
          <Link to={''}>Home</Link>
          <Link to={'quotes'}>Random Quotes</Link>
          <Link to={'markdown'}>Markdown</Link>
          <Link to={'drum'}>Drum</Link>
          <Link to={'calculator'}>Calculator</Link>
          <Link to={'clock'}>Clock</Link>
        </ul>
      </nav>
    )
  }
}

export default Nav
