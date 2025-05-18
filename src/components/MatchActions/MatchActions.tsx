import "./MatchActions.scss";
import { FiX, FiRotateCw } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

export default function MatchActions() {
  return (
    <div className="match__butons">
      <div className="match-actions">
        <button
          type="submit"
          name="action"
          value="dislike"
          className="match-actions__btn match-actions__btn--no"
        >
          <FiX size={48} color="#FF5A5F" />
        </button>
        <button
          type="submit"
          name="action"
          value="refresh"
          className="match-actions__btn match-actions__btn--refresh"
        >
          <FiRotateCw size={48} color="#222" />
        </button>
        <button
          type="submit"
          name="action"
          value="like"
          className="match-actions__btn match-actions__btn--yes"
        >
          <AiFillHeart size={48} color="#00bcd4" />
        </button>
      </div>
    </div>
  );
}