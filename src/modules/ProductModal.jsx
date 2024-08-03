import Modal from "react-modal";
import {API_URL} from "../const";
import {useState} from "react";

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
  const [quantity, setQuantity] = useState(1);

  if (!data) return null;
  const {img: image, title, price, additional = {}} = data;
  // console.log('additional: ', additional);

  const handleDecrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    // !todo add to cart
    console.log('handleAddToCart');
  };

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

      <div>
        <button
          onClick={handleDecrementQuantity}
        >-</button>
        <input type="number" min="1"
          value={quantity} readOnly
        />
        <button
          onClick={handleIncrementQuantity}
        >+</button>
      </div>

      <button onClick={handleAddToCart}>добавить в корзину</button>
      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};
