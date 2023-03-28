import { NavLink } from "react-router-dom"
import PopupMessage from "../PopupMessage"

const Completed = () => {
    return (
        <PopupMessage title="Ваш заказ успешно оформлен!">
            <p>Ожидайте звонка от менеджера и подтверждения заказа</p>
        </PopupMessage>
    )
}
export default Completed