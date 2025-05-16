import { useState } from "react";
import logo from "../../../assets/logo.png";
import Button from "../../../components/Button/Button";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";
import UserDropdown from "../UserDropdown/UserDropdown";

export default function Header() {
  const [_showCreateTripModal, setShowCreateTripModal] = useState(false);

  return (
    <header className="header">
      {/* Lado esquerdo - Logo */}
      <div className="header__logo-container">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      {/* Centro - Navbar */}
      <div className="header__navbar">
        <Navbar title="Aonde você quer ir?" />
      </div>
      {/* Lado direito - Ações */}
      <div className="header__actions">
        <Button size="medium" onClick={() => setShowCreateTripModal(true)}>
          Criar nova Viagem
        </Button>
        <UserDropdown />
      </div>
    </header>
  );
}
