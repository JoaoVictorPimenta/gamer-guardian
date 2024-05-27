// src/app/permita-se-sentir/page.js
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [emotion, setEmotion] = useState('');
  const [platform, setPlatform] = useState('');
  const [game, setGame] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('http://localhost:3001/games');
      setGames(response.data);
    };

    fetchGames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = { emotion, platform, game };

    const response = await axios.post('http://localhost:3001/games', newGame);

    setGames([...games, response.data]);
    setEmotion('');
    setPlatform('');
    setGame('');
  };

  return (
    <div>
      <h1>Permita-se Sentir</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Como você está se sentindo?</h2>
          {['Muito Feliz', 'Feliz', 'Normal', 'Triste', 'Muito Triste'].map((em) => (
            <button key={em} type="button" onClick={() => setEmotion(em)}>
              {em}
            </button>
          ))}
        </div>
        <div>
          <h2>Escolha a plataforma:</h2>
          {['Playstation', 'PC', 'Switch', 'Xbox'].map((plat) => (
            <button key={plat} type="button" onClick={() => setPlatform(plat)}>
              {plat}
            </button>
          ))}
        </div>
        <div>
          <h2>Nome do Jogo:</h2>
          <input type="text" value={game} onChange={(e) => setGame(e.target.value)} />
        </div>
        <button type="submit">Adicionar Jogo</button>
      </form>
      <div>
        <h2>Lista de Jogos</h2>
        <ul>
          {games.map((g, index) => (
            <li key={index}>
              {g.emotion} - {g.platform} - {g.game}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
