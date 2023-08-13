import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find((city) => city.id === parseInt(id, 10));

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="container city-details">
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityDetails;