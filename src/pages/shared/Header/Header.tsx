import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Adicione isso
import logo from '../../../assets/logo.png';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import UserDropdown from '../UserDropdown/UserDropdown';
import { ImMagicWand } from 'react-icons/im';

export default function Header() {
  const [_showCreateTripModal, setShowCreateTripModal] = useState(false);
  const location = useLocation(); // Pegue a localização atual

  return (
    <header className="header">
      {/* Lado esquerdo - Logo */}
      <div className="header__logo-container">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      {/* Centro - Navbar */}
      {!['/register', '/login'].includes(location.pathname) && (
        <div className="header__navbar">
          <Navbar title="Aonde você quer ir?" />
        </div>
      )}
      {/* Lado direito - Ações */}
      <div className="header__actions">
        <UserDropdown />
      </div>
    </header>
  );
}
