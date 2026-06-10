import logo from './logo.svg';
import './App.css';

import React from "react";

function App() {
  
  const myName = "Іван";


  const imageUrl =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
  const imageAlt = "Гірський пейзаж";


  const favoriteSite = {
    siteName: "Google",
    url: "https://www.google.com/",
  };

  const num1 = 15;
  const num2 = 25;
  const sum = num1 + num2;

  // Масив кольорів
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>{myName}</h1>

      <p>Ласкаво просимо до нашого сайту!</p>

      <img
        src={imageUrl}
        alt={imageAlt}
        width="400"
      />

      <p>
        Улюблений сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">
          {favoriteSite.siteName}
        </a>
      </p>

      <p>Сума чисел {num1} і {num2} дорівнює {sum}</p>

      <h2>Список кольорів:</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

