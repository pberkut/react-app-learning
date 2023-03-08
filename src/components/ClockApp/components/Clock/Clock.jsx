import { useEffect, useState, useRef } from 'react';
// import { Component } from 'react';
import './styles.scss';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  // console.log('intervalId: ', intervalId);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      handleStopClock();
    };
  }, []);

  const handleStopClock = () => {
    clearInterval(intervalId.current);
    console.log('Clear setInterval, id# ', intervalId.current);
  };

  return (
    <>
      <div className="Clock__face">{time.toLocaleTimeString()}</div>
      <button type="button" onClick={handleStopClock}>
        Stop clock
      </button>
    </>
  );
};

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);

//     console.log('setIntervalId #', this.intervalId);
//   }

//   // Обязательно после закрытия компоненты-класса необходимо снимать SetInterval и EventListener
//   componentWillUnmount() {
//     console.log('Это метод вызывается перед размонтированием компонента');
//     this.handleStopClock();
//   }

//   handleStopClock = () => {
//     clearInterval(this.intervalId);
//     console.log('Clear setInterval, id# ', this.intervalId);
//   };

//   render() {
//     return (
//       <>
//         <div className="Clock__face">
//           {this.state.time.toLocaleTimeString()}
//         </div>
//         <button type="button" onClick={this.handleStopClock}>
//           Stop
//         </button>
//       </>
//     );
//   }
// }
