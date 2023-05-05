import { useEffect, useRef, useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import Inputmask from 'inputmask';
const FormUser = ({ orderData, onInput, onSubmit, onValid }) => {
    const [validFormUser, setValidFormUser] = useState(false);
    const refForm = useRef()
    const inputRef = useRef(null);
    useEffect(() => {
        Inputmask({ mask: '+7(999)999-99-99' }).mask(inputRef.current);
    }, []);

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
                id="phone"
                name="phone"
                className="form__input form__input_phone"
                required
                // minLength={11}
                // maxLength={11}
                pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                ref={inputRef}
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
