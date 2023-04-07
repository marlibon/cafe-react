import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

const FormConfirm = ({ dataForConfirm, onSubmit }) => {
    const [valueComment, setValueComment] = useState('')
    function handleSubmit (e) {
        e.preventDefault();
        onSubmit(valueComment)
    }
    return (
        <>
            <p className="form__description">Проверьте заполненные данные</p>
            <ul className="order__table">
                {dataForConfirm && dataForConfirm.map((item) => (<li className="order__item" key={item}>{item}</li>))}
            </ul>
            <form name="delivery" onSubmit={handleSubmit}>
                <textarea
                    placeholder="Дополнительная информация"
                    type="text"
                    id="address"
                    minLength={8}
                    maxLength={402}
                    className="form__input form__textarea form__input_comment"
                    value={valueComment}
                    onChange={(e) => { setValueComment(e.target.value) }}
                />
                <ButtonSubmit text="Оформить заказ" isValid={true} />
            </form>
        </>
    )
}
export default FormConfirm