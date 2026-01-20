import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{product.title}</h4>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
