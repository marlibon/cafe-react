import { NavLink, useNavigate } from "react-router-dom"
import useSetTitle from "../../../hooks/useSetTitle"
import PopupMessage from "../PopupMessage"

const Added = () => {
    useSetTitle('Добавили в корзину!')
    return (
        <PopupMessage title="Успешно добавлено!" navigateOnClose="/">
            <NavLink to="/" className="message__continue-btn">Продолжить покупки</NavLink>
            <NavLink to="/cart" className="message__cart-btn">Перейти в корзину</NavLink>
        </PopupMessage>
    )
}
export default Added