import './GameCard.css';

function GameCard({ title, description, image, color, textColor }) {
  return (
    <div className="card" style={{ "--card-text-color": textColor }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src = {image}></img>
    </div>
  );
}

export default GameCard;