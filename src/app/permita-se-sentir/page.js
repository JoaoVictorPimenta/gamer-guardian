"use client";

import { useState, useEffect } from 'react';

const Card = ({ setEmotion, setPlatform, selectedEmotion, selectedPlatform }) => {
  const handleEmotionChange = (emotion) => {
    setEmotion(emotion);
  };

  const handlePlatformChange = (platform) => {
    setPlatform(platform);
  };

  return (
    <article className="alinhaVert card">
      <div>
        <div>
          <h3 className="nimbus-sentimento">Qual seu sentimento de hoje?</h3>
          <div className="emojis">
            {['Muito Feliz', 'Feliz', 'Normal', 'Triste', 'Muito Triste'].map((emotion) => (
              <div key={emotion}>
                <input
                  type="radio"
                  id={emotion}
                  name="emoji"
                  className="emoji-input"
                  checked={selectedEmotion === emotion}
                  onChange={() => handleEmotionChange(emotion)}
                />
                <label htmlFor={emotion} className="emoji-label">
                  <img src={`${emotion.toLowerCase().replace(/ /g, '-')}.png`} alt={emotion} />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="card-content">
          <h3 className="nimbus-sentimento">Que plataforma você gostaria de jogar?</h3>
          <div className="checkboxes">
            {['Playstation', 'PC', 'Switch', 'Xbox'].map((platform) => (
              <div className="checkbox" key={platform}>
                <input
                  type="checkbox"
                  className="checkbox-round"
                  checked={selectedPlatform === platform}
                  onChange={() => handlePlatformChange(platform)}
                />
                <label>{platform}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="link-resultado">
          <a className="botao-resultado nimbus" href="/permita-se-sentir/indica-jogo">
            Ver resultados
          </a>
        </div>
      </div>
    </article>
  );
};

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
        <Card
          setEmotion={setEmotion}
          setPlatform={setPlatform}
          selectedEmotion={emotion}
          selectedPlatform={platform}
        />
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
              <button type="button" onClick={() => handleDelete(g.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
