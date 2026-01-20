import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">🛍️ ShoppyGlobe</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Header;
