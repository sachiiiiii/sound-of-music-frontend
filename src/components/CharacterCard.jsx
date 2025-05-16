function CharacterCard({ character }) {
    return (
        <div className="card">
            <h3>{character.name}</h3>
            <p><b>Role:</b> {character.role}</p>
            <p><b>Family:</b> {character.family}</p>
        </div>
    );
}

export default CharacterCard;