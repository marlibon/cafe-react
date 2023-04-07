import Popup from "./Popup";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import useSetTitle from "../../hooks/useSetTitle";
import { useContext, useEffect, useState } from "react";
import ButtonGoBack from "../elements/ButtonGoBack";
import FormDelivery from "../elements/FormDelivery";
import FormUser from "../elements/FormUser";
import config from "../../utils/config";
import FormConfirm from "../elements/FormConfirm";

const PopupOrder = () => {
    useSetTitle('Оформление заказа');
    const { cart } = useContext(CartContext)
    const params = useParams()
    const block = params?.block;
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState({})
    const [dataForConfirm, setDataForConfirm] = useState([])

    function validForm (form) {
        if (form.tagName !== 'FORM') return false;
        return ![...form.elements].some(element => element.validity.valid !== true);
    }
    useEffect(() => {
        console.log(dataForConfirm, cart);

    }, [dataForConfirm])

    function handleInput (event) {
        const name = event.target.name;
        setOrderData({ ...orderData, [name]: event.target.value })
    }
    function saveLocalStorage () {
        localStorage.setItem('orderData', JSON.stringify(orderData))
    }
    function handleSubmitFormUser (event) {
        event.preventDefault();
        saveLocalStorage();
        navigate('/order/delivery', { replace: false })
    }
    function handleSubmitFormDelivery (event) {
        event.preventDefault();
        saveLocalStorage();
        const { cost, quantity, costDelivery } = costOrder(orderData?.sposob);
        let dataForConfirm = [
            `Имя: ${orderData.userName}`,
            `Телефон: ${orderData.phone}`,
            `Заказ: ${quantity} шт.за ${cost} ₽`,
            `Способ доставки: ${orderData.sposob}`,
        ]

        if (costDelivery !== 0) dataForConfirm = [...dataForConfirm, `Стоимость доставки: ${costDelivery}₽`];
        dataForConfirm = [...dataForConfirm,
        `Адрес: ${orderData?.address}`,
        `Всего к оплате: ${cost + costDelivery}₽`,
        ]
        setDataForConfirm(dataForConfirm);
        navigate('/order/confirm', { replace: false })
    }
    function handleSubmitFormConfirm (comment) {
        setDataForConfirm([...dataForConfirm, `Комментарий: ${comment}`])
    }
    function handleClickNavBack () {
        navigate(-1)
    }
    function costOrder (sposob) {
        const quantity = cart.reduce((sum, item) => item.quantity + sum, 0);
        let cost = 0;
        let costDelivery = 0;
        let { freeDeliverySum, deliveryCost } = config;
        cart.forEach((item) => { cost += item.cost * item.quantity; });

        if (cost >= freeDeliverySum && sposob == 'доставка') {
            costDelivery = 0;
        } else if (cost < freeDeliverySum && sposob == 'доставка') {
            costDelivery = deliveryCost;
        }
        else {
            costDelivery = 0;
        }
        return { cost, quantity, costDelivery }
    }
    return (
        <Popup name="popup-order" classNameContainer="order__container" navigateOnClose="/">
            <div className="order">
                <h3 className="order__title">Оформление заказа</h3>
                {block === "user" &&
                    (<div className="form_user-block">
                        <ButtonGoBack onClick={handleClickNavBack} />
                        <FormUser onSubmit={handleSubmitFormUser} orderData={orderData} onInput={handleInput} onValid={validForm} />
                    </div>)
                }
                {block === "delivery" &&
                    (<div className="form_delivery-block">
                        <ButtonGoBack onClick={handleClickNavBack} />
                        <FormDelivery onSubmit={handleSubmitFormDelivery} orderData={orderData} onInput={handleInput} onValid={validForm} />
                    </div>)
                }
                {block === "confirm" &&
                    (<div className="form_confirm-block">
                        <ButtonGoBack onClick={handleClickNavBack} />
                        <FormConfirm onSubmit={handleSubmitFormConfirm} dataForConfirm={dataForConfirm} />
                    </div>)
                }
            </div>
        </Popup>
    )
}

export default PopupOrder