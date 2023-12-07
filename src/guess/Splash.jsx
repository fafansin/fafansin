import React from 'react'

function Splash({total}) {
  return (
    <div>
      <h1>{`Congratulations! you guessed the number in ${total} attempts!`}</h1>
    </div>
  )
}

export default Splash