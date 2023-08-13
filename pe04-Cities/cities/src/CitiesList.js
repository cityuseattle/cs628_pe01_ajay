import React from 'react';
import { Link } from 'react-router-dom';

const CitiesList = ({ cities }) => {
  return (
    <div className="container left-content">
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/city/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;