import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Form, ErrorMessage, FormField } from './RecipeForm.styled';
import { nanoid } from 'nanoid';

const RecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To Long!')
    .required('Required'),
  image: Yup.string().min(3, 'To short!').required('Required'),
  time: Yup.number().positive('Need positive number').required('Required'),
  servings: Yup.number().positive('Need positive number').required('Required'),
  calories: Yup.number().positive('Need positive number').required('Required'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required'),
});

export const RecipeForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        console.warn(values);
        onSave({
          ...values,
          id: nanoid(2),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Image
          <Field name="image" />
          <ErrorMessage name="imageUrl" component="span" />
        </FormField>
        <FormField>
          Time
          <Field name="time" type="number" />
          <ErrorMessage name="time" component="span" />
        </FormField>
        <FormField>
          Servings
          <Field name="servings" type="number" />
          <ErrorMessage name="servings" component="span" />
        </FormField>
        <FormField>
          Calories
          <Field name="calories" type="number" />
          <ErrorMessage name="calories" component="span" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage name="difficulty" component="div" />
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
