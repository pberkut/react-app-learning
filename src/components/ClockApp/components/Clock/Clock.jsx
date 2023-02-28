import { Component } from 'react';
import './styles.scss';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    showModal: false,
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000
    );
  }

  // Обязательно после закрытия компоненты-класса необходимо снимать SetInterval и EventListener
  componentWillUnmount() {
    console.log('Clear setInterval');
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
