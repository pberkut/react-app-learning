import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BackdropModal, ContentModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return createPortal(
      <BackdropModal className="Modal__backdrop">
        <ContentModal className="Modal__content">
          {this.props.children}
        </ContentModal>
      </BackdropModal>,
      modalRoot
    );
  }
}
