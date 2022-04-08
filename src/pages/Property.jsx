import './styles/Property.scss';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Property() {
  const location = useLocation();
  const [properties, setProperties] = useState();

  //async function that will call the JSON file to set the properties list into state
  const getApiProperties = async () => {
    const response = await fetch('../data/properties.json')
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
    setProperties(response);
  };

  //In order to call the API once the page is rendered, we need to use useEffect from react.
  //We parse an Empty Array so it don't need to re run, as the API is only on read.
  useEffect((location) => {
    getApiProperties();
  }, []);
  console.log(properties);

  /*   function filterProperties(id) {
    return properties.filter((property) => property.id === id);
  }

  console.log(filterProperties(location.key)); */
  return (
    <section className="property">
      {/* <div className="property-carroussel">This is a carroussel</div>
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
      </div> */}
    </section>
  );
}

export default Property;
