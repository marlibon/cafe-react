import CloseButton from "./CloseButton";
import Popup from "./Popup";
import imageCartEmpty from "../../images/cart_empty.png";

const PopupCart = () => {
    const products = false
    return (
        <Popup name="popup-cart">
            <div className="cart__container">
                <CloseButton />
                <div className="cart">
                    {products && (
                        <>
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
                        </>
                    )}
                    {!products && (<img
                        src={imageCartEmpty}
                        alt="в вашей корзине нет товаров"
                        className="cart__empty"
                    />)}
                </div>
            </div>
        </Popup>
    )
}

export default PopupCart