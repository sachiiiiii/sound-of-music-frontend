function SongCard({ song }) {
    return (
        <div className="card">
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
            <p>Duration: {song.duration}</p>
            <p>Mood: {song.mood}</p>
            <p>Year: {song.year}</p>
        </div>
    );
}

export default SongCard;