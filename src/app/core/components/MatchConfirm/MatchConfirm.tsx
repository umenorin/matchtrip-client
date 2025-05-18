import React, { useState, FormEvent } from "react";
import "./MatchConfirm.scss";
import { FaPlaneDeparture } from "react-icons/fa";

type MatchConfirmProps = {
  onSend?: (message: string) => void;
};

export default function MatchConfirm({ onSend }: MatchConfirmProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSend) onSend(message);
    setMessage("");
  };

  return (
      <div className="match-confirm__card">
        <h2 className="match-confirm__title">Foi Um</h2>
        <div className="match-confirm__logo">
          <FaPlaneDeparture size={36} color="#0098b6" />
          <span>Match Trip</span>
        </div>
        <h3 className="match-confirm__subtitle">Envie uma Mensagem</h3>
        <form
          className="match-confirm__form"
          onSubmit={handleSubmit}
        >
          <label className="match-confirm__label" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            className="match-confirm__textarea"
            placeholder="Envie uma mensagem personalizada ..."
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className="match-confirm__button" type="submit">
            Enviar
          </button>
        </form>
      </div>
  );
}