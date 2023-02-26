import { Formik, Field } from 'formik';
import { Form, FormField } from './RecipeForm.styled';

export const RecipeForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        imageUrl: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      onSubmit={values => {
        console.warn(values);
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
        </FormField>
        <FormField>
          Image
          <Field name="imageUrl" />
        </FormField>
        <FormField>
          Time
          <Field name="time" type="number" />
        </FormField>
        <FormField>
          Servings
          <Field name="servings" type="number" />
        </FormField>
        <FormField>
          Calories
          <Field name="calories" type="number" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
