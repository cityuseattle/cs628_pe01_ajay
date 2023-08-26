const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://admin:admin@cluster0.nos9wbt.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

app.post('/api/recipes', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Unable to save the recipe' });
  }
});

app.get('/api/recipes', async (req, res) => {
  try {
  
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch recipes' });
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipes = await Recipe.findById(recipeId);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch recipes' });
  }
});
// Update a recipe
app.put('/api/recipes/:id', async (req, res) => {
  try {
    const recipeId = req.params.id;
    const updatedRecipe = req.body; // New recipe data
    const recipe = await Recipe.findByIdAndUpdate(recipeId, updatedRecipe, { new: true });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the recipe' });
  }
});

// Delete a recipe
app.delete('/api/recipes/:id', async (req, res) => {
  try {
    const recipeId = req.params.id;
    console.log("delete called");
    const recipe = await Recipe.findByIdAndRemove(recipeId);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the recipe' });
  }
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
