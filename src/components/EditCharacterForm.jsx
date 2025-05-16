import { useState, useEffect } from 'react';
import api from '../services/api';

function EditCharacterForm({ character, onClose, onCharacterUpdated }) {
  const [name, setName] = useState(character.name);
  const [role, setRole] = useState(character.role);
  const [family, setFamily] = useState(character.family);
  const [error, setError] = useState('');

  useEffect(() => {
    setName(character.name);
    setRole(character.role);
    setFamily(character.family);
  }, [character]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await api.put(`/characters/${character._id}`, { name, role, family });
      onCharacterUpdated(response.data);
    } catch (err) {
      console.error('Error updating character:', err);
      setError(err.response?.data?.message || 'Failed to update character');
    }
  };

  return (
    <div className="modal">
      <h3>Edit Character</h3>
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
        <button type="submit">Update Character</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditCharacterForm;