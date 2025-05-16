import { useState, useEffect } from 'react'; // import React Hooks
import api from '../services/api';
import CharacterCard from '../components/CharacterCard';

function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                // Fetch data from the '/api/characters' backend endpoint
                const response = await api.get('/characters');
                setCharacters(response.data); // Update characters state with fetched data
                setLoading(false);
            } catch (err) {
                setError(err.message); // Set error state if something goes wrong
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    // Handle loading and error states
    if (loading) {
        return <p>Loading characters...</p>;
    }

    if (error) {
        return <p>Error loading characters: {error}</p>;
    }

    return (
        <div>
            <h2>Characters</h2>
            <div className="card-grid">
                {/* Render a CharacterCard component for each character */}
                {characters.map(character => (
                    <CharacterCard key={character._id} character={character} />
                ))}
            </div>
        </div>
    );
}

export default CharactersPage;