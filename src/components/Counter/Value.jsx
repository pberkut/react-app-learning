import css from './Counter.module.css';

export const Value = ({ value }) => (
  <span className={css.counter__value}>{value}</span>
);
