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
        <h2 className="nomePag pag3">Permita-se Sentir</h2>

        <h3 className='recomendacoes'>Introdução</h3>
        <p className= "textinho">
            É uma plataforma que auxilia jovens gamers a buscar auxilio para suas questões de saúde mental sem tratar como um tabu. A partir de recursos para garantir um planejamento entre deveres e lazer, além de técnicas de relaxamento e serviço de apoio psicológico, o indivíduo apresenta um cotidiano mais leve e acolhedor.
        </p>
      <form onSubmit={handleSubmit}>
        <Card
          setEmotion={setEmotion}
          setPlatform={setPlatform}
          selectedEmotion={emotion}
          selectedPlatform={platform}
          setGame = {setGame}
          selectedGame = {game}

        />
      </form>
    <div>

      <h3 className='recomendacoes'>Lista de Jogos</h3>
        <ul>
          {games.map((g) => (
            <li key={g.id}>
              {g.emotion} - {g.platform} - {g.game}
              <button className='delete' onClick={() => handleDelete(g.id)}>
                <div>
                 <img className='deleteImage' src="delete.png" alt="Delete" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;

const Card = ({ setEmotion, setPlatform, selectedEmotion, selectedPlatform, setGame,selectedGame }) => {
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

        <div>
          <h3 className="nimbus-sentimento">Nome do Jogo:</h3>
          <div className='input'>
            <input type="text" className='box' value={selectedGame} placeholder='digite o jogo' onChange={(e) => setGame(e.target.value)} />
            <button type="submit" className="botao-resultado nimbus">Adicionar Jogo</button>
          </div>
        </div>
      </div>
    </article>
  );
};