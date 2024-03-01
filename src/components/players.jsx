import React, { useState } from 'react';
import "../styles/players.css";
import { useNavigate } from 'react-router-dom';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');

  const navigate = useNavigate();

  const addPlayer = () => {
    if (newPlayer.trim() !== '') {
      setPlayers([...players, newPlayer]);
      setNewPlayer('');
    }
  };

  const submit = async () => {
    navigate("/game",{ state: { myProp: players } });
  };

  return (
    <div className="truth-dare-container">
      <h1 className="truth-dare-heading">Truth Or Dare Hub</h1>
      <input
        type="text"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
      />
      <button onClick={addPlayer}>+</button>
      
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <button onClick={submit}>Start the game</button>
    </div>
  );
};

export default PlayerList;
