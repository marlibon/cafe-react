import ButtonSubmit from "./ButtonSubmit";

const FormConfirm = ({ orderData, costOrder, onSubmit }) => {
    const { cost, quantity, costDelivery } = costOrder(orderData.sposob);
    return (
        <>
            <p className="form__description">Проверьте заполненные данные</p>
            <ul className="order__table">
                <li class="order__item">Имя: {orderData?.userName}</li>
                <li class="order__item">Телефон: {orderData?.phone}</li>
                <li class="order__item">Заказ: {`${quantity} шт. за ${cost} ₽`}</li>
                <li class="order__item">Способ доставки: {orderData?.sposob}</li>
                {costDelivery !== 0 && (<li class="order__item">Стоимость доставки: {costDelivery}₽</li>)}
                <li class="order__item">Адрес: {orderData?.address}</li>
                <li class="order__item">Всего к оплате: {cost + costDelivery}₽</li>
            </ul>
            <form name="delivery" onSubmit={onSubmit}>
                <textarea
                    placeholder="Дополнительная информация"
                    type="text"
                    id="address"
                    minLength={8}
                    maxLength={402}
                    className="form__input form__textarea form__input_comment"
                    defaultValue={""}
                />
                <ButtonSubmit text="Оформить заказ" />
            </form>
        </>
    )
}
export default FormConfirm