import { useLocation } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import Navbar from "./Navbar/Navbar";
import "./Header.scss";
import Button from "../../shared/Button/Button";

function HeaderLogo() {
  return (
    <div className="header__logo-container">
      <a href="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </a>
    </div>
  );
}

function HeaderNavbar() {
  return (
    <div className="header__navbar">
      <Navbar title="Aonde você quer ir?" />
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="header__actions">
      <Button type="link" navigateTo="/login">
        Entrar
      </Button>
      <Button type="link" navigateTo="/register">
        Cadastrar
      </Button>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header">
      <HeaderLogo />
      {isHome && <HeaderNavbar />}
      <HeaderActions />
    </header>
  );
}
