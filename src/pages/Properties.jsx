import Header from '../components/Header';
import './styles/Properties.scss';

function Properties() {
  const isTitle = true;
  return (
    <Header isTitle={isTitle}>
      <h1 className="header-title">Chez vous, partout et ailleurs</h1>
    </Header>
  );
}

export default Properties;
