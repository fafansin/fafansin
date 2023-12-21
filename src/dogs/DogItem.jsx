import React from 'react';
import { Link } from 'react-router-dom';
import './DogItem.scss';

function DogItem({data}) {
  return (
    <div className="DogItem">
      <Link to={data.name}>
        <img className="" src={`${process.env.PUBLIC_URL}${data.src}`} alt={data.name} />
      </Link>
      <p>{data.name}</p>
    </div>
  )
}

export default DogItem