//import {NavLink} from 'react-router-dom';
import './styles/Card.scss';

function Card({ property }) {
  return (
    <article
      className="card"
      style={{ backgroundImage: `url(${property.cover})` }}
    >
      <h3 className="card-title">{property.title}</h3>
    </article>
  );
}

export default Card;
