import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = ({ onAddCity }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState({
    name: '',
    country: '',
    population: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity((prevCity) => ({
      ...prevCity,
      [name]: name === 'population' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity({ ...city, id: Date.now() });
    navigate('/');
  };

  return (
    <div className="container left-content">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={city.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={city.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="population">Population:</label>
          <input
            type="number"
            id="population"
            name="population"
            value={city.population}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;