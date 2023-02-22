// import './App.css';

// import { ColorPicker } from './ColorPicker';
// import { Dropdown } from './Dropdown';
import { GlobalStyles } from './GlobalStyles';
import { RecipeList } from './RecipeList';
import recipes from './RecipeList/recipes.json';
import { Wrapper } from './Wrapper/Wrapper';
// import { DisplayOutput } from './DisplayOutput/DisplayOutput';
// import { Button } from './Button/Button';
// import { Counter } from './Counter';
// import { TodoListApp } from './TodoListApp';

// import Section from './components/Section';
// import users from './data/users.json';j
// import UserProfileList from './components/UserProfileList';

// * import data JSON
// import optionsColorPicker from './ColorPicker/ColorPickerData.json';

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />

      {/* <TodoListApp /> */}

      {/* <ColorPicker options={optionsColorPicker} /> */}

      {/* <Dropdown /> */}

      {/* <Counter initialValue={2} /> */}

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
