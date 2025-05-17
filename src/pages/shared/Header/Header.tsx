import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import UserDropdown from "../UserDropdown/UserDropdown";

export default function Header() {
  return (
    <header className="header">
      {/* Lado esquerdo - Logo */}
      <div className="header__logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
      </div>
      {/* Centro - Navbar */}
      <div className="header__navbar">
        <Navbar title="Aonde você quer ir?" />
      </div>
      {/* Lado direito - Ações */}
      <div className="header__actions">
        <UserDropdown />
      </div>
    </header>
  );
}
