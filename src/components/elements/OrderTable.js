import { useEffect } from "react"

const OrderTable = ({ dataForConfirm }) => {
    return (
        <ul className="order__table">
            {dataForConfirm && dataForConfirm.map((item) => (<li class="order__item">{item}</li>))}
        </ul>
    )
}
export default OrderTable