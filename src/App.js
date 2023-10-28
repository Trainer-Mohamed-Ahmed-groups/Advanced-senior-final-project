import { Route, Routes } from "react-router-dom";
import SiteNav from "./layout/SiteNav";
import Home from "./views/Home"
import About from "./views/About"
import Contacts from "./views/Contacts";
import Error from "./views/Error";
import Cart from "./views/Cart";
import Footer from "./layout/Footer";
import { useTranslation } from "react-i18next";
// import Products from "./views/Products";
import ProductsServer from "./views/ProductsServer";
import SiteHeader from "./layout/SiteHeader";
import Categories from "./views/Categories";
import ProductDetails from "./views/ProductDetails";
function App() {
  const { i18n } = useTranslation();

  return (
    <div className={`tw-font-cairo ${i18n.language === "ar" ? 'test' : ""}`}>
      <SiteNav />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products" element={<ProductsServer />} />
        <Route path="/categories/:cat" element={<Categories />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
