import './Game.css'

function Game({ title, description, image }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <image src = {image}></image>
    </div>
  );
}

export default Game;