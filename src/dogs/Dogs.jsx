import React from 'react';
import dogsData from './data.js';
import DogItem from './DogItem';
import './Dogs.scss';

function Dogs() {
  return (
    <div className="Dogs container text-center">
      <h1 className="h1">Click a Dog!</h1>
      <div className="list">
        {dogsData.map(dog => (<DogItem data={dog}/>))}
      </div>
    </div>
  )
}

export default Dogs