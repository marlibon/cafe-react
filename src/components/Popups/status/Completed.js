import { NavLink } from "react-router-dom"
import PopupMessage from "../PopupMessage"
import checkWorkTime from "../../../utils/checkWorkTime"
import useSetTitle from "../../../hooks/useSetTitle"

const Completed = () => {
    useSetTitle('Заказ оформлен!')

    const statusWorking = checkWorkTime();
    return (
        <PopupMessage title="Ваш заказ успешно оформлен!" navigateOnClose="/">
            <p>Ожидайте звонка от менеджера и подтверждения заказа в течении 10-20мин.</p>
            {statusWorking && (
                <>
                    <h3>Внимание! Сейчас нерабочее время</h3>
                    <p>Ваш заказ мы начнем обрабатывать через {statusWorking}</p>
                </>
            )}
        </PopupMessage>
    )
}
export default Completed