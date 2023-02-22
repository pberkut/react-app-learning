import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

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

export const Modal = ({ isOpen, image, onClose }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Modal</h2>
        <button onClick={onClose}>X</button>
        <img src={image} alt="" width="340" />
      </ReactModal>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
