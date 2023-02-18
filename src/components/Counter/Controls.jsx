import css from './Counter.module.css';

export const Controls = ({ onIncrement, onDecrement, onClear }) => {
  //   debugger;
  return (
    <div className={css.counter__controls}>
      <button type="button" onClick={onIncrement}>
        +1
      </button>
      <button type="button" onClick={onDecrement}>
        -1
      </button>
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
