import './bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
  // handleAddToCart(bottle);
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>{name} </h3>
      <img src={img} alt={`image of ${name}`} />
      <p>Price: $ {price} </p>
      <button className="purchase-btn" onClick={() => handleAddToCart(bottle)}>
        Purchase
      </button>
    </div>
  );
};

export default Bottle;
