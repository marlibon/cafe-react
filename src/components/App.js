import { useEffect, useRef, useState } from 'react';

import './App.css';
import logoImg from '../images/logo__img.png'
import config from "../utils/config"
import dataCategoryList from '../utils/categories'
import dataProductList from '../utils/dataProductList'
import MobMenu from './MobMenu/MobMenu';
import CategoryList from './CategoryList/CategoryList';
import ProductList from './ProductList/ProductList';

function App () {
  const [stateTitleCurrentCategory, setStateTitleCurrentCategory] = useState('')
  const [stateArrayCurrentCategory, setStateArrayCurrentCategory] = useState('')
  const refTitleCurrentCategory = useRef()

  function handleClickCategoryList (title) {
    const filterProductsCategory = dataProductList.filter((product) => product.type === title);
    filterProductsCategory.length > 0 && setStateArrayCurrentCategory(filterProductsCategory);
    title && setStateTitleCurrentCategory(title);
    refTitleCurrentCategory.current.scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });
  }

  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <a href="/" className="logo__link">
            <img
              src={logoImg}
              alt={`логотип компании ${config.nameCompany}`}
              className="logo__img"
            />
          </a>
        </div>
        <div className="header__info">
          <p className="header__brand">{config.nameCompany}</p>
          <address className="header__description">
            г. Салават, Островского 26а
            <br />
            г. Салават, Ленина 22
          </address>
        </div>
        <div className="header__work-time" title={`Ждем вас ежедневно c ${config.operatingMode}`}>{config.operatingMode}</div>
        <a
          href={`tel:${config.tel}`}
          className="header__phone"
          title={`позвонить в  ${config.nameCompany}`}
        >
          {config.tel}
        </a>
        <div className="header__cart">
          <button type="button" className="header__cart-link" />
          <span className="header__cart-quantity cart_quantity" />
        </div>
      </header>
      <main className="main">
        <h2 className="products__title" id="catalog" style={{ fontSize: 22 }}>
          Выберите категорию:
        </h2>
        <CategoryList dataCategoryList={dataCategoryList} handleClickCategoryList={handleClickCategoryList} setCurrentCategory={setStateTitleCurrentCategory} />
        <section className="products">
          <h2 ref={refTitleCurrentCategory} className="products__title" id="filter-products-title">{stateTitleCurrentCategory}</h2>
          <ProductList arrayCurrentCategory={stateArrayCurrentCategory} />
          </section>
        <section className="product-popular">
          <h2 className="products__title products__title_medium">
            Часто заказывают
          </h2>
          <div className="product-popular__slider">
            <ul className="product-popular__container">
              {/* сюда загрузятся актуальные часто заказываемые товары через JS */}
            </ul>
            <button
              className="product-popular__slider-button product-popular__slider-button-prev"
              type="button"
            >
              <img
                src="./images/slider-rev.png"
                alt=""
                className="product-popular__slider-button-img"
              />
            </button>
            <button
              className="product-popular__slider-button product-popular__slider-button-next"
              type="button"
            >
              <img
                src="./images/slider-next.png"
                alt=""
                className="product-popular__slider-button-img"
              />
            </button>
          </div>
        </section>
        <section className="products">
          <div className="products__items product__container">
            {/* сюда загрузятся товары*/}
          </div>
        </section>
      </main>
      <MobMenu />
      <footer className="footer">
        <div className="footer__links">
          <ul className="footer__column">
            <li>Шеф Чебурек</li>
            <li>
              <a href="#" className="/terms">
                Пользовательское соглашение
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Доставка
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Контакты
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Акции
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Вакансии
              </a>
            </li>
          </ul>
          <ul className="footer__column">
            <li>Этот сайт</li>
            <li>
              <a href="#" className="footer__link feedback-link" data-name="error">
                Нашли ошибку?
              </a>
            </li>
            <li>
              <a href="#" className="footer__link feedback-link" data-name="letter">
                Письмо директору
              </a>
            </li>
            <li>
              <a href="#" className="footer__link feedback-link" data-name="site">
                Хочу такой же сайт!
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* модальные окна */}
      {/* попап продукта */}
      <section className="popup popup-product">
        <div className="popup-product__container">
          <img
            src="./images/button-close.svg"
            alt="кнопка закрытия"
            className="popup__close"
          />
          <h3 className="popup-product__title">Название пиццы</h3>
          <div className="popup-product__description">
            <img
              src="./images/pizza-example.png"
              alt="описание товара"
              className="popup-product__img-mob"
            />
            <div className="popup-product__content">
              <p className="popup-product__weight">840 г</p>
              <p className="popup-product__opisanie">
                Пастрами из индейки, острая чоризо, пикантная пепперони, бекон,
                моцарелла, фирменный томатный соус
              </p>
              <form name="properties" className="input-radio"></form>
              <form
                id="quantity"
                name="quantity"
                className="popup-product__quantity quantity"
              >
                <p className="quantity__text">количество: </p>
                <button className="quantity__btn quantity__btn_minus" disabled="">
                  -
                </button>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="quantity__input"
                  defaultValue={1}
                  maxLength={2}
                  min={1}
                  max={99}
                  readOnly=""
                />
                <button className="quantity__btn quantity__btn_plus">+</button>
              </form>
              <ul className="popup-product__supplements"></ul>
            </div>
          </div>
          <button className="popup-product__add-cart" data-id="">
            Добавить в корзину за 99р.
          </button>
          <div className="popup-product__imgzone">
            <img
              src="./images/pizza-example.png"
              alt="описание товара"
              className="popup-product__img"
            />
          </div>
        </div>
      </section>
      {/* попап уведомления добавления товара в корзину */}
      <section className="popup popup-message ">
        <div className="message__container">
          <img
            src="./images/button-close.svg"
            alt="кнопка закрытия"
            className="popup__close"
          />
          <div className="message">
            <h3 className="message__title">Успешно добавлено!</h3>
            <button className="message__continue-btn">Продолжить покупки</button>
            <button className="message__cart-btn">Перейти в корзину</button>
          </div>
        </div>
      </section>
      {/* попап корзины */}
      <section className="popup popup-cart">
        <div className="cart__container">
          <img
            src="./images/button-close.svg"
            alt="кнопка закрытия"
            className="popup__close"
          />
          <div className="cart">
            <h3 className="cart__title">Ваша корзина</h3>
            <article className="cart__line cart__line_main">
              <p className="cart__product-text cart__product-text_small">товар</p>
              <p className="cart__product-text cart__product-text_small">
                цена за ед.
              </p>
              <p className="cart__product-text cart__product-text_small">
                количество
              </p>
              <p className="cart__product-text cart__product-text_small">
                стоимость
              </p>
              <p className="cart__product-text cart__product-text_small">удалить</p>
            </article>
            <div className="cart__table"></div>
            <summary className="cart__line cart__line_total">
              <p className="cart__product-text cart__product-text_small ">
                всего на сумму:
              </p>
              <p className="cart__product-text cart__product-text_big">0 руб.</p>
              <button type="reset" className="cart__clear-btn">
                Очистить
              </button>
              <button type="submit" className="cart__order-btn">
                Оформить
              </button>
            </summary>
            <img
              src="./images/cart_empty.png"
              alt="в вашей корзине нет товаров"
              className="cart__empty"
            />
          </div>
        </div>
      </section>
      {/* попап оформления заказа */}
      <section className="popup popup-order">
        <div className="order__container">
          <img
            src="./images/button-close.svg"
            alt="кнопка закрытия"
            className="popup__close"
          />
          <div className="order">
            <h3 className="order__title">Оформление заказа</h3>
            <div className="form_user-block">
              <button
                type="button"
                className="form__submit-btn form__submit-btn_color_white form_go-cart"
              >
                ← вернуться в корзину
              </button>
              <form name="form_user-block" className="form form_user-block">
                <input
                  type="text"
                  placeholder="Имя"
                  id="name"
                  className="form__input form__input_name"
                  minLength={2}
                  maxLength={40}
                  required=""
                />
                <span className="form__error name-error" />
                <input
                  placeholder="Телефон"
                  type="tel"
                  id="phone"
                  minLength={10}
                  className="form__input form__input_phone"
                  required=""
                />
                <span className="form__error phone-error" />
                <input
                  placeholder="валидация"
                  type="tel"
                  id="phoneValid"
                  minLength={11}
                  maxLength={12}
                  className="form__input form__input_phone"
                  style={{ display: "none" }}
                  required=""
                />
                <label className="container">
                  Принимаю{" "}
                  <a href="/terms" target="_blank">
                    Пользовательское соглашение
                  </a>
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
                <button
                  type="submit"
                  name="form__submit"
                  className="form__submit-btn form__submit"
                >
                  Далее →
                </button>
              </form>
            </div>
            <div className="form_delivery-block" style={{ display: "none" }}>
              <button
                type="button"
                className="form__submit-btn form__submit-btn_color_white form_go-user-block"
              >
                ← вернуться назад
              </button>
              <p className="form__description">Сами заберете или нужна доставка?</p>
              <form name="sposob" className="input-radio page_visibility">
                <label htmlFor="sam" className="input-radio_label">
                  <input
                    type="radio"
                    name="sposob"
                    id="sam"
                    className="input-radio_radio"
                    defaultValue="самовывоз"
                    required="required"
                  />
                  <span className="input-radio_text">самовывоз</span>
                </label>
                <label htmlFor="city" className="input-radio_label">
                  <input
                    type="radio"
                    name="sposob"
                    id="city"
                    className="input-radio_radio"
                    defaultValue="доставка"
                    required="required"
                  />
                  <span className="input-radio_text">доставка</span>
                </label>
              </form>
              <div
                className="form form_delivery-block_filial"
                style={{ padding: 0 }}
              >
                <p className="form__description">По какому адресу заберете?</p>
                <form name="filial" className="input-radio page_visibility">
                  <label htmlFor="ostr" className="input-radio_label">
                    <input
                      type="radio"
                      name="filial"
                      id="ostr"
                      className="input-radio_radio"
                      defaultValue="Островского 26а"
                      required="required"
                      defaultChecked=""
                    />
                    <span className="input-radio_text">Островского 26а</span>
                  </label>
                  <label htmlFor="lenina" className="input-radio_label">
                    <input
                      type="radio"
                      name="filial"
                      id="lenina"
                      className="input-radio_radio"
                      defaultValue="Ленина 22"
                      required="required"
                    />
                    <span className="input-radio_text">Ленина 22</span>
                  </label>
                </form>
              </div>
              <form name="address" className="form address">
                <div>
                  <p className="form__description">
                    Напишите, пожалуйста, полный адрес
                  </p>
                  <input
                    placeholder="г.Салават, ул. ..., д. ..., кв. ..."
                    type="text"
                    id="address"
                    minLength={8}
                    maxLength={102}
                    className="form__input form__input_font_small form__input_address"
                    required=""
                  />
                  <span className="form__error address-error" />
                </div>
                <button
                  type="submit"
                  name="form__submit"
                  className="form__submit-btn form__submit"
                >
                  Далее →
                </button>
              </form>
            </div>
            <div className="form_confirm-block" style={{ display: "none" }}>
              <button
                type="button"
                className="form__submit-btn form__submit-btn_color_white form_go-user-block"
              >
                ← вернуться назад
              </button>
              <p className="form__description">Проверьте заполненные данные</p>
              <ul className="order__table"></ul>
              <textarea
                placeholder="Дополнительная информация"
                type="text"
                id="address"
                minLength={8}
                maxLength={402}
                className="form__input form__textarea form__input_comment"
                defaultValue={""}
              />
              <button
                type="submit"
                name="form__submit"
                className="form__submit-btn form__submit"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* попап успешного завершения заказа  */}
      <section className="popup popup-order-completed ">
        <div className="message__container">
          <img
            src="./images/button-close.svg"
            alt="кнопка закрытия"
            className="popup__close"
          />
          <div className="message">
            <h3 className="message__title">Ваш заказ успешно оформлен!</h3>
            <p>Ожидайте звонка от менеджера и подтверждения заказа</p>
          </div>
        </div>
      </section>
      {/* попап ошибки оформления заказа  */}
      <section className="popup popup-order-non-completed ">
        <div className="message__container">
          <img
            src="./images/button-close.svg"
            alt="кнопка закрытия"
            className="popup__close"
          />
          <div className="message">
            <h3 className="message__title">Ошибка при оформлении заказа!</h3>
            <p>
              К сожалению, произошла ошибка. Пожалуйста, оформите заказ по телефону{" "}
              <a
                href="tel:+79872401555"
                className="header__phone"
                title="позвонить в Шеф Чебурек"
              >
                +7(987)240-15-55
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
