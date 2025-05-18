import "./GroupCard.scss";

export default function GroupCard({ image, title, location, date, users }) {
  return (
    <div className="group-card">
      <img src={image} alt={title} className="group-card__img" />
      <div className="group-card__info">
        <h3>{title}</h3>
        <p>{location}</p>
        <div className="group-card__meta">
          <span>{date}</span>
          <span className="group-card__users">{users}</span>
        </div>
      </div>
    </div>
  );
}