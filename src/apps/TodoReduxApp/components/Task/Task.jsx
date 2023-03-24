import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

const Task = ({ task }) => {
  return (
    <div>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
