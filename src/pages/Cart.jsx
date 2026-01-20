import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 && (
        <p style={{ marginTop: "20px" }}>Your cart is empty</p>
      )}

      <div className="product-grid">
        {cartItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
            />

            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>
            <p>Quantity: {item.quantity}</p>

            {/* View Details */}
            <Link to={`/product/${item.id}`}>
              <button className="btn btn-primary">
                View Details
              </button>
            </Link>

            {/* Remove */}
            <button
              className="btn btn-danger"
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
