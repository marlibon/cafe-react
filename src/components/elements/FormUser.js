import { useEffect, useRef, useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

const FormUser = ({ orderData, onInput, onSubmit, onValid }) => {
    const [validFormUser, setValidFormUser] = useState(false);
    const refForm = useRef()

    function handleChangeFormUser (e) {
    }
    useEffect(() => {
        setValidFormUser(onValid(refForm.current))
    }, [orderData])
    return (
        <form name="form_user-block" ref={refForm} className="form form_user-block" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Имя"
                id="name"
                name="userName"
                className="form__input form__input_name"
                minLength={3}
                maxLength={40}
                required
                onChange={onInput}
                defaultValue={orderData?.userName}
            />
            <input
                placeholder="Телефон"
                type="tel"
                pattern="[0-9]*"
                id="phone"
                name="phone"
                minLength={11}
                maxLength={11}
                className="form__input form__input_phone"
                required
                onChange={onInput}
                defaultValue={orderData?.phone}

            />
            <label className="container">
                Принимаю <a href="/terms" target="_blank">Пользовательское соглашение</a>
                <input type="checkbox" defaultChecked="checked" required />
                <span className="checkmark" />
            </label>
            <ButtonSubmit text="Далее →" isValid={validFormUser} />
        </form>
    )
}
export default FormUser