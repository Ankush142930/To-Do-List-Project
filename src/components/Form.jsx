/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import { MdAddCircleOutline } from 'react-icons/md';

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const currState = e.target.todo.value;
    const newTodo = { id: nanoid(), title: currState, isCompleted: false };
    setTodos((prevState) => [...prevState, newTodo]);

    e.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="What do you wanna accomplish today?"
        />
      </label>
      <button className="btn-default">
        <MdAddCircleOutline size={40} color="#b029ff" />
      </button>
    </form>
  );
};
export default Form;
