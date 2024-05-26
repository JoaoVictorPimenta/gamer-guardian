
import { useState } from 'react';
import emotionMappings from '../emotionMappings';

const getGames = () => {
    const [emotion, setEmotion] = useState('');
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [games, setGames] = useState([]);

    const handleSearch = async () => {
        const tags = emotionMappings[emotion] || [];
        const tagString = tags.join(',');
        const platformString = platform.toLowerCase(); // RAWG expects lowercase platform names
        const genreString = genre.toLowerCase();

        // const url = `https://api.rawg.io/api/games?tags=${tagString}&platforms=${platformString}&genres=${genreString}&key=d33aba0e05d8406baa8c97de778e2c50`;

        const API_URL = `https://api.rawg.io/api/games`
        let params = {'platforms':"7",'key': "d33aba0e05d8406baa8c97de778e2c50"}

        try {
            const response = await fetch(API_URL, params= params);
            const data = await response.json();
            setGames(data); // Show only 5 games
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Find Games Based on Your Mood</h1>
            <div>
                <h2>Select Emotion</h2>
                {["Very Happy", "Happy", "Normal", "Sad", "Very Sad"].map(em => (
                    <button key={em} onClick={() => setEmotion(em)}>{em}</button>
                ))}
            </div>

            <div>
                <h2>Select Platform</h2>
                {["PlayStation", "PC", "Switch", "Xbox"].map(plat => (
                    <button key={plat} onClick={() => setPlatform(plat)}>{plat}</button>
                ))}
            </div>

            <div>
                <h2>Select Genre</h2>
                {["Action", "Adventure", "Puzzle", "Strategy", "RPG"].map(gen => (
                    <button key={gen} onClick={() => setGenre(gen)}>{gen}</button>
                ))}
            </div>

            <button onClick={handleSearch}>Search</button>

            <div>
                <h2>Games</h2>
                {games.length === 0 && <p>No games found. Please try different criteria.</p>}
                <ul>
                    {games.map(game => (
                        <li key={game.id}>
                            <h3>{game.name}</h3>
                            <p>{game.description_raw}</p>
                            {game.background_image && <img src={game.background_image} alt={game.name} />}
                            <p>Platforms: {game.platforms.map(p => p.platform.name).join(', ')}</p>
                            <p>Genre: {game.genres.map(g => g.name).join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default getGames;
