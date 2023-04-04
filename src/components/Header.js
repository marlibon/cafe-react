import { NavLink } from 'react-router-dom'
import logoImg from '../images/logo__img.png'
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { countQuantity } from "../utils/cartFunc";

const Header = ({ config }) => {
    const { cart } = useContext(CartContext)
    const quantity = countQuantity(cart);
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/contacts" className="logo__link">
                    <img
                        src={logoImg}
                        alt={`логотип компании ${config.nameCompany}`}
                        className="logo__img"
                    />
                </NavLink>
            </div>
            <div className="header__info">
                <p className="header__brand">{config.nameCompany}</p>
                <address className="header__description">
                    г. Салават, Островского 26а
                    <br />
                    г. Салават, Ленина 22
                </address>
            </div>
            <div className="header__work-time" title={`Ждем вас ежедневно c ${config?.operatingMode?.text()}`}>{config?.operatingMode?.text()}</div>

            <a
                href={`tel:${config.tel}`}
                className="header__phone"
                title={`позвонить в  ${config.nameCompany}`}
            >
                {config.tel}
            </a>
            <NavLink to="/cart" className={`header__cart ${quantity && 'header__cart_active'}`}>
                <button type="button" className="header__cart-link" />
                {quantity ? (<span className="header__cart-quantity cart_quantity" >{quantity}</span>) : ''}
            </NavLink>
        </header>
    )
}

export default Header