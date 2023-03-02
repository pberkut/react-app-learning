import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {props => {
        console.log(props);

        return (
          <Form>
            <label>
              Описание
              <Field name="title" type="text" />
            </label>
            <br />
            <label>
              Ссылка
              <Field name="link" type="text" />
            </label>
            <br />
            <button type="submit" disabled={props.isSubmitting}>
              Добавить материал
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
