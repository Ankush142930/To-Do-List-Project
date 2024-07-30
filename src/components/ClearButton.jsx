import { useState } from 'react';
import '../style/style.css';

const ClearButton = ({ todos, setTodos }) => {
  const clearList = () => {
    setTodos([])
  };

  return (
    <button className="clear" onClick={clearList}>Clear All</button>
  );
};

export default ClearButton;