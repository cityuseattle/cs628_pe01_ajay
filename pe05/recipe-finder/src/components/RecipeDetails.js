import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

function RecipeDetails() {
  const history = useNavigate();
  const backUrl = 'https://ominous-carnival-69wxpvp64jw259vp-5000.app.github.dev';
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const recipeId = id; // Assign the 'id' parameter directly

  useEffect(() => {
    // Fetch the recipe details based on recipeId
    axios.get(`${backUrl}/api/recipes/${recipeId}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => console.error(error));
  }, [recipeId]);

  const handleUpdate = () => {
    // Update the recipe and handle response
    const updatedData = {
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions
    };
    axios.put(`${backUrl}/api/recipes/${recipeId}`, updatedData)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  };

  const handleDelete = () => {
    // Delete the recipe and navigate back
    axios.delete(`${backUrl}/api/recipes/${recipeId}`)
      .then(() => {
        alert('Recipe deleted successfully');
        history('/');
        // Redirect to a different page or history.goBack() or similar
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="section">
        <h2>Recipe Name</h2>
        <input
          type="text"
          value={recipe.name}
          onChange={e => setRecipe({ ...recipe, name: e.target.value })}
        />
      </div>
      <div className="section">
        <h2>Ingredients</h2>
        <textarea
          value={recipe.ingredients}
          onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
        />
      </div>
      <div className="section">
        <h2>Instructions</h2>
        <textarea
          value={recipe.instructions}
          onChange={e => setRecipe({ ...recipe, instructions: e.target.value })}
        />
      </div>
      <button onClick={handleUpdate}>Update Recipe</button>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
}

export default RecipeDetails;
