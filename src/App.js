import './App.css';
import GameBoard from './GameBoard';

function App() {
  
  let resetGame = ()=>{
    window.location.reload()
  }

  return (
    <div className='main'>
      <button className='btn' onClick={resetGame}> Restart</button>
      <GameBoard />
    </div>
  )
}

export default App;
