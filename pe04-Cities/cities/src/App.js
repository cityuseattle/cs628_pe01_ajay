import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Route as RoutedRoute, NavLink } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'Mumbai', country: 'India', population: 36400068 },
    { id: 2, name: 'Delhi', country: 'India', population: 30771000 },
    { id: 3, name: 'Pune', country: 'India', population: 21516000 },
    { id: 4, name: 'Nagpur', country: 'India', population: 17125000 },
    { id: 5, name: 'Karnataka', country: 'India', population: 11893000 }
  ]);

  const handleAddCity = (newCity) => {
    setCities(prevCities => [...prevCities, newCity]);
  };

  return (
    <Router>
      <header>
        <h1>Cities App</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Cities List</NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">Add City</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <RoutedRoute path="/" element={<CitiesList cities={cities} />} />
        <RoutedRoute path="/add" element={<AddCity onAddCity={handleAddCity} />} />
        <RoutedRoute path="/city/:id" element={<CityDetails cities={cities} />} />
      </Routes>
    </Router>
  );
}

export default App;