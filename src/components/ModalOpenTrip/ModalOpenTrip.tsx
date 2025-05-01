import { useEffect } from "react";
import "./ModalOpenTrip.scss";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalOpenTrip({ children, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}