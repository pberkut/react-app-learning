import { Component } from 'react';
import { Clock } from './components/Clock';
// import { Modal } from './components/Modal';

export class ClockApp extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Clock />

        {/* <button type="button" onClick={this.handleStopClock}></button> */}
        <hr />
        <button type="button" onClick={this.toggleModal}>
          Open Clock
        </button>
        {/* {this.state.showModal && (
          <>
            <Modal onClose={this.toggleModal}></Modal>
          </>
        )} */}
      </>
    );
  }
}
