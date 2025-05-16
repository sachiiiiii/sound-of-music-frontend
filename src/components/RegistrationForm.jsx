import { useState } from 'react';
import api from '../services/api';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccessMessage('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await api.post('/auth/register', { username, password });
            setSuccessMessage(response.data.message || 'Registration successful');
            // Redirect to login page
            navigate('/auth/login');
        } catch (err) {
            console.error('Error registering:', err);
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;