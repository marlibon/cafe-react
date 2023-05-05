import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

const FormConfirm = ({ dataForConfirm, onSubmit, onInput }) => {
    function handleSubmit (e) {
        e.preventDefault();
        onSubmit()
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
                    name="comment"
                    maxLength={402}
                    defaultValue={''}
                    className="form__input form__textarea form__input_comment"
                    onChange={onInput}
                />
                <ButtonSubmit text="Оформить заказ" isValid={true} />
            </form>
        </>
    )
}
export default FormConfirm
