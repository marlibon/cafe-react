import { useEffect } from "react"

const OrderTable = ({ cartData, orderData, costOrder }) => {
    // console.log(cartData, orderData, costOrder);
    // const order = JSON.parse(localStorage.getItem('orderData')) || {}
    // const cart = JSON.parse(localStorage.getItem('orderData')) || {}
    const { cost, quantity, costDelivery } = costOrder(orderData.sposob);
    console.log(cost, quantity, costDelivery);
    return (
        <ul className="order__table">
            <li class="order__item">Имя: {orderData?.userName}</li>
            <li class="order__item">Телефон: {orderData?.phone}</li>
            <li class="order__item">Заказ: {`${quantity} шт. за ${cost} ₽`}</li>
            <li class="order__item">Способ доставки: {orderData?.sposob}</li>
            {costDelivery !== 0 && (<li class="order__item">Стоимость доставки: {costDelivery}₽</li>)}
            <li class="order__item">Адрес: {orderData?.address}</li>
            <li class="order__item">Всего к оплате: {cost + costDelivery}₽</li>
        </ul>
    )
}
export default OrderTable