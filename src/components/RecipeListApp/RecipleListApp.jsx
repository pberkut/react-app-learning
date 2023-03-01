import { Component } from 'react';
import { RecipeForm } from './components/RecipeForm/RecipeForm';
import { RecipeList } from './components/RecipleList/';
import initialRecipes from './data/recipes.json';

export class RecipleListApp extends Component {
  state = {
    recipes: initialRecipes,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes !== this.state.recipes) {
      localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
    }
  }

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [newRecipe, ...prevState.recipes],
      };
    });
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    return (
      <>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
      </>
    );
  }
}
