// import './App.css';
import { ColorPicker } from './ColorPicker';
import { Dropdown } from './Dropdown';
import { GlobalStyles } from './GlobalStyles';
import { RecipeList } from './RecipeList';
import recipes from './RecipeList/recipes.json';
import { Wrapper } from './Wrapper/Wrapper';
// import { DisplayOutput } from './DisplayOutput/DisplayOutput';
// import { Button } from './Button/Button';
import { Counter } from './Counter';

// import Section from './components/Section';
// import users from './data/users.json';j
// import UserProfileList from './components/UserProfileList';

// * import data JSON
import optionsColorPicker from './ColorPicker/ColorPickerData.json';
import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';

export default class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
  };

  render() {
    const { todos } = this.state;

    return (
      <Wrapper>
        <GlobalStyles />

        <TodoList todos={todos} />

        <ColorPicker options={optionsColorPicker} />

        <Dropdown />

        <Counter initialValue={2} />

        {/* <DisplayOutput /> */}

        <RecipeList items={recipes} />

        {/* <Button /> */}

        {/* <UserProfileList items={users} /> */}

        {/* <Section title="Section 1">
        <UserProfileList items={users} />
      </Section>

      <Section title="Section 2" />

      <Section /> */}
      </Wrapper>
    );
  }
}
