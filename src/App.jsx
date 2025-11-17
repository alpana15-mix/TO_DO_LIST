// The App component is the main parent component of our project.
// It will hold all the main state (todos) and the main functions.
// This is required because keeping the central state in the top-level component
// makes the entire app easier to manage and avoids confusion.

import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {
  // We store all tasks (todos) inside this state.
  // Each todo will have: id, text, and completed values.
  const [todos, setTodos] = useState([]);

  // This function adds a new todo to the list.
  // It is called from Header when the user types something and presses Add.
  const addTodo = (text) => {
    if (!text.trim()) return; // ignore empty values

    // Each new todo gets a unique id using Date.now()
    const newTodo = { id: Date.now(), text, completed: false };

    // We update the state by adding the new todo to the top of the list
    setTodos((prev) => [newTodo, ...prev]);
  };

  // This function switches the completed value (true/false) of a todo.
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // This function removes a todo from the list based on its id.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // This function updates the text of a todo.
  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return (
    <div className="app-container">
      {/* Header contains the input box where users type new tasks */}
      <Header onAdd={addTodo} />

      {/* ToDoList displays all todos and handles edit/delete/toggle actions */}
      <ToDoList
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;