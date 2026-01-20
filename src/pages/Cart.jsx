import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 && (
        <p style={{ marginTop: "20px" }}>Your cart is empty</p>
      )}

      {cartItems.map(item => (
        <div className="product-card" key={item.id}>
          <h4>{item.title}</h4>
          <p>Price: ₹ {item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
