// This component receives the "todos" array and displays each task.
// It loops through all todos using map(), which is the correct React way to render lists.

import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  // If no tasks exist, we show a simple message to the user.
  if (todos.length === 0) return <p>No tasks yet.</p>;

  return (
    <ul className="todo-list">
      {/* We loop through each todo using map() */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // unique key helps React track elements correctly
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={(text) => onEdit(todo.id, text)}
        />
      ))}
    </ul>
  );
}
export default ToDoList;