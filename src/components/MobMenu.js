import imageMobMenuCatalog from '../images/mob-menu-catalog.png'
import imageMobMenuCall from '../images/mob-menu-call.png'
import imageMobMenuLogo from '../images/logo__img.png'
import imageMobMenuCart from '../images/mob-menu-cart.png'
import imageMobMenuOrders from '../images/mob-menu-orders.png'
import { NavLink } from 'react-router-dom'
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { countQuantity } from "../utils/cartFunc";

const MobMenu = () => {
    const { cart } = useContext(CartContext)
    const quantity = countQuantity(cart);

    return (
        <nav className="mob-menu">
            <a href="#catalog" className="mob-menu__item mob-menu__catalog">
                <img
                    className="mob-menu__item-img"
                    src={imageMobMenuCatalog}
                    alt="каталог"
                />
            </a>
            <a
                href="tel:+79872401555"
                title="позвонить в Шеф Чебурек"
                className="mob-menu__item mob-menu__call"
            >
                <img
                    className="mob-menu__item-img"
                    src={imageMobMenuCall}
                    alt="позвонить"
                />
            </a>
            <NavLink to="/contacts" className="mob-menu__contacts">
                <img
                    src={imageMobMenuLogo}
                    alt="контакты"
                    className="mob-menu__img"
                />
            </NavLink>
            <NavLink to="/cart" className="mob-menu__item mob-menu__cart">
                <img
                    className="mob-menu__item-img"
                    src={imageMobMenuCart}
                    alt="корзина"
                />
                {quantity ? (<span className="mob-menu__cart-quantity">{quantity}</span>) : ''}
            </NavLink>
            <button type="button" className="mob-menu__item mob-menu__orders">
                <img
                    className="mob-menu__item-img"
                    src={imageMobMenuOrders}
                    alt="заказы"
                />
            </button>
        </nav>
    )
}

export default MobMenu