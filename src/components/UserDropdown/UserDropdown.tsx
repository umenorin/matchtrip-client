import { useState, useRef, useEffect } from "react";
import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "./UserDropdown.scss";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";

interface UserDropdownProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

const UserDropdown = ({
  isAuthenticated = false,
  onLogout,
}: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsOpen(false);
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsOpen(false);
    navigate("/"); // Redireciona para a home após logout
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <button
        className="user-dropdown__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu do usuário"
      >
        <FaUserCircle className="user-dropdown__icon" />
      </button>

      {isOpen && (
        <div className="user-dropdown__menu">
          {!isAuthenticated ? (
            <>
              <button
                className="user-dropdown__item"
                onClick={handleLoginClick}
              >
                <FaSignInAlt className="user-dropdown__item-icon" />
                <span>Logar</span>
              </button>
              <Link
                to="/register"
                className="user-dropdown__item"
                onClick={handleRegisterClick}
              >
                <FaUserPlus className="user-dropdown__item-icon" />
                <span>Cadastrar-se</span>
              </Link>
            </>
          ) : (
            <button className="user-dropdown__item" onClick={handleLogout}>
              <FaSignOutAlt className="user-dropdown__item-icon" />
              <span>Sair</span>
            </button>
          )}
        </div>
      )}
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
    </div>
  );
};

export default UserDropdown;
