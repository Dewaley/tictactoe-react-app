import './App.css';

function App() {
  const xClass = 'x';
  const oClass = 'o';
  var oTurn;
  const cells = document.querySelectorAll('.cell');

  const handleClick = (e) => {
    const cell = e.target;
    const currentClass = oTurn ? oClass : xClass;

    if (!cell.classList.contains('clicked')) {
      cell.classList.add('clicked');
    }
    const placeMark = (e) => {
      cell.classList.add(currentClass);
    };
    placeMark();
    const swapTurns = (e) => {
      oTurn = !oTurn
    }
    swapTurns()
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
      <div className='board x'>
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
