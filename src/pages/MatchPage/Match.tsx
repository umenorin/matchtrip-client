import "./Match.scss";
import { FaHome, FaMapMarkerAlt, FaBus } from "react-icons/fa";
import { FiX, FiRotateCw } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

export default function Match() {
  return (
    <div className="match-page">
      <div className="match-page__container">
        {/* Grupos de Viagem */}
        <section className="match-page__group">
          <h2>Grupos de Viagem</h2>
          <div className="match-page__group-card">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Praia de Pipa"
              className="match-page__group-img"
            />
            <div className="match-page__group-info">
              <h3>Viagem para o Praia de Pipa</h3>
              <p>Rio Grande do Norte - Brasil</p>
              <div className="match-page__group-meta">
                <span>21 fev - 30 fev</span>
                <span className="match-page__group-users">3/10</span>
              </div>
            </div>
          </div>
          {/* Cronograma */}
          <div className="match-page__schedule">
            <h4>Cronograma</h4>
            <div className="match-page__schedule-items">
              <div className="match-page__schedule-item">
                <FaHome size={24} />
                <span>21 Fev as 08h</span>
                <span>Saida</span>
              </div>
              <div className="match-page__schedule-item">
                <FaMapMarkerAlt size={24} />
                <span>
                  Praça do papa - Avenida Nossa Senhora dos Navegantes, s/n, Praia do Suá, Vitória - ES, 29052-150
                </span>
                <span>Encontro</span>
              </div>
              <div className="match-page__schedule-item">
                <FaBus size={24} />
                <span>Onibus Viação Águia Branca</span>
                <span>Transporte</span>
              </div>
            </div>
          </div>
        </section>

        {/* Grupo da Viagem */}
        <section className="match-page__members">
          <h2>Grupo da Viagem</h2>
          <div className="match-page__members-list">
            <div className="match-page__member">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ruan Costa" />
              <span>Ruan Costa</span>
            </div>
            <div className="match-page__member">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Estela Paula" />
              <span>Estela Paula</span>
            </div>
            <div className="match-page__member">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Estela Paula" />
              <span>Estela Paula</span>
            </div>
          </div>
        </section>
      </div>

      {/* Botões de ação */}
      <div className="match-page__actions">
        <button className="match-page__action match-page__action--no">
          <FiX size={48} color="#FF5A5F" />
        </button>
        <button className="match-page__action match-page__action--refresh">
          <FiRotateCw size={48} color="#222" />
        </button>
        <button className="match-page__action match-page__action--yes">
          <AiFillHeart size={48} color="#00bcd4" />
        </button>
      </div>
    </div>
  );
}