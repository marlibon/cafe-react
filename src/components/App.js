import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from 'react';
import { CartContext } from '../contexts/CartContext'
import './App.css';
import config from "../utils/config"
import dataCategoryList from '../utils/categories'
import MobMenu from './MobMenu';
import Footer from './Footer';
import Added from "./Popups/status/Added";
import Completed from "./Popups/status/Completed";
import Failed from "./Popups/status/Failed";
import checkWorkTime from "../utils/checkWorkTime";
import OperatingMode from "./Popups/status/OperatingMode";
import NotFound from "./Popups/status/NotFound";
import useSetTitle from "../hooks/useSetTitle";
import PopupImage from "./Popups/PopupImage";
import Terms from "./Pages/Terms/Terms";
import Loading from "./Loading";
import HandleProductList from "./HandleProductList";
import NonCompleted from "./Popups/status/NonCompleted";

const CategoriesAndProductsList = lazy(() => import('./CategoriesAndProductsList'));
const ProductPopular = lazy(() => import('./ProductPopular'));
const PopupCart = lazy(() => import('./Popups/PopupCart'));
const PopupOrder = lazy(() => import('./Popups/PopupOrder'));
const Header = lazy(() => import('./Header'));
const PopupProduct = lazy(() => import('./Popups/PopupProduct'));
const Contacts = lazy(() => import("./Pages/Contacts"));

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
        <Suspense fallback={<Loading />}>
          <Header config={config} />
          <main className="main">
            <CategoriesAndProductsList dataCategoryList={dataCategoryList} />
            <HandleProductList title="Чебуреки с мясом" />
            <HandleProductList title="Миничебуреки 5шт." />
            <HandleProductList title="Чебуреки с картофелем" />
            <HandleProductList title="Чебуреки с сыром" />
            <HandleProductList title="Сладкие чебуреки" />
            <HandleProductList title="Снеки" />
            <HandleProductList title="Пельмени, вареники" />
            <HandleProductList title="Горячие напитки" />
            <HandleProductList title="Холодные напитки" />
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
            <Route exact path="/non-completed" element={<NonCompleted />} />
            <Route exact path="/failed" element={<Failed />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </CartContext.Provider>
  );
}

export default App;
