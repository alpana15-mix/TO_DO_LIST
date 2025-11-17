// This Header component contains an input box and an Add button.
// The user types a new task here and submits the form.

import { useState } from "react";

export default function Header({ onAdd }) {
  // We use local state to control what the user types in the input field.
  const [text, setText] = useState("");

  // This function runs when the form is submitted.
  // It prevents the page from refreshing and calls the onAdd function from App.jsx.
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText(""); // clear the input box after adding
  };

  return (
    <header className="header">
      <h1>My To-Do App</h1>

      {/* Form lets the user submit tasks using Enter key or Add button */}
      <form onSubmit={handleSubmit}>
        {/* Input field controlled by local state */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />

        {/* Clicking this button will trigger handleSubmit */}
        <button type="submit">Add</button>
      </form>
    </header>
  );
}
