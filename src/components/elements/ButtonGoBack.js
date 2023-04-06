const ButtonGoBack = ({ onClick }) => {
    return (
        <button
            type="button"
            className="form__submit-btn form__submit-btn_color_white"

            onClick={onClick}>
            ← вернуться назад
        </button>
    )
}
export default ButtonGoBack