import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="w-24 h-24 bg-blue-500 text-white text-2xl flex items-center justify-center border border-gray-300 hover:bg-blue-700" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;