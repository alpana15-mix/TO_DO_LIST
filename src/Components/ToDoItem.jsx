// This component displays a single todo item.
// It also handles editing, deleting, and marking the task as completed.

import { useState } from "react";

export default function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  // This state decides whether the item is in editing mode or normal view mode.
  const [isEditing, setIsEditing] = useState(false);

  // We keep a separate copy of the text while editing.
  const [editText, setEditText] = useState(todo.text);

  // This function saves the updated text and exits editing mode.
  const save = () => {
    if (editText.trim()) {
      onEdit(editText); // send new text to App.jsx
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {/* Checkbox lets the user toggle completion (done or not done) */}
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />

      {/* If editing mode is active, show input + save/cancel buttons */}
      {isEditing ? (
        <>
          {/* Input field to edit the text */}
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          {/* Save button updates the todo text */}
          <button onClick={save}>Save</button>

          {/* Cancel button exits editing without saving */}
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {/* Normal mode: simply show the text */}
          <span>{todo.text}</span>

          {/* Button to switch into editing mode */}
          <button onClick={() => setIsEditing(true)}>Edit</button>

          {/* Button to delete this todo */}
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
}