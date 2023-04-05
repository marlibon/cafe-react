import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext'
import './App.css';
import config from "../utils/config"
import MobMenu from './MobMenu';
import CategoriesAndProductsList from './CategoriesAndProductsList';
import ProductPopular from './ProductPopular';
import Footer from './Footer';
import PopupMessage from './Popups/PopupMessage';
import PopupCart from './Popups/PopupCart';
import PopupOrder from './Popups/PopupOrder';
import Header from './Header';
import PopupProduct from './Popups/PopupProduct';
import Added from "./Popups/status/Added";
import Completed from "./Popups/status/Completed";
import Failed from "./Popups/status/Failed";
import checkWorkTime from "../utils/checkWorkTime";
import OperatingMode from "./Popups/status/OperatingMode";
import NotFound from "./Popups/status/NotFound";
import useSetTitle from "../hooks/useSetTitle";
import PopupContacts from "./Popups/PopupContacts.";
import PopupImage from "./Popups/PopupImage";

function App () {
  const navigate = useNavigate();
  const [openPopupNoWorking, setOpenPopupNoWorking] = useState(false)
  const worked = checkWorkTime();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useSetTitle('')

  useEffect(() => {
    if (worked) { setOpenPopupNoWorking(true) }
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="page">
        <Header config={config} />
        <main className="main">
          <CategoriesAndProductsList />
          <ProductPopular />
          <section className="products">
            <div className="products__items product__container">
              {/* сюда загрузятся товары*/}
            </div>
          </section>
        </main>
        <MobMenu />
        <Footer />
        <OperatingMode isOpen={openPopupNoWorking} onOpen={setOpenPopupNoWorking} />
        <Routes>
          <Route exact path="/" element={<></>} />
          <Route exact path="/product/:id" element={<PopupProduct />} />
          <Route exact path="/image/:id" element={<PopupImage />} />
          <Route exact path="/cart" element={<PopupCart />} />
          <Route exact path="/order/:block" element={<PopupOrder />} />
          <Route exact path="/added" element={<Added />} />
          <Route exact path="/completed" element={<Completed />} />
          <Route exact path="/failed" element={<Failed />} />
          <Route exact path="/contacts" element={<PopupContacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
