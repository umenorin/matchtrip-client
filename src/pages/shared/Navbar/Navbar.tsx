import { FaSearch } from "react-icons/fa";
import "./Navbar.scss";

interface NavbarProps {
  title: string;
  onSearchClick?: () => void;
}

export default function Navbar({ title, onSearchClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <input className="navbar__title" placeholder= {title}></input>
      <button className="navbar__search-button" onClick={onSearchClick}>
        <FaSearch className="navbar__search-icon" />
      </button>
    </nav>
  );
}
