import React from 'react';
import css from './Counter.module.css';
import { Controls } from './Controls';
import { Value } from './Value';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  // Раньше объявлялось так
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 1,
  //     };
  //   }

  // сокращенная конструкция публичное свойство state

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.state.value = 2;

    //   Здесь передаётся объект, не основывываясь от предыдущего сотсояния
    // this.setState({ value: 10 }, () => {}); // Перезапись поверх не основываясь на предыдущем значении

    //   Изменить состояние от предыдещего сотсояния, нужно передавать ка функцию
    // prevState - это актуальное стостояния state
    // this.setState(prevState => {
    //   return {
    //     value: prevState.value + 1,
    //   };
    // });

    // console.warn('+1');

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    // console.log('-1');

    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  handleClear = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div className={css.counter}>
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}
