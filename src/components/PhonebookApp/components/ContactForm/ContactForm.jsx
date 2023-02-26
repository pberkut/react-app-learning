import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

const INITIAL_VALUES = {
  name: '',
  phone: '',
};

export const ContactForm = ({ addContact }) => {
  const onSubmit = (values, actions) => {
    const contact = {
      id: nanoid(2),
      name: values.name.trim(),
      phone: values.phone.trim(),
    };
    const isUnique = addContact(contact);
    if (isUnique) {
      actions.resetForm();
    }
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({ values, handleChange }) => (
        <Form>
          <label>
            Name
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Phone
            <input
              name="phone"
              type="tel"
              onChange={handleChange}
              value={values.phone}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};
