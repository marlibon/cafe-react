import { NavLink } from "react-router-dom"
import config from "../../../utils/config"
import PopupMessage from "../PopupMessage"

const Failed = () => {
    return (
        <PopupMessage title="Ошибка при оформлении заказа!">
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