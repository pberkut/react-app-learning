import './Todo.scss';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { IconButton } from '../IconButton';

export const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />

    <p className="TodoList__text">{text}</p>

    <IconButton
      className="TodoList__btn"
      onClick={onDelete}
      aria-label="Delete Todo"
    >
      <DeleteIcon width="32" height="32" fill="#fff" />
    </IconButton>

    {/* <button type="button" className="TodoList__btn" onClick={onDelete}>
      Delete
    </button> */}
  </>
);
