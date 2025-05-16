import { useState, useEffect } from 'react'; // import React Hooks
import api from '../services/api';
import LocationCard from '../components/LocationCard';

function LocationsPage() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                // Fetch data from the '/api/locations' backend endpoint
                const response = await api.get('/locations');
                setLocations(response.data); // Update locations state with fetched data
                setLoading(false);
            } catch (err) {
                console.error('Error fetching locations:', err);
                setError(err.response?.data?.message || 'Failed to load locations'); // Set error state if something goes wrong
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    // Handle loading and error states
    if (loading) {
        return <p>Loading locations...</p>;
    }

    if (error) {
        return <p>Error loading locations: {error}</p>;
    }

    return (
        <div>
            <h2>Locations</h2>
            <div className="card-grid">
                {/* Render a LocationCard componenet for each location */}
                {locations.map(location => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </div>
        </div>
    );
}

export default LocationsPage;