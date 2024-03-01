// Import the CSS file for styling
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "../styles/games.css";

const Game = () => {
  const { state } = useLocation();
  const players = state && state.myProp;
  const [truth, setTruth] = useState(null);
  const [dare, setDare] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isTruthSelected, setIsTruthSelected] = useState(false);

  const handleSelectPlayer = (player) => {
    console.log("Player selected:", player);
    setSelectedPlayer(player);
    setIsTruthSelected(false);
  };

  const handleGoButtonClick = () => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    console.log("Random player selected:", randomPlayer);
    handleSelectPlayer(randomPlayer);
  };

  const getTruth = async () => {
    try {
      setLoading(true);

      let response = await axios.get("https://api.truthordarebot.xyz/api/paranoia");
      response.data.rating = "r";

      response = await axios.get("https://api.truthordarebot.xyz/api/paranoia");

      setTruth(response.data.question);
      setIsTruthSelected(true);
    } catch (error) {
      console.error("Error fetching truth:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDare = async () => {
    try {
      setLoading(true);

      let response = await axios.get("https://api.truthordarebot.xyz/api/dare");
      response.data.rating = "r";

      response = await axios.get("https://api.truthordarebot.xyz/api/dare");

      setDare(response.data.question);
      setIsTruthSelected(false);
    } catch (error) {
      console.error("Error fetching dare:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {players.map((player, index) => (
        <div
          key={index}
          onClick={() => handleSelectPlayer(player)}
          className={`player-box ${player === selectedPlayer ? 'highlight' : ''}`}
        >
          <p>{player}</p>
        </div>
      ))}
      <button onClick={handleGoButtonClick}>Go</button>

      {selectedPlayer && (
        <>
          <div className="text-box">
            <p>{loading ? "Loading..." : (isTruthSelected ? truth : dare)}</p>
          </div>

          <button onClick={getTruth} disabled={loading}>
            Get Truth
          </button>
          <button onClick={getDare} disabled={loading}>
            Get Dare
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
