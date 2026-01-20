import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">🛍️ ShoppyGlobe</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </div>
    </nav>
  );
}

export default Header;
