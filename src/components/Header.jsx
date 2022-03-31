import './styles/Header.scss';

function Header({ children }) {
  return (
    <header
      className="header"
      //   style={{
      //     backgroundImage: `${process.env.PUBLIC_URL}/assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg`,
      //   }}
    >
      {children}
    </header>
  );
}

export default Header;
