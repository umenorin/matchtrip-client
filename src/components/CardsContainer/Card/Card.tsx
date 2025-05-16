import { FC } from "react";
import "./Card.scss";
import { FaUserFriends } from "react-icons/fa";

interface CardProps {
  imageSrc: string;
  title: string;
  location: string;
  date: string;
  status: string;
}

const Card: FC<CardProps> = ({ imageSrc, title, location, date, status }) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imageSrc} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__location">{location}</p>
        <p className="card__date">{date}</p>
        <div className="card__status">
          <FaUserFriends className="card__people-icon" />
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
