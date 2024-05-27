"use client";

import { useState, useEffect } from 'react';

const Page = () => {
  const [emotion, setEmotion] = useState('');
  const [platform, setPlatform] = useState('');
  const [game, setGame] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:3001/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = { emotion, platform, game };

    try {
      const response = await fetch('http://localhost:3001/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });
      const data = await response.json();
      setGames([...games, data]);
    } catch (error) {
      console.error('Error adding game:', error);
    }

    setEmotion('');
    setPlatform('');
    setGame('');
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/games/${id}`, {
        method: 'DELETE',
      });
      setGames(games.filter((game) => game.id !== id));
    } catch (error) {
      console.error('Error deleting game:', error);
    }
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
          {games.map((g) => (
            <li key={g.id}>
              {g.emotion} - {g.platform} - {g.game}
              <button type="button" onClick={() => handleDelete(g.id)}>
                <img src="https://super.so/icon/dark/trash-2.svg" alt="Delete" height={10} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
