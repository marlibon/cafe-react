import { NavLink } from "react-router-dom"
import useSetTitle from "../../../hooks/useSetTitle"
import config from "../../../utils/config"
import PopupMessage from "../PopupMessage"

const Failed = () => {
    useSetTitle('Ошибка при оформлении заказа!')

    return (
        <PopupMessage title="Ошибка при оформлении заказа!" navigateOnClose="/">
            <p>
                К сожалению, произошла ошибка. Пожалуйста, оформите заказ по телефону
                <a
                    href={`tel:${config.tel}`}
                    className="header__phone"
                    style={{ width: "300px", margin: "10px auto" }}
                    title={`позвонить в ${config.nameCompany}`}
                >
                    {config.tel}
                </a>
            </p>
        </PopupMessage>
    )
}
export default Failed