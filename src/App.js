import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentClass, setCurrentClass] = useState('x');
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
  const handleClick = (e) => {
    const cell = e.target;
    if (!cell.classList.contains('clicked')) {
      cell.classList.add('clicked');
      const placeMark = (e) => {
        cell.classList.add(currentClass);
        const swapTurns = () => {
          if (currentClass === 'x') {
            setCurrentClass('o');
          } else if (currentClass === 'o') {
            setCurrentClass('x');
          }
        };
        swapTurns();
      };
      placeMark();
    }
  };
  return (
    <div className='App'>
      <div className='scoreboard'>
        <div className='player1'></div>
        <div className='player2'></div>
      </div>
      <div id='frame' className={`board ${currentClass}`}>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
        <div className='cell' onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default App;
