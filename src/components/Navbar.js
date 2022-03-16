import './Navbar.css';
import { Link } from 'react-router-dom';

// icon
import pokedex from '../Assets/pokedex.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <img src={pokedex} alt="logo" />
        </Link>
      </ul>
    </nav>
  );
}
