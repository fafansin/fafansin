import { v4 as uuidv4 } from 'uuid';
import Box from './Box';

function Boxes({num=30}) {
  const boxes = getBoxes();
  
  function getBoxes(){
    const ref = [];
    for(let i = 0; i < num; i++){
      ref.push({id:uuidv4()});
    }
    return ref;
  }

  
  return (
    <div className="Boxes d-flex flex-wrap justify-content-center">
      {boxes.map((item) => <Box key={item.id}/>)}
    </div>
  )
}

export default Boxes