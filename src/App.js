import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Tic Tac Toe</h1> {/* Add heading */}
      <Game />
    </div>
  );
}

export default App;
