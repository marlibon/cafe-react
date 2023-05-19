import Popup from "./Popup"

const PopupOrders = () => {
    return (
        <Popup name="popup-order" classNameContainer="order__container" navigateOnClose="/">
            <div className="cart">
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
                    {/* {cart.map((item, index) => <ProductItemTableView product={item} onQuantity={handleQuantity} onDelete={handleDelete} key={index} />)} */}
                </div>
            </div>
        </Popup>
    )
}
export default PopupOrders
