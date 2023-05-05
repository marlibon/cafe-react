import { useEffect, useRef, useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

const FormDelivery = ({ orderData, onInput, onSubmit, onValid }) => {
    const [validFormDelivery, setValidFormDelivery] = useState(false);
    const [delivery, setDelivery] = useState('')
    const refForm = useRef()

    function handleChange (e) {
        e.target.name === 'sposob' && setDelivery(e.target.value)
        onInput(e);
    }
    useEffect(() => {
        setValidFormDelivery(onValid(refForm.current))
    }, [orderData])
    return (
        <form name="delivery" ref={refForm} onSubmit={onSubmit}>
            <p className="form__description">Сами заберете или нужна доставка?</p>
            <fieldset className="input-radio page_visibility">
                <label htmlFor="sam" className="input-radio_label">
                    <input
                        type="radio"
                        name="sposob"
                        id="sam"
                        className="input-radio_radio"
                        required="required"
                        onChange={handleChange}
                        value="самовывоз"
                    />
                    <span className="input-radio_text">самовывоз</span>
                </label>
                <label htmlFor="city" className="input-radio_label">
                    <input
                        type="radio"
                        name="sposob"
                        id="city"
                        className="input-radio_radio"
                        value="доставка"
                        required="required"
                        onChange={handleChange}

                    />
                    <span className="input-radio_text">доставка</span>
                </label>
            </fieldset>
            {delivery === 'самовывоз' && (
                <>
                    <p className="form__description">По какому адресу заберете?</p>
                    <fieldset className="input-radio page_visibility">
                        <label htmlFor="ostr" className="input-radio_label">
                            <input
                                type="radio"
                                name="address"
                                id="ostr"
                                className="input-radio_radio"
                                defaultValue="Островского 26а"
                                required="required"
                                defaultChecked=""
                                onChange={handleChange}
                            />
                            <span className="input-radio_text">Островского 26а</span>
                        </label>
                        <label htmlFor="lenina" className="input-radio_label">
                            <input
                                type="radio"
                                name="address"
                                id="lenina"
                                className="input-radio_radio"
                                defaultValue="Ленина 22"
                                required="required"
                                onChange={handleChange}
                            />
                            <span className="input-radio_text">Ленина 22</span>
                        </label>
                    </fieldset>
                </>)}
            {delivery === 'доставка' && (
                <>
                    <p className="form__description">Напишите, пожалуйста, полный адрес</p>
                    <fieldset className="input-radio page_visibility" style={{ backgroundColor: '#fff' }}>
                        <input
                            placeholder="г.Салават, ул. ..., д. ..., кв. ..."
                            type="text"
                            id="address"
                            name="address"
                            minLength={8}
                            maxLength={102}
                            className="form__input form__input_font_small form__input_address"
                            required
                            onChange={handleChange}
                        />
                    </fieldset>
                </>)}
            <ButtonSubmit text="Далее →" isValid={validFormDelivery} />
        </form>)
}
export default FormDelivery