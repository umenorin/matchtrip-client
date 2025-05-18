import "./Schedule.scss";
import { FaHome, FaMapMarkerAlt, FaBus } from "react-icons/fa";

export default function Schedule() {
  return (
    <div className="schedule">
      <h4>Cronograma</h4>
      <div className="schedule__items">
        <div className="schedule__item">
          <FaHome size={24} />
          <span>21 Fev as 08h</span>
          <span>Saida</span>
        </div>
        <div className="schedule__item">
          <FaMapMarkerAlt size={24} />
          <span>
            Praça do papa - Avenida Nossa Senhora dos Navegantes, s/n, Praia do Suá, Vitória - ES, 29052-150
          </span>
          <span>Encontro</span>
        </div>
        <div className="schedule__item">
          <FaBus size={24} />
          <span>Onibus Viação Águia Branca</span>
          <span>Transporte</span>
        </div>
      </div>
    </div>
  );
}