import { Component } from 'react';
import './styles.scss';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
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

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
