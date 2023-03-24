import Button from '../Button';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
  return (
    <div className={css.wrapper}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};

export default StatusFilter;
