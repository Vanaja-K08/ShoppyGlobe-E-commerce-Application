import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        ShoppyGlobe
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart 🛒
      </Link>
    </nav>
  );
}

export default Header;
