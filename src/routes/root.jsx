import React from 'react';
import Nav from '../nav/Nav'
import { Outlet } from 'react-router-dom';

import s from './root.module.css'

class Root extends React.Component{
  render(){
    return(
      <>
        <Nav />
        <div id="content" class={s.content}>
          <Outlet />
        </div>
      </>
    )
  }
}

export default Root;