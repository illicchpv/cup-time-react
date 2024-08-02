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
  // console.log('additional: ', additional);

  return (
    <Modal style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
    >
      <div className="product-modal__container">

        <div className="product-modal__image-block">
          <img src={`${API_URL}${image}`} alt={title} 
          />
        </div>

        <div className="product-modal__info">

          <div className="product-modal__info-main">
            <h2>{title}</h2>

            <p>{price}&nbsp;₽</p>
            <button onClick={onRequestClose}></button>
          </div>

          <ul className="product-modal__info-additional">
            {Object.entries(additional).map(([key, val]) => (
              <li key={key}><strong>{key}:</strong> <span>{val}</span></li>
            ))}
          </ul>

          <div className="sale-block">

          </div>

        </div>

      </div>
    </Modal>
  );
};
