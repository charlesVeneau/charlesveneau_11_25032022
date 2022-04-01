import { NavLink } from 'react-router-dom';
import './styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-block">
        <NavLink to="/">
          <img
            src="/assets/logoHeader.svg"
            alt="Kaza logo"
            className="navbar-logo"
          />
        </NavLink>
      </div>
      <div className="navbar-block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar-link , navbar-link-isActive' : 'navbar-link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'navbar-link , navbar-link-isActive' : 'navbar-link'
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
