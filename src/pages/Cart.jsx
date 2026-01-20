import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <span>{item.title}</span>
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
