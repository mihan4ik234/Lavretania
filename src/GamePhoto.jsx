// GamePhoto.jsx
import React, { useState } from 'react';
import './GamePhoto.css'; // Подключаем файл стилей

const GamePhoto = ({ imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="gamePhotoContainer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="gamePhotoThumbnail" src={imageUrl} alt="Game Thumbnail" />
            {isHovered && (
                <img className="gamePhotoFull" src={imageUrl} alt="Game Full" />
            )}
        </div>
    );
}

export default GamePhoto;
