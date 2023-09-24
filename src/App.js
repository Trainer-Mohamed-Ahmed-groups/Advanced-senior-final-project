import { Route, Routes } from "react-router-dom";
import SiteNav from "./layout/SiteNav";
import Home from "./views/Home"
import About from "./views/About"
import Contacts from "./views/Contacts";
import Error from "./views/Error";
import Blog from "./views/Blog";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import Footer from "./layout/Footer";
import CategoryView from "./views/CategoryView";
function App() {
  return (
    <div className="App">
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:category" element={<CategoryView />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
