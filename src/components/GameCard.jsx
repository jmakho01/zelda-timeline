function GameCard({ title, description, image }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src = {image}></img>
    </div>
  );
}

export default GameCard;