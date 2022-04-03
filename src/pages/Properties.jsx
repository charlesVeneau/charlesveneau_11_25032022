import Header from '../components/Header';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

import './styles/Properties.scss';

function Properties() {
  const isTitle = true;
  const [properties, setProperties] = useState();

  //async function that will call the JSON file to set the properties list into state
  const getApiProperties = async () => {
    const response = await fetch('data/properties.json')
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
  useEffect(() => {
    getApiProperties();
  }, []);

  return (
    <div>
      <Header isTitle={isTitle}>
        <h1 className="header-title">Chez vous, partout et ailleurs</h1>
      </Header>
      <section className="properties">
        {properties &&
          properties.map((property) => {
            return <Card key={property.id} property={property} />;
          })}
      </section>
    </div>
  );
}

export default Properties;
