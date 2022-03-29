import { Link } from 'react-router-dom'
import './index.scss';

function Navbar() {
    return ( 
        <nav className="navbar">
            <div className="navbar-block">
            <Link to="/">
                <img src="./assets/logoHeader.svg" alt="Kaza logo" className="navbar-logo" />
            </Link>
            </div>
            <div className="navbar-block">
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/about" className="navbar-link">A Propos</Link>
            </div>
        </nav>
     );
}

export default Navbar;