import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UserDropdown.scss";
import { useAuth } from "../../../../features/services/context/AuthContext";

const UserDropdown = () => {
  const { user, logout } = useAuth();
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
  
  return (
    <div className="user-dropdown-wrapper">
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
                  src={user.profileImage}
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
                <button
                  className="user-dropdown__logout"
                  onClick={() => {
                    setIsOpen(false);
                    logout();
                  }}
                >
                  Sair
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="perfil-none"></div>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
