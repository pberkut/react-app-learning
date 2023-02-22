import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { StyledButton, Title } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ name, isOpen, image, onClose }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Modal for Recipe"
      >
        <StyledButton onClick={onClose}>X</StyledButton>
        <Title>{name}</Title>
        <img src={image} alt="" width="340" />
      </ReactModal>
    </div>
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
