import { useEffect, useState } from 'react';
import { RecipeForm } from './components/RecipeForm/RecipeForm';
import { RecipeList } from './components/RecipleList/';
import initialRecipes from './data/recipes.json';

// Только для синхронного кода
const getInitialRecipes = () => {
  const savedRecipes = localStorage.getItem('recipes');
  if (savedRecipes !== null) {
    const parsedRecipes = JSON.parse(savedRecipes);
    return parsedRecipes;
  }
  return initialRecipes;
};

export const RecipleListApp = () => {
  const [recipes, setRecipes] = useState(getInitialRecipes);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = newRecipe => {
    setRecipes(prevState => [newRecipe, ...prevState]);
  };

  const deleteRecipe = recipeId => {
    setRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <>
      <RecipeForm onSave={addRecipe} />
      <RecipeList items={recipes} onDelete={deleteRecipe} />
    </>
  );
};
