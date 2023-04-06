import { useEffect } from "react"

const OrderTable = () => {
    let order
    function getLocalStorage () {
        order = JSON.parse(localStorage.getItem('orderData')) || {}
        console.log(order);
    }
    useEffect(() => {
        getLocalStorage()
    },)
    return (
        <ul className="order__table">
            <li class="order__item">Имя: {order?.userName}</li>
            <li class="order__item">Телефон: {order?.phone}</li>
            <li class="order__item">Способ доставки: {order?.sposob}</li>
        </ul>
    )
}
export default OrderTable