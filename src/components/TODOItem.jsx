/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { AiOutlineSave } from 'react-icons/ai';
import { IoCheckmarkDone } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';

const TODOItem = ({ todos, todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);
  const inputRef = useRef(null);

  //Marking completed Function
  const handleComplete = (e) => {
    setTodos((prevState) =>
      prevState.map((item) =>
        item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  //Edit Function
  //1.) handling the click on edit button
  const handleEdit = () => {
    setIsEditing(true);
  };

  //2.) handling the click on edit form submit button
  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTodoList();
    setIsEditing(false);
  };

  //3.) handling the mouse click on outside the edit form
  const handleOutsideMouseClick = () => {
    setIsEditing(false);
  };

  //4.) function for focusing on input when isEditing is set true
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [isEditing]);

  //5.) handling the edit form input change
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
  };

  //6.) updating the todo list
  const updateTodoList = () => {
    setTodos(
      todos.map((item) =>
        item.id == todo.id ? { ...todo, title: currentTodo.title } : item
      )
    );
  };

  //Delete Function
  const handleDelete = () => {
    setTodos((prevState) => prevState.filter((item) => item.id !== todo.id));
  };

  return (
    <li id={todo.id} className="todo-item">
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <label htmlFor="edit-todo">
            <input
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={todo?.title}
              onChange={handleEditInputChange}
              ref={inputRef}
            />
          </label>
          <button className="btn-default">
            <AiOutlineSave size={40} color="#b029ff" />
          </button>
        </form>
      ) : (
        <>
          <div className="todo-left-side">
            <button className="btn-default" onClick={handleComplete}>
              {todo.isCompleted ? (
                <IoCheckmarkDone size={20} color="#b029ff" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank size={20} color="#b029ff" />
              )}
            </button>
            <p
              style={
                todo.isCompleted
                  ? { color: 'green', textDecoration: 'line-Through' }
                  : { color: 'red' }
              }
            >
              {todo?.title}
            </p>
          </div>

          <div className="todo-right-side">
            <button className="btn-default " onClick={handleEdit}>
              <FaRegEdit size={30} color="#b029ff" />
            </button>

            <button className="btn-default">
              <MdDeleteOutline
                size={30}
                color="#b029ff"
                onClick={handleDelete}
              />
            </button>
          </div>
        </>
      )}
    </li>
  );
};
export default TODOItem;
