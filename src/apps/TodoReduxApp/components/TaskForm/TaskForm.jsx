import Button from '../Button';
import css from './TaskForm.module.css';

const TaskForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />

      <Button>Add task</Button>
    </form>
  );
};

export default TaskForm;
