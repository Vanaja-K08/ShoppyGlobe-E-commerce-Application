import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="product-card" style={{ maxWidth: "400px", margin: "auto" }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />

        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ₹ {product.price}</p>

        {/* Go Back Button */}
        <button
          className="btn btn-primary"
          onClick={() => navigate(-1)}
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
