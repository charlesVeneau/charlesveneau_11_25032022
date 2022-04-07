import './styles/Property.scss';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import { useLocation } from 'react-router-dom';

function Property() {
  const location = useLocation();
  const property = location.state?.data;
  return (
    <section className="property">
      <div className="property-carroussel">This is a carroussel</div>
      <div className="property-info">
        <div className="property-info-main">
          <h1 className="property-title">{property.title}</h1>
          <p className="property-location">{property.location}</p>
          <div className="property-tags">
            {property.tags.map((tag) => {
              return <Tag key={tag} tag={tag} />;
            })}
          </div>
        </div>
        <div className="property-info-secondary">
          <div className="property-info-owner">
            <p>
              {property.host.name.split(' ')[0]}
              <br />
              {property.host.name.split(' ')[1]}
            </p>
            <img src={property.host.picture} alt={property.host.name} />
          </div>
          <div className="property-info-rating">
            <Rating rating={property.rating} />
          </div>
        </div>
      </div>
      <div className="collapses">
        <Collapse title="Description" medium={true}>
          <p className="collapse-text">{property.description}</p>
        </Collapse>

        <Collapse title="Équipements" medium={true}>
          <ul className="collapse-list">
            {property.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );

  // function equipments() {
  //   const list = document.cr
  // }
}

export default Property;
