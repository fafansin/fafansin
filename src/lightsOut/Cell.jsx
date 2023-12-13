import React from 'react';
import './Cell.scss';

function Cell({isLit=false, pos, lightSwitch}) {
  function handleClick(){
    lightSwitch(pos)
  }
  return (
    <td onClick={handleClick} className={`Cell border ${isLit ? 'bg-success' : 'bg-secondary' }`}></td>
  )
}

export default Cell