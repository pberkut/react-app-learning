import { Component } from 'react';
import { RecipeList } from './components/RecipleList/';
import recipes from './data/recipes.json';

export class RecipleListApp extends Component {
  state = {
    recipes: recipes,
  };

  render() {
    return <RecipeList items={this.state.recipes} />;
  }
}
