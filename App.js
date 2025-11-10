import React, { useState } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (data) => {
    setCards([...cards, data]);
  };

  return (
    <div className="app">
      <h1 className="main-heading">🌟 My React Frontend Website</h1>
      <p className="subtitle">A simple demo using React and CSS</p>

      <FormComponent addCard={addCard} />

      <h2 className="section-heading">Your Cards</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
