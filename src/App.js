import './App.css';
import React, { useState } from 'react';

const defaultBoard = [
  [
    '-','-','-'
  ],
  [
    '-','-','-'
  ],
  [
    '-','-','-'
  ]
]

const winning_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 5],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winning_combinations_maps = {}

winning_combinations.forEach(combination => {
  combination.forEach(cell => {
    if(!winning_combinations_maps[cell]){
      winning_combinations_maps[cell] = []
    }

    winning_combinations_maps[cell].push(combination)
  })
})

const checkWinner = (index, board) => {
  //Winning combination for clicked position
  const winningCombinationsForIndex = winning_combinations_maps[index];

  //To get current position value i.e x/o
  const indexValue = board[index];

  for (let i = 0; i < winningCombinationsForIndex.length; i++) {
    const combination = winningCombinationsForIndex[i];

    if(combination.every(val => board[val] === indexValue)){
      return true;
    }
  }

  return false;
}

function App() {
  const [currentBoard, setCurrentBoard] = useState(defaultBoard);
  const [currentClass, setCurrentClass] = useState('x');
  const [winner, setWinner] = useState(null);

  const handleClickCell = (columnIndex, rowIndex) => {
    setCurrentBoard(prevBoard => {
      const newBoard = [...prevBoard];

      newBoard[rowIndex][columnIndex] = currentClass;

      if(checkWinner(rowIndex * 3 + columnIndex, newBoard.flat(1))){
        setWinner(currentClass)
      }

      return newBoard
    })

    setCurrentClass(prevClass => {
      if(prevClass === 'x'){
        return 'o'
      }else{
        return 'x'
      }
    })
  }

  return (
    <div className='App'>
      {
        winner ? (
          <h1>
            Player {winner} wins!
          </h1>
        ) : (
          <>
            <div className='scoreboard'>
              <div className='player1'></div>
              <div className='player2'></div>
            </div>
            <div id='frame' className={`board ${currentClass}`}>
              {
                currentBoard.map((row, rowIndex) => (
                  row.map((cell, columnIndex) => (
                    <div
                      className={`cell ${cell} ${cell !== '-' && 'clicked'}`}
                      onClick={() => handleClickCell(columnIndex, rowIndex)}
                    />
                  ))
                ))
              }
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
