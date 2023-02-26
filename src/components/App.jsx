// import './App.css';

// import { ColorPicker } from './ColorPicker';
// import { Dropdown } from './Dropdown';
import { GlobalStyles } from './GlobalStyles';
import { PhonebookApp } from './PhonebookApp/PhonebookApp';
import { Wrapper } from './Wrapper/Wrapper';
// import { RecipleListApp } from './RecipeListApp';
// import { DisplayOutput } from './DisplayOutput/DisplayOutput';
// import { Button } from './Button/Button';
// import { Counter } from './Counter';
// import { FormExampleApp } from './FormExampleApp';
// import { TodoListApp } from './TodoListApp';

// import { Section } from './Section';
// import users from './data/users.json';j
// import UserProfileList from './components/UserProfileList';

// * import data JSON
// import optionsColorPicker from './ColorPicker/ColorPickerData.json';

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />

      <PhonebookApp />

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
