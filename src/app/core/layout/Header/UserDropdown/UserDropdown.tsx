import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UserDropdown.scss";
import Button from "../../../shared/Button/Button";
import { useAuth } from "../../../../features/services/context/AuthContext";

const UserDropdown = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsOpen(false);
    navigate("/profile");
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
    console.log("USER DROPDOWN: ",user)
  return (
    <div className="user-dropdown" ref={dropdownRef}>
      {user ? (
        <>
          <button
            className="user-dropdown__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu do usuário"
          >
            {user?.profileImage ? (
              <img
                src={ import.meta.env.VITE_LOCAL_API+ user.profileImage}
                alt="Foto do usuário"
                className="user-dropdown__photo"
              />
            ) : (
              <FaUserCircle className="user-dropdown__icon" />
            )}
          </button>

          {isOpen && (
            <div className="user-dropdown__menu">
              <button
                className="user-dropdown__item"
                onClick={handleProfileClick}
              >
                <FaUserCircle className="user-dropdown__item-icon" />
                <span>Meu Perfil</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="perfil-none">
          <Button navigateTo="/login" type="link">
            Logar
          </Button>
          <Button navigateTo="/register" type="link">
            Registrar
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
