import React from 'react'

function ColorBox({color, name}) {
  return (
    <div className="ColorBox" style={{backgroundColor:color, width:"100px", height:"100px"}}>
      <span>{name}</span>
      <span>MORE</span>
    </div>
  )
}

export default ColorBox