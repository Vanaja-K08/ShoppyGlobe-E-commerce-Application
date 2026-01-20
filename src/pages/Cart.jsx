import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(state => state.cart);

  return (
    <>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}

export default Cart;
