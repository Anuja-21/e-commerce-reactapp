import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="page-title">Your Cart</h2>

      {items.length === 0 && <p>Your cart is empty, please add items.</p>}

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
          </div>

          <div className="cart-actions">
            <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <h3 className="total">Total: ₹{totalPrice}</h3>
      )}
    </div>
  );
};

export default CartPage;
