const ButtonSubmit = ({ isValid, text }) => {
    return (
        <button
            type="submit"
            name="form__submit"
            className={`form__submit-btn form__submit ${!isValid && 'form__submit-btn_disable'}`}
            disabled={!isValid}
        >
            {text}
        </button>
    )
}
export default ButtonSubmit