import "./MatchActions.scss";
import { FiX, FiRotateCw } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

type MatchActionsProps = {
  onLike: () => void;
};

export default function MatchActions({ onLike }: MatchActionsProps) {
  return (
    <div className="match__butons">
      <div className="match-actions">
        <button
          type="button"
          className="match-actions__btn match-actions__btn--no"
        >
          <FiX size={48} color="#FF5A5F" />
        </button>
        <button
          type="button"
          className="match-actions__btn match-actions__btn--refresh"
        >
          <FiRotateCw size={48} color="#222" />
        </button>
        <button
          type="button"
          className="match-actions__btn match-actions__btn--yes"
          onClick={onLike}
        >
          <AiFillHeart size={48} color="#00bcd4" />
        </button>
      </div>
    </div>
  );
}