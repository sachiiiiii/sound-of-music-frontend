import { useState, useEffect } from 'react'; // import React Hooks
import api from '../services/api';
import SongCard from '../components/SongCard';

function SongsPage() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                // Fetch data from the '/api/locations' backend endpoint
                const response = await api.get('/songs');
                setSongs(response.data); // Update songs state with fetched data
                setLoading(false);
            } catch (err) {
                setError(err.message); // Set error state if something goes wrong
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    // Handle loading and error states
    if (loading) {
        return <p>Loading songs...</p>;
    }

    if (error) {
        return <p>Error loading songs: {error}</p>;
    }

    return (
        <div>
            <h2>Songs</h2>
            <div className="card-grid">
                {songs.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    );
}

export default SongsPage;