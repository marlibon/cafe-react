import { useEffect, useState } from "react";
import Quantity from "./Quantity";

const ProductItemTableView = ({ product, onQuantity, onDelete }) => {
    const { title, img, cost, quantity: quant, weight } = product
    const [quantity, setQuantity] = useState(quant)
    useEffect(() => {
        onQuantity({ ...product, quantity })
    }, [quantity])
    return (
        <article className="cart__line cart__line_product">
            <div className="cart__line-product">
                <img src={img} alt={title} className="cart__product-img" />
                <h4 className="cart__product-title">{title}</h4>
                <p className="cart__product-weight">{weight}</p>
            </div>
            <span className="cart__product-text cart__product-text_price">{cost}</span>
            <div className="quantity cart__product-text_quontity">
                <Quantity currentQuantity={quantity} onQuantity={setQuantity} />
                {/* <div className="popup-product__quantity quantity">
                                            <button className="quantity__btn quantity__btn_minus" disabled="" id="0">-</button>
                                            <input id="quantity" name="quantity" className="quantity__input" value={quantity} maxLength="2" min="1" max="99" readonly="readonly" />
                                            <button className="quantity__btn quantity__btn_plus" id="0">+</button>
                                        </div> */}
            </div>
            <span className="cart__product-text cart__product-text_cost">{cost * quantity}</span>
            <button className="cart__product-trash" id="0" onClick={() => onDelete(product)}>✖</button>
        </article>
    )
}
export default ProductItemTableView