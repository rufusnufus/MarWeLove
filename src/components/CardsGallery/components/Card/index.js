import './index.css';

function Card({ data }) {
  return (
    <div className="card">
      <div className="card__image" style={{'background-image': `url(${data.imageUrl})`}}></div>
      <div className="card__caption">
        {data.caption}
      </div>
    </div>
  );
}

export default Card;