import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDiceOne, 
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
 } from '@fortawesome/free-solid-svg-icons';

import './Die.scss';

function Die({face, rolling}) {
  const faces = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
  return (
    
      <FontAwesomeIcon icon={faces[face]} className={`Die text-primary ${rolling && 'rolling'}` }/>
    
  )
}

export default Die