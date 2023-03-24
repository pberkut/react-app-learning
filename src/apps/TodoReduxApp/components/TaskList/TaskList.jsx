import Task from '../Task';
import css from './TaskList.module.css';

const TaskList = () => {
  return (
    <ul className={css.list}>
      {[].map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
