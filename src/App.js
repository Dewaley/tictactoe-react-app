import './App.css';

function App() {
  const xClass = 'x';
  const oClass = 'o';
  var oTurn;
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
  });

  const handleClick = (e) => {
    const cell = e.target;
    const currentClass = oTurn ? oClass : xClass;
    play(cell, currentClass);
    console.log(currentClass)
  };
  function play(cell, currentClass) {
    cell.classlist.add(currentClass);
  };
  return (
    <div className='App'>
      <div className='scoreboard'>
        <div className='player1'></div>
        <div className='player2'></div>
      </div>
      <div className='board x'>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
        <div className='cell'></div>
      </div>
    </div>
  );
}

export default App;
