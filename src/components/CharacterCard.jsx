function CharacterCard({ character }) {
  return (
    <div className="card">
      <h3>{character.name}</h3>
      <p>Role: {character.role}</p>
      <p>Family: {character.family}</p>
    </div>
  );
}

export default CharacterCard;