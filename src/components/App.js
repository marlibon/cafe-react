import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react';

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


function App () {
  const [isOpenPopupProduct, setIsOpenPopupProduct] = useState(false)
  const [isOpenPopupCart, setIsOpenPopupCart] = useState(false)
  const [isOpenPopupOrder, setIsOpenPopupOrder] = useState(false)
  const [isOpenPopupMessageAddCart, setIsOpenPopupMessageAddCart] = useState(false)
  const [isOpenPopupMessageOrderCompleted, setIsOpenPopupMessageOrderCompleted] = useState(false)
  const [isOpenPopupMessageOrderNonCompleted, setIsOpenPopupMessageOrderNonCompleted] = useState(false)

  return (
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
      <Routes>
        <Route exact path="/product/:id" element={<PopupProduct />} />
        <Route exact path="/cart" element={<PopupCart />} />
        <Route exact path="/order" element={<PopupOrder />} />
        <Route exact path="/added" element={<Added />} />
        <Route exact path="/completed" element={<Completed />} />
        <Route exact path="/failed" element={<Failed />} />
      </Routes>
    </div>

  );
}

export default App;
