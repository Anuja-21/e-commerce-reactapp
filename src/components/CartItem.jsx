import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h3>Cart</h3>

      {items.map(item => (
        <div key={item.id}>
          {item.title} x {item.quantity}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
};

export default Cart;
