import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Store from "./components/Store";
import "./styles.css";

export const paths = {
  home: "/",
  product: "/product",
  checkout: "/checkout"
};

export const routes = [
  {
    path: paths.home,
    element: <Store />,
    text: "Home"
  },
  {
    path: paths.product,
    element: <Product />,
    text: "Product"
  },
  {
    path: paths.checkout,
    element: <Checkout />,
    text: "Checkout"
  }
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={paths.home} element={<Store />} />
          <Route path={paths.product} element={<Product />} />
          <Route path={paths.checkout} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// {routes.map((route) => (
//   <Route path={route.path} element={route.element} />
// ))}
