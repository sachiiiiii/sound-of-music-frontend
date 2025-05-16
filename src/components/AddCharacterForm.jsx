import { useState } from 'react';
import api from '../services/api';

function AddCharacterForm({ onClose, onCharacterAdded }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [family, setFamily] = useState('');
    const [error, setError] = useState('');

    /* Form Submit Event Handler */
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await api.post('/characters', { name, role, family }); // make a request to '/api/characters/'
            onCharacterAdded(response.data); // if character addition is successful, call onCharacterAdded prop
            // Then close the form
            setName('');
            setRole('');
            setFamily('');
        } catch (err) {
            console.error('Error adding character:', err);
            setError(err.response?.data?.message || 'Failed to add character');
        }
    };

    return (
        <div className="modal">
            <h3>Add New Character</h3>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="family">Family:</label>
                    <input
                        type="text"
                        id="family"
                        value={family}
                        onChange={(e) => setFamily(e.target.value)}
                    />
                </div>
                <button type="submit">Add Character</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddCharacterForm;