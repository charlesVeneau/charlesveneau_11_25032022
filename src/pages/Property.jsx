import { useParams } from 'react-router-dom';
import './styles/Property.scss';
function Property() {
  const { propertyId } = useParams();
  return (
    <div>
      <h1>Property page</h1>
      <p>{propertyId}</p>
    </div>
  );
}

export default Property;
