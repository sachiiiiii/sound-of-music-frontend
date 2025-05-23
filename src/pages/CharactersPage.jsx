import { useState, useEffect } from 'react'; // import React Hooks
import api from '../services/api';
import CharacterCard from '../components/CharacterCard';
import AddCharacterForm from '../components/AddCharacterForm';
import EditCharacterForm from '../components/EditCharacterForm';
import { useNavigate } from 'react-router-dom';

function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // State for managing the add and edit forms visibilities and the field being edited
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingCharacter, setEditingCharacter] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                // Fetch data from the '/api/characters' backend endpoint
                const response = await api.get('/characters');
                setCharacters(response.data); // Update characters state with fetched data
                setLoading(false);
            } catch (err) {
                console.error('Error fetching characters:', err);
                setError(err.response?.data?.message || 'Failed to load characters'); // Set error state if something goes wrong
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    /* Button and Form Event Handlers */
    const handleAddClick = () => {
        setShowAddForm(true);
    };

    const handleCloseAddForm = () => {
        setShowAddForm(false);
    };

    const handleCharacterAdded = (newCharacter) => {
        setCharacters([...characters, newCharacter]);
        setShowAddForm(false);
    };

    const handleEditClick = (character) => {
        console.log("Editing character:", character);
        setEditingCharacter(character);
    };

    const handleCloseEditForm = () => {
        setEditingCharacter(null);
    };

    const handleCharacterUpdated = (updatedCharacter) => {
        setCharacters(characters.map(char =>
            char._id === updatedCharacter._id ? updatedCharacter : char
        ));
        setEditingCharacter(null);
    };

    // Delete a character
    const handleDeleteClick = async (id) => {
        // If user clicks OK in dialog box, 
        if (window.confirm('Are you sure you want to delete this character?')) {
            try {
                // make a DELETE request to '/api/characters/:id'
                await api.delete(`/characters/${id}`);
                // update characters state by filtering out deleted character
                setCharacters(characters.filter(char => char._id !== id));
            } catch (err) {
                console.error('Error deleting character:', err);
                setError(err.response?.data?.message || 'Failed to delete character');
            }
        }
    };

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
            <button onClick={handleAddClick}>Add New Character</button>
            {/* Logic to show or hide add character & edit character forms */}
            {showAddForm && (
                <AddCharacterForm onClose={handleCloseAddForm} onCharacterAdded={handleCharacterAdded} />
            )}
            {editingCharacter && (
                <EditCharacterForm
                    character={editingCharacter}
                    onClose={handleCloseEditForm}
                    onCharacterUpdated={handleCharacterUpdated}
                />
            )}

            <div className="card-grid">
                {/* Render a CharacterCard component for each character */}
                {characters.map(character => (
                    <div key={character._id}>
                        <CharacterCard character={character} />
                        <button onClick={() => handleEditClick(character)}>Edit</button>
                        <button onClick={() => handleDeleteClick(character._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharactersPage;