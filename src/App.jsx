import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
     <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </>
  );
}

export default App;
