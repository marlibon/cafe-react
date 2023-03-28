import { NavLink } from 'react-router-dom'
import logoImg from '../images/logo__img.png'

const Header = ({ config }) => {
    return (
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
            <NavLink to="/cart" className="header__cart">
                <button type="button" className="header__cart-link" />
                <span className="header__cart-quantity cart_quantity" />
            </NavLink>
        </header>
    )
}

export default Header