import {
  FaHome,
  FaSearch,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import "./MobileSidebar.scss";

interface MobileSidebarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export default function MobileSidebar({
  isAuthenticated = false,
  onLogout,
}: MobileSidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsDropdownOpen(false);
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setIsDropdownOpen(false);
    setShowRegisterModal(true);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    setIsDropdownOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="mobile-sidebar">
        <div className="mobile-sidebar__content">
          <button className="mobile-sidebar__item">
            <FaHome className="mobile-sidebar__icon" />
            <span>Início</span>
          </button>

          <button className="mobile-sidebar__item">
            <FaSearch className="mobile-sidebar__icon" />
            <span>Pesquisar</span>
          </button>

          <div className="mobile-sidebar__dropdown-container" ref={dropdownRef}>
            <button
              className="mobile-sidebar__item"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaUser className="mobile-sidebar__icon" />
              <span>{isAuthenticated ? "Perfil" : "Logar"}</span>
              {/* Removido o ícone . . . de seta */}
            </button>

            {isDropdownOpen && (
              <div className="mobile-sidebar__dropdown-menu">
                {!isAuthenticated ? (
                  <>
                    <button
                      className="mobile-sidebar__dropdown-item"
                      onClick={handleLoginClick}
                    >
                      <FaSignInAlt className="mobile-sidebar__dropdown-icon" />
                      <span>Logar</span>
                    </button>
                    <button
                      className="mobile-sidebar__dropdown-item"
                      onClick={handleRegisterClick}
                    >
                      <FaUserPlus className="mobile-sidebar__dropdown-icon" />
                      <span>Cadastrar</span>
                    </button>
                  </>
                ) : (
                  <button
                    className="mobile-sidebar__dropdown-item"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="mobile-sidebar__dropdown-icon" />
                    <span>Sair</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <ModalLogin
          onClose={() => setShowLoginModal(false)}
          onRegisterClick={handleRegisterClick}
        />
      )}

      {showRegisterModal && (
        <ModalRegister
          onClose={() => setShowRegisterModal(false)}
          onLoginClick={handleLoginClick}
        />
      )}
    </>
  );
}
