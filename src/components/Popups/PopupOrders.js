import Popup from "./Popup"

const PopupOrders = () => {
    return (
        <Popup name="popup-order" classNameContainer="order__container" navigateOnClose="/">
            <div className="cart">
                <article className="cart__line cart__line_main">
                    <p className="cart__product-text cart__product-text_small">№</p>
                    <p className="cart__product-text cart__product-text_small">
                        Дата
                    </p>
                    <p className="cart__product-text cart__product-text_small">
                        Сумма
                    </p>
                    <p className="cart__product-text cart__product-text_small">
                        Доставка
                    </p>
                    <p className="cart__product-text cart__product-text_small">Статус</p>
                </article>
                <div className="cart__table">
                    {/* {cart.map((item, index) => <ProductItemTableView product={item} onQuantity={handleQuantity} onDelete={handleDelete} key={index} />)} */}
                </div>
            </div>
        </Popup>
    )
}
export default PopupOrders
