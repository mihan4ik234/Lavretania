// Allgames.jsx
import React from "react";
import "./Allgames.css"; // Импортируем CSS-файл

const Gift = () => {
  return (
    <div className="allGamesContainer">
      {/* Добавляем класс allGamesTitle */}
      <h1 className="allGamesTitle">Все игры</h1>
      <div className="gamesGrid">
        {/* Рендерим 6 фотографий */}
        <GamePhoto imageUrl={photo1} />
        <GamePhoto imageUrl={photo2} />
        <GamePhoto imageUrl={photo3} />
        <GamePhoto imageUrl={photo4} />
        <GamePhoto imageUrl={photo5} />
        <GamePhoto imageUrl={photo6} />
      </div>
    </div>
  );
};

export default Gift;
