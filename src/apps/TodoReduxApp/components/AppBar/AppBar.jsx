import css from './AppBar.module.css';
import TaskCounter from '../TaskCounter/';
import StatusFilter from '../StatusFilter';

const AppBar = () => {
  return (
    <header className={css.header}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};

export default AppBar;
