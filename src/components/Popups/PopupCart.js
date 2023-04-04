import CloseButton from "./CloseButton";
import Popup from "./Popup";
import imageCartEmpty from "../../images/cart_empty.png";
import useSetTitle from "../../hooks/useSetTitle";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import { countQuantity, countCost } from "../../utils/cartFunc";
import ProductItemTableView from "../elements/ProductItemTableView";
import { Navigate, useNavigate } from "react-router-dom";

const PopupCart = () => {
    const { cart, setCart } = useContext(CartContext)
    const [quantityAll, setQuantityAll] = useState(0);
    const [costAll, setCostAll] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setQuantityAll(countQuantity(cart))
        setCostAll(countCost(cart))
    }, [cart])

    useSetTitle('Корзина');

    function handleClearCart () {
        setCart([])
        localStorage.removeItem("cart");
    }
    function handleQuantity (newProduct) {
        setCart((state) => state.map((old) => old.id === newProduct.id && old.weight === newProduct.weight ? newProduct : old));
    }
    function handleDelete (delProduct) {
        const newCart = cart.filter((item) => item.id !== delProduct.id || item.weight !== delProduct.weight)
        setCart(newCart);
    }
    function onClickButtonOrder () {
        navigate("/order", { replace: false });

    }
    return (
        <Popup name="popup-cart" classNameContainer="cart__container" navigateOnClose="/">
            <div className="cart">
                {quantityAll ? (
                    <>
                        <h3 className="cart__title">{`Ваша корзина (${quantityAll})`}</h3>
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
                        <div className="cart__table">
                            {cart.map((item, index) => <ProductItemTableView product={item} onQuantity={handleQuantity} onDelete={handleDelete} key={index} />)}
                        </div>
                        <summary className="cart__line cart__line_total">
                            <p className="cart__product-text cart__product-text_small ">
                                всего на сумму:
                            </p>
                            <p className="cart__product-text cart__product-text_big">{costAll} руб.</p>
                            <button type="reset" className="cart__clear-btn" onClick={handleClearCart}>
                                Очистить
                            </button>
                            <button type="submit" className="cart__order-btn" onClick={onClickButtonOrder}>
                                Оформить
                            </button>
                        </summary>
                    </>
                ) : (<img
                    src={imageCartEmpty}
                    alt="в вашей корзине нет товаров"
                    className="cart__empty"
                />)}
            </div>
        </Popup>
    )
}

export default PopupCart