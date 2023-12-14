import React from 'react'

function Card({data}) {
  return (
    <div>
      <img src={data.image} alt="" />
    </div>
  )
}

export default Card