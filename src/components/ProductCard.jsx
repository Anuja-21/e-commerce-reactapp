import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>

      {!cartItem ? (
        <button
          className="btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      ) : (
        <div className="quantity-box">
          <button
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            -
          </button>

          <span>{cartItem.quantity}</span>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
