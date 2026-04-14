import './er.css'

function er({ data, subheader }) {
  return (
    <div className="er">
      <h3 id = "largetext">{data}</h3>
      <p id = "smalltext">{subheader}</p>
    </div>
  );
}

export default er;