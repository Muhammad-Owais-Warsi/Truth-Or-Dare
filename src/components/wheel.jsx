import React, { useState } from 'react';
import '../styles/RouletteWheel.css'; // Import the CSS file for styling

export default function RouletteWheel({ players }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="roulette-container">
      

      <button onClick={() => handleSelectPlayer(players[Math.floor(Math.random() * players.length)])}>Go</button>
    </div>
  );
}
