import React, { useState, useEffect } from 'react';

const ROWS = 10;
const COLS = 10;
const INITIAL_SNAKE = [
  { row: 5, col: 5 },
  { row: 5, col: 4 }
];
const INITIAL_FRUIT = { row: 2, col: 2 };
const DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [fruit, setFruit] = useState(INITIAL_FRUIT);
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveSnake = () => {
    if (!isGameOver) {
      const newSnake = [...snake];
      let newHead = { ...newSnake[0] };

      switch (direction) {
        case DIRECTIONS.UP:
          newHead.row--;
          break;
        case DIRECTIONS.DOWN:
          newHead.row++;
          break;
        case DIRECTIONS.LEFT:
          newHead.col--;
          break;
        case DIRECTIONS.RIGHT:
          newHead.col++;
          break;
        default:
          break;
      }

      if (
        newHead.row < 0 ||
        newHead.row >= ROWS ||
        newHead.col < 0 ||
        newHead.col >= COLS ||
        snake.some((segment) => segment.row === newHead.row && segment.col === newHead.col)
      ) {
        setIsGameOver(true);
        return;
      }

      newSnake.unshift(newHead);

      if (newHead.row === fruit.row && newHead.col === fruit.col) {
        generateNewFruit(newSnake);
        setScore(score + 10);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    }
  };

  const generateNewFruit = (newSnake) => {
    let newFruit;
    do {
      newFruit = {
        row: Math.floor(Math.random() * ROWS),
        col: Math.floor(Math.random() * COLS)
      };
    } while (newSnake.some((segment) => segment.row === newFruit.row && segment.col === newFruit.col));

    setFruit(newFruit);
  };

  const handleKeyPress = (event) => {
    switch (event.keyCode) {
      case 38: // UP arrow key
        setDirection(DIRECTIONS.UP);
        break;
      case 40: // DOWN arrow key
        setDirection(DIRECTIONS.DOWN);
        break;
      case 37: // LEFT arrow key
        setDirection(DIRECTIONS.LEFT);
        break;
      case 39: // RIGHT arrow key
        setDirection(DIRECTIONS.RIGHT);
        break;
      default:
        break;
    }
  };

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setFruit(INITIAL_FRUIT);
    setDirection(DIRECTIONS.RIGHT);
    setIsGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [moveSnake, handleKeyPress]);

  return (
    <div style={{ display: 'inline-block' }}>
      <table>
        <tbody>
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: COLS }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: snake.some((segment) => segment.row === rowIndex && segment.col === colIndex)
                      ? 'green'
                      : fruit.row === rowIndex && fruit.col === colIndex
                      ? 'red'
                      : 'white'
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isGameOver && <div>Game Over</div>}
      <div>Score: {score}</div>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default SnakeGame;
