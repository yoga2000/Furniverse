import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
import ProductContexProvider from "./Context/ProductContext";
// import Product from "./pages/Product";
// import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./Context/CartContext";
// import Cart from "./pages/Cart";
import FilerContextProvider from "./Context/FilerContext";
import NotFound from "./404/NotFound";
import { Suspense, lazy } from "react";
import { Loading } from "./Loading/Loading";
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <ProductContexProvider>
      <CartProvider>
        <FilerContextProvider>
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center">
                <Loading />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/page/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </FilerContextProvider>
      </CartProvider>
    </ProductContexProvider>
  );
}

export default App;
