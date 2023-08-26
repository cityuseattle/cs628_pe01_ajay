import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipe />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
