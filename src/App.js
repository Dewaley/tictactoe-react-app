import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentClass, setCurrentClass] = useState("x");
  const handleClick = (e) => {
    const cell = e.target;
    if (!cell.classList.contains('clicked')) {
      cell.classList.add('clicked');
      const placeMark = (e) => {
        cell.classList.add(currentClass);
        if (currentClass === "x") {
          setCurrentClass('o')
        } else if (currentClass === "o") {
          setCurrentClass("x")
        }
      };
      placeMark();
      alert(currentClass);
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
