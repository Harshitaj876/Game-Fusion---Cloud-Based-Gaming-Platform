import React, { useState, useEffect } from 'react';
import './TetrisGame.css';

const TetrisGame = () => {
  const ROWS = 20;
  const COLS = 10;
  const EMPTY_CELL = 0;
  const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: { shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], color: '80, 227, 230' },
    J: { shape: [[0, 1, 0], [0, 1, 0], [1, 1, 0]], color: '36, 95, 223' },
    L: { shape: [[0, 1, 0], [0, 1, 0], [0, 1, 1]], color: '223, 173, 36' },
    O: { shape: [[1, 1], [1, 1]], color: '223, 217, 36' },
    S: { shape: [[0, 1, 1], [1, 1, 0], [0, 0, 0]], color: '48, 211, 56' },
    T: { shape: [[0, 0, 0], [1, 1, 1], [0, 1, 0]], color: '132, 61, 198' },
    Z: { shape: [[1, 1, 0], [0, 1, 1], [0, 0, 0]], color: '227, 78, 78' },
  };

  const [board, setBoard] = useState(Array.from(Array(ROWS), () => new Array(COLS).fill(EMPTY_CELL)));
  const [tetromino, setTetromino] = useState({ shape: [], color: '' });

  // Custom hook for generating a random Tetromino
  const useTetromino = () => {
    const [tetromino, setTetromino] = useState({ shape: [], color: '' });

    const randomTetromino = () => {
      const tetrominoKeys = Object.keys(TETROMINOS);
      const randomKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
      return TETROMINOS[randomKey];
    };

    useEffect(() => {
      setTetromino(randomTetromino());
    }, []);

    return tetromino;
  };

  const isValidPosition = (shape, offset) => {
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== EMPTY_CELL) {
          const newY = y + offset.y;
          const newX = x + offset.x;
          if (newY < 0 || newX < 0 || newY >= ROWS || newX >= COLS || board[newY][newX] !== EMPTY_CELL) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const moveTetromino = (offset) => {
    if (isValidPosition(tetromino.shape, { x: offset, y: 0 })) {
      const newBoard = board.map((row) => [...row]);
      for (let y = 0; y < tetromino.shape.length; y++) {
        for (let x = 0; x < tetromino.shape[y].length; x++) {
          if (tetromino.shape[y][x] !== EMPTY_CELL) {
            newBoard[y][x + offset] = 1;
          }
        }
      }
      setBoard(newBoard);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveTetromino(1); // Move Tetromino down every second
    }, 1000);
    return () => clearInterval(interval);
  }, [board, tetromino]);

  return (
    <div className="tetris">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              style={{ backgroundColor: cell === EMPTY_CELL ? '#fff' : `rgb(${tetromino.color})` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TetrisGame;
