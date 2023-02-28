import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BackdropModal, ContentModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Press ESC, need close Modal');

      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('Click to Backdrop');

    console.log('currentTarget: ', e.currentTarget); // Наша цндь. На чём сраюотал обработчик событий
    console.log('target: ', e.target); // На чём мы кликнули

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <BackdropModal
        onClick={this.handleBackdropClick}
        className="Modal__backdrop"
      >
        <ContentModal className="Modal__content">
          {this.props.children}
        </ContentModal>
      </BackdropModal>,
      modalRoot
    );
  }
}
