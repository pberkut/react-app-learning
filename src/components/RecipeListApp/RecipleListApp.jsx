import { Component } from 'react';
import { RecipeList } from './components/RecipleList/';
import initialRecipes from './data/recipes.json';

export class RecipleListApp extends Component {
  state = {
    recipes: initialRecipes,
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    return (
      <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
    );
  }
}
