import './styles/Header.scss';

function Header({ isTitle, children }) {
  return (
    <header className={'header ' + (!isTitle ? 'header-wide' : '')}>
      {children}
    </header>
  );
}

export default Header;
