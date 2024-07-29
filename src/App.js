import React, { useState } from 'react';
import Board from './Board';
import './index.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  const handleClick = (i) => {
    const newBoard = board.slice();
    if (calculateWinner(board) || board[i]) {
      return;
    }
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      if (winner === 'X') {
        setXWins(xWins + 1);
      } else {
        setOWins(oWins + 1);
      }
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
      }, 2000); // Reset the board after 2 seconds
    }
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

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-4xl font-bold mb-4">Tic Tac Toe</div>
      <div className="mb-4">{status}</div>
      <Board squares={board} onClick={(i) => handleClick(i)} />
      <div className="mt-4">
        <div className="text-lg">Score</div>
        <div>X: {xWins}</div>
        <div>O: {oWins}</div>
      </div>
    </div>
  );
};

export default App;
