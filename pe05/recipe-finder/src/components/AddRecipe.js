import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddRecipe.css';
function AddRecipe() {
  const history = useNavigate();
  const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '' });
  const backUrl = 'https://ominous-carnival-69wxpvp64jw259vp-5000.app.github.dev';

  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios.get(`${backUrl}/api/recipes`)
      .then(response => setRecipeList(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(backUrl + '/api/recipes', recipe)
      .then(response => {
        console.log(response.data);
        alert('Recipe added successfully!');
        history('/'); // Redirect to the home page
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="add-recipe-container">
      <h2 className="add-recipe-heading">Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="field-label">Recipe Name:</label>
          <input
            type="text"
            value={recipe.name}
            onChange={e => setRecipe({ ...recipe, name: e.target.value })}
            placeholder="Enter Recipe Name"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="field-label">Ingredients:</label>
          <input
            type="text"
            value={recipe.ingredients}
            onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
            placeholder="Enter Ingredients"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="field-label">Instructions:</label>
          <textarea
            value={recipe.instructions}
            onChange={e => setRecipe({ ...recipe, instructions: e.target.value })}
            placeholder="Enter Instructions"
            className="textarea-field"
          />
        </div>
        <button type="submit" className="add-button">Add Recipe</button>
      </form>
      <div className="recipe-select-container">
        <label className="field-label">Select a Recipe:</label>
        <select className="recipe-select">
          <option value="">Select a Recipe</option>
          {recipeList.map(recipe => (
            <option key={recipe._id} value={recipe._id}>{recipe.name}</option>
          ))}
        </select>
      </div>
      <a href="/" className="back-link">Back to Home</a>
    </div>
  );
}

export default AddRecipe;
