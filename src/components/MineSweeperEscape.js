import React, { useState, useEffect, useCallback } from 'react'; 
import './MineSweeperEscape.css';

const MineSweeperEscape = () => {
  const gridSize = 10;
  const minePercentage = 0.2;
  const initialLives = 3;

  const [grid, setGrid] = useState([]);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [exitPosition, setExitPosition] = useState({ x: 0, y: 0 });
  const [mines, setMines] = useState([]);
  const [lives, setLives] = useState(initialLives);
  const [timer, setTimer] = useState(0);
  const [gameState, setGameState] = useState('idle'); // idle, playing, gameOver
  const [scores, setScores] = useState([]);
  const [highestScore, setHighestScore] = useState(
    parseInt(localStorage.getItem('highestScore')) || 0
  );


  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setTimer(0);
    setLives(initialLives);
    setScores([]);
  
    // Random starting position and exit position
    const randomPosition = () => ({
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    });
  
    let startPosition = randomPosition();
    let endPosition = randomPosition();
  
    // Ensure starting and ending positions are not the same
    while (
      startPosition.x === endPosition.x &&
      startPosition.y === endPosition.y
    ) {
      endPosition = randomPosition();
    }
  
    setPlayerPosition(startPosition);
    setExitPosition(endPosition);
  
    // Random mines
    const mineCount = Math.floor(gridSize * gridSize * minePercentage);
    let newMines = [];
  
    for (let i = 0; i < mineCount; i++) {
      let minePosition = randomPosition();
  
      // Ensure mine is not on starting position or exit position
      while (
        (minePosition.x === startPosition.x &&
          minePosition.y === startPosition.y) ||
        (minePosition.x === endPosition.x && minePosition.y === endPosition.y)
      ) {
        minePosition = randomPosition();
      }
  
      newMines.push(minePosition);
    }
  
    setMines(newMines);
  };

  const saveScore = (score) => {
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    savedScores.push(score);
    savedScores.sort((a, b) => a - b);
    if (savedScores.length > 5) {
      savedScores.pop();
    }
    localStorage.setItem('scores', JSON.stringify(savedScores));
  };

  const movePlayer = (direction) => {
    let newX = playerPosition.x;
    let newY = playerPosition.y;
  
    switch (direction) {
      case 'up':
        newY = Math.max(0, newY - 1);
        break;
      case 'down':
        newY = Math.min(gridSize - 1, newY + 1);
        break;
      case 'left':
        newX = Math.max(0, newX - 1);
        break;
      case 'right':
        newX = Math.min(gridSize - 1, newX + 1);
        break;
      default:
        return; // Return early if the direction is invalid
    }
  
    const newPosition = { x: newX, y: newY };
  
    // Check for mine collision
    const mineCollision = mines.some(
      (mine) => mine.x === newPosition.x && mine.y === newPosition.y
    );
  
    if (mineCollision) {
      setLives((prevLives) => {
        const updatedLives = prevLives - 1;
        if (updatedLives <= 0) {
          setGameState('gameOver');
          // Save score and display game over screen
        }
        return updatedLives;
      });
    }
  
    // Check for exit collision
    if (newPosition.x === exitPosition.x && newPosition.y === exitPosition.y) {
      setGameState('gameOver');
      // Save score and display victory screen
    }
  
    // Update the player position if there is no collision
    setPlayerPosition(newPosition);
  };


  if (gameState === 'gameOver') {
    saveScore(timer);
  }

  
  

  const handleKeyPress = (event) => {
    if (gameState !== 'playing') return;
  
    switch (event.key) {
      case 'w':
        movePlayer('up');
        break;
      case 'a':
        movePlayer('left');
        break;
      case 's':
        movePlayer('down');
        break;
      case 'd':
        movePlayer('right');
        break;
      default:
        break;
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, handleKeyPress]);

  const renderCellContent = (x, y) => {
    if (playerPosition.x === x && playerPosition.y === y) {
      return '@';
    }
    if (exitPosition.x === x && exitPosition.y === y) {
      return 'E';
    }
    return '.';
  };

  const renderHealthBar = () => {
    return Array(lives)
      .fill('♥')
      .join(' ');
  };


  const renderGrid = () => {
    const gridContent = [];
  
    for (let y = 0; y < gridSize; y++) {
      const row = [];
      for (let x = 0; x < gridSize; x++) {
        row.push(
          <div key={`${x}-${y}`} className="grid-cell">
            {renderCellContent(x, y)}
          </div>
        );
      }
      gridContent.push(<div key={y} className="grid-row">{row}</div>);
    }
  
    return gridContent;
  };
  


  const renderTopScores = () => {
    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];
    return (
      <ol>
        {savedScores.map((score, index) => (
          <li key={index}>{score}s</li>
        ))}
      </ol>
    );
  };

  const renderGameScreen = () => {
    if (gameState === 'idle' || gameState === 'playing') {
      return (
        <>
          {gameState === 'idle' && (
            <button onClick={startGame}>Start Game</button>
          )}
          <div className="grid-container">{renderGrid()}</div>
        </>
      );
    } else if (gameState === 'gameOver') {
      if (lives === 0) {
        return (
          <>
            <h2>Defeat!</h2>
            <p>Your score: {timer}s</p>
            
            <h3>Top 5 Scores:</h3>
            {renderTopScores()}
            <button onClick={startGame}>Try Again</button>
          </>
        );
      } else {
        const newHighestScore = timer < highestScore || highestScore === 0 ? timer : highestScore;
        if (timer < highestScore || highestScore === 0) {
          localStorage.setItem('highestScore', timer);
        }
        
        return (
          <>
            <h2>Victory!</h2>
            <p>Your score: {timer}s</p>
            <p>Highest score: {newHighestScore}s</p>

            <h3>Top 5 Scores:</h3>
            {renderTopScores()}
            <button onClick={startGame}>Play Again</button>
          </>
        );
      }
    }
  };

  return (
    <div className="minesweeper-escape">
      <h1>MineSweeper Escape</h1>
      <p>
        Instructions: Use WASD keys to move the player (@) through the grid to
        reach the exit (E). Beware of hidden mines! You have 3 lives.
      </p>
      <div className="game-info-row">
        <div> Timer: {timer}s </div>
      </div>
      <div className="game-info-row">
        <div> Lives: {renderHealthBar()} </div>
      </div>
      {renderGameScreen()}
   
    </div>
  );
};


export default MineSweeperEscape;