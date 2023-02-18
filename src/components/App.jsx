// import './App.css';
import { Dropdown } from './Dropdown/Dropdown';
import { GlobalStyles } from './GlobalStyles';
// import { RecipeList } from './RecipeList/RecipeList';
// import recipes from './RecipeList/recipes.json';
import { Wrapper } from './Wrapper/Wrapper';
// import { DisplayOutput } from './DisplayUotput/DisplayOutput';
// import { Button } from './Button/Button';
// import { Counter } from './Counter/Counter';

// import Section from './components/Section';
// import users from './data/users.json';
// import UserProfileList from './components/UserProfileList';

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />

      <Dropdown />

      {/* <Counter initialValue={2} /> */}

      {/* <DisplayOutput /> */}

      {/* <RecipeList items={recipes} /> */}

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
