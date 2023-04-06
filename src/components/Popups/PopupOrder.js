import Popup from "./Popup";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import useSetTitle from "../../hooks/useSetTitle";
import { useContext, useEffect, useState } from "react";
import ButtonGoBack from "../elements/ButtonGoBack";
import ButtonSubmit from "../elements/ButtonSubmit";
import FormDelivery from "../elements/FormDelivery";
import FormUser from "../elements/FormUser";
import OrderTable from "../elements/OrderTable";

const PopupOrder = () => {
    useSetTitle('Оформление заказа');
    const { cart } = useContext(CartContext)
    const params = useParams()
    const block = params?.block;

    const navigate = useNavigate();
    const [validFormUser, setValidFormUser] = useState(false)
    const [delivery, setDelivery] = useState({})

    // данные с формы
    const [orderData, setOrderData] = useState({})

    function validForm (form) {
        if (form.tagName !== 'FORM') return false;
        return ![...form.elements].some(element => element.validity.valid !== true);
    }
    useEffect(() => {
        console.log(orderData, cart);

    }, [orderData, delivery])



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
        navigate('/order/confirm', { replace: false })
    }
    function handleClickNavBack () {
        navigate(-1)
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
                        <p className="form__description">Проверьте заполненные данные</p>
                        <OrderTable orderData={orderData} />
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
                    </div>)
                }
            </div>
        </Popup>
    )
}

export default PopupOrder