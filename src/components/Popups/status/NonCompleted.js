import { NavLink } from "react-router-dom"
import PopupMessage from "../PopupMessage"
import checkWorkTime from "../../../utils/checkWorkTime"
import useSetTitle from "../../../hooks/useSetTitle"
import config from "../../../utils/config"

const NonCompleted = () => {
    useSetTitle('Ошибка оформления заказа')

    const statusWorking = checkWorkTime();
    return (
        <PopupMessage title="Ошибка оформления заказа!" navigateOnClose="/">
            <p>Извините, но что-то пошло не так. Заказ не получилось оформить.</p>
            <p>Оформите, пожалуйста, заказ через звонок по телефону: <a href={`tel:${config.tel}`}>{config.tel}</a></p>
        </PopupMessage>
    )
}
export default NonCompleted