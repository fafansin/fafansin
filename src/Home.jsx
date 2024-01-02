import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className="Home">
        <h1>This is HOME</h1>
        <Outlet />
      </div>
    )
  }
}

export default Home;