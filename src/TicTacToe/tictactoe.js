import React, { useState } from 'react';
import '../../src/TicTacToe/tictactoe.css';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

const Game = () => {
  const [state, setState] = useState(initialState);

  const handleClick = (i) => {
    const squares = state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      squares: squares,
      xIsNext: !state.xIsNext,
      winner: calculateWinner(squares),
    });
  };

  const resetGame = () => {
    setState(initialState);
  };

  const winner = state.winner;
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={state.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

const tictactoe = () => (
  <div className="app">
    <h1>Tic Tac Toe</h1>
    <Game />
  </div>
);

export default tictactoe;
