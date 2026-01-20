import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button className="btn btn-primary">View</button>
      </Link>

      <button
        className="btn btn-success"
        style={{ marginLeft: "10px" }}
        onClick={handleAdd}
      >
        Add to Cart
      </button>

      {added && (
        <p className="added-msg">
          ✔ Added to cart
        </p>
      )}
    </div>
  );
}

export default ProductItem;
