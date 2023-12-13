import { useState} from 'react';
import Cell from './Cell';
import { Table } from 'react-bootstrap';
import './Board.scss';


function Board({nRows=5, nCols=5, chances=0.25}) {
  const [ state, setState ] = useState({hasWon:false, board:createBoard()})

  function createBoard(){
    let board = [];
    for(let y = 0; y < nRows; y++){
      const row = [];
      for(let x=0; x < nCols; x++){
        row.push(Math.random() < chances);
      }
      board.push(row);
    }
    return board;
  }

  function lightSwitch(coord){
    let [y, x] = coord.split("-").map(Number);
    let board = state.board;
    
    function flipCell(y, x){
        if(x >= 0 && x < nCols && y >= 0 && y < nRows){
            board[y][x] = !board[y][x];
        }
    }
    flipCell(y, x);
    flipCell(y, x-1);
    flipCell(y, x+1);
    flipCell(y-1, x);
    flipCell(y+1, x);

    let hasWon = board.every(row => row.every(cell => !cell));
    setState({board:board, hasWon:hasWon});
    
  }
  

  function generateBoard(){
    if(state.hasWon){
      return (<h1>You Won!</h1>);
    }
    let tblBoard = [];

    for(let y=0; y < nRows; y++){
      let row = [];
      for(let x=0; x < nCols; x++){
          let coord = `${y}-${x}`;
          row.push(<Cell 
              key={coord} 
              pos={coord} 
              isLit={state.board[y][x]} 
              lightSwitch={lightSwitch}/>)
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return tblBoard;
  }

  return (
    <div className="Board">
      <h1 className="h1 text-center">Lights Out</h1>
      <Table bordered className="shadow">
        <tbody>
          { generateBoard() }
        </tbody>
      </Table>
    </div>
  )
}

export default Board