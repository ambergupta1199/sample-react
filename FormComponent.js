import React, { useState } from "react";
import "./App.css";

function FormComponent({ addCard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addCard({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add a New Card</h3>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Card</button>
    </form>
  );
}

export default FormComponent;
