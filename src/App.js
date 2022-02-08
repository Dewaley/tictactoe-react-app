import './App.css';

function App() {
  const xClass = 'x';
  const oClass = 'o';
  var oTurn;
  const cells = document.querySelectorAll('.cell');
  const board = document.getElementsByClassName('board');

  const handleClick = (e) => {
    const cell = e.target;
    const currentClass = oTurn ? oClass : xClass;
console.log(board.classList.add("boy"))
    if (!cell.classList.contains('clicked')) {
      cell.classList.add('clicked');
      const placeMark = (e) => {
        cell.classList.add(currentClass);
      };
      placeMark();
      const swapTurns = (e) => {
        oTurn = !oTurn;
      };
      swapTurns();
      // const setBoardHoverClass = () => {
        
      //   // board.classList.remove(xClass);
      //   // board.classList.remove(oClass);
      //   // if (oTurn) {
      //   //   board.classList.add(oClass);
      //   // } else {
      //   //   board.classList.add(xClass);
      //   // }
      // };
      // setBoardHoverClass();
    }
  };

  for (let index = 0; index <= cells; index++) {
    handleClick();
  }

  return (
    <div className='App'>
      <div className='scoreboard'>
        <div className='player1'></div>
        <div className='player2'></div>
      </div>
      <div className='board'>
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
