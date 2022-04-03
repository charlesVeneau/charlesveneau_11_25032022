import './styles/Card.scss';
import { Link } from 'react-router-dom';

function Card({ property }) {
  return (
    //   Use Link from react router dom instead of Navlink in order to pass the property object
    //   as a state element to the property page
    <Link
      to={`/properties/${property.id}`}
      state={{ data: property }}
      className="card-link"
    >
      <article
        className="card"
        style={{ backgroundImage: `url(${property.cover})` }}
      >
        <h3 className="card-title">{property.title}</h3>
      </article>
    </Link>
  );
}

export default Card;
