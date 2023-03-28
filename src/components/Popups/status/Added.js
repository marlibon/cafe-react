import { NavLink } from "react-router-dom"
import PopupMessage from "../PopupMessage"

const Added = () => {
    return (
        <PopupMessage title="Успешно добавлено!">
            <NavLink to="/" className="message__continue-btn">Продолжить покупки</NavLink>
            <NavLink to="/cart" className="message__cart-btn">Перейти в корзину</NavLink>
        </PopupMessage>
    )
}
export default Added