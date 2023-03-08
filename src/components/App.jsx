// import './App.css';

// import { ColorPicker } from './ColorPicker';
// import { Dropdown } from './Dropdown';
import { GlobalStyles } from './GlobalStyles';
// import { SignUpForm } from './SignUpForm';
// import { ReaderApp } from './ReaderApp/ReaderApp';
// import { PhonebookApp } from './PhonebookApp/PhonebookApp';
import { Wrapper } from './Wrapper';
// import { RecipleListApp } from './RecipeListApp';
// import { DisplayOutput } from './DisplayOutput/DisplayOutput';
// import { Button } from './Button/Button';
// import { Counter } from './Counter';
// import { FormExampleApp } from './FormExampleApp';
// import { TodoListApp } from './TodoListApp';
import { ClockApp } from './ClockApp';
// import { PokemonApp } from './PokemonApp';
// import { MaterialApp } from './MaterialApp';

// import { Section } from './Section';
// import { PlayerApp } from './PlayerApp/PlayerApp';
// import { TabsApp } from './TabsApp';
// import users from './data/users.json';j
// import UserProfileList from './components/UserProfileList';

// * import data JSON
// import optionsColorPicker from './ColorPicker/ColorPickerData.json';

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />

      {/* <SignUpForm /> */}

      {/* <MaterialApp /> */}

      {/* <PokemonApp /> */}

      {/* <ReaderApp /> */}

      {/* <PlayerApp /> */}

      <ClockApp />

      {/* <TabsApp /> */}

      {/* <PhonebookApp /> */}

      {/* Example my form */}
      {/* <Section>
        <FormExampleApp />
      </Section> */}

      {/* <Section>
        <RecipleListApp />
      </Section> */}

      {/* <Section>
        <TodoListApp />
      </Section> */}

      {/* <ColorPicker options={optionsColorPicker} /> */}

      {/* <Dropdown /> */}

      {/* <Counter initialValue={2} /> */}

      {/* <DisplayOutput /> */}

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
