import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductContexProvider from "./Context/ProductContext";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./Context/CartContext";
import Cart from "./pages/Cart";
import FilerContextProvider from "./Context/FilerContext";
import NotFound from "./404/NotFound";

function App() {
  return (
    <ProductContexProvider>
      <CartProvider>
        <FilerContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/page/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FilerContextProvider>
      </CartProvider>
    </ProductContexProvider>
  );
}

export default App;
