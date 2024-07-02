/* eslint-disable react/prop-types */
import TODOItem from './TODOItem';

const TODOList = ({ todos, setTodos }) => {
  return (
    <section className="task-container">
      <ol className="todo-list-container">
        {todos && todos.length > 0 ? (
          todos?.map((todo) => (
            <TODOItem
              key={todo.id}
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          ))
        ) : (
          <p>It seems somewhat alone here, what are you doing?</p>
        )}
      </ol>
    </section>
  );
};
export default TODOList;
