function LocationCard({ location }) {
    return (
        <div className="card">
            <h3>{location.name}</h3>
            <p>City: {location.city}</p>
            <p>Country: {location.country}</p>
            <p>Description: {location.description}</p>
        </div>
    );
}

export default LocationCard;