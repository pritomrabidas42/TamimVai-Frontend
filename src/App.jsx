import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";
import ViewCart from "./Components/ViewCart";
import Register from "./Components/Register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/viewcart" element={<ViewCart />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
