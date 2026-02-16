import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopEasy</Link>

      <Link to="/cart" className="cart-link">
        🛒 Cart ({quantity})
      </Link>
    </nav>
  );
};

export default Navbar;
