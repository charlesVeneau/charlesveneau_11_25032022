import './index.scss';

function Header() {
    return ( 
        <div className="header">
            <div className="header-block">
                <img src="./assets/logoHeader.svg" alt="Kaza logo" className="header-logo" />
            </div>
            <div className="header-block"><a href="#" className="header-link">Accueil</a><a href="#" className="header-link">A Propos</a></div>
        </div>
     );
}

export default Header;