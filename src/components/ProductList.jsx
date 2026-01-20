import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
