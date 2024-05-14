// Allgames.jsx
import React from 'react';
import './Allgames.css'; // Import the CSS file
import GamePhoto from './GamePhoto'; // Import the GamePhoto component
import photo1 from './assets/photo1.png'; // Import the image file


const Allgames = () => {
  return (
    <div className="allGamesContainer">
      <h1 className="allGamesTitle">Все игры</h1>
      <div className="gamesGrid">
        {/* Render 6 photos */}
        <GamePhoto imageUrl={photo1} />
        <GamePhoto imageUrl={photo1} />
        <GamePhoto imageUrl={photo1} />
        <GamePhoto imageUrl={photo1} />
        <GamePhoto imageUrl={photo1} />
        <GamePhoto imageUrl={photo1} />
      </div>
    </div>
  );
}

export default Allgames;
