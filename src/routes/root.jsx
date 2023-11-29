import React from 'react';
import Navigation from '../nav/Navigation'
import { Outlet } from 'react-router-dom';

import './root.css';

class Root extends React.Component{
  render(){
    return(
      <> 
        <div className="navWrap">
          <Navigation />
        </div>
        <div id="content" className="d-flex flex-column align-items-center pt-3">
          <Outlet />
        </div>
      </>
    )
  }
}

export default Root;