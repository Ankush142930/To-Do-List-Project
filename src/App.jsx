/* eslint-disable no-unused-vars */

import './style/style.css';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TODOHero from './components/TODOHero';
import TODOList from './components/TODOList';
import { nanoid } from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;

  const todos_total = todos.length;

  return (
    <div>
      <Header />
      <div className="main-container">
        <TODOHero todos_completed={todos_completed} todos_total={todos_total} />
        <Form setTodos={setTodos} />
        <TODOList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};
export default App;
