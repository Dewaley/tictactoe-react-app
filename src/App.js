import './App.css';

function App() {
  // const xClass = 'x';
  // const oClass = 'o';
  // var oTurn;
  const cells = document.querySelectorAll('.cell');
  for(let index=0; index<=cells; index++){
    handleClick()
  }

  const handleClick = (e) => {
    console.log(2)
  };
  // function play(cell, currentClass) {
  //   cell.classlist.add(currentClass);
  // };
  return (
    <div className='App'>
      <div className='scoreboard'>
        <div className='player1'></div>
        <div className='player2'></div>
      </div>
      <div className='board x'>
        <div className='cell x'></div>
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
