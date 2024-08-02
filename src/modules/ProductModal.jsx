import Modal from "react-modal";
import {API_URL} from "../const";

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

Modal.setAppElement('#root');

export const ProductModal = ({isOpen, onRequestClose, data}) => {
  if (!data) return null;
  const {img: image, title, price, additional = {}} = data;
  console.log('additional: ', additional);

  return (
    <Modal style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
    >
      <h2>{title}</h2>

      <img src={`${API_URL}${image}`} alt={title} />

      <p>{price}</p>

      <ul>
        {Object.entries(additional).map(([key, val]) => (
          <li key={key}><strong>{key}:</strong> {val}</li>
        ))}
      </ul>

      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};
