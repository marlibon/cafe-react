const Quantity = ({ currentQuantity, onQuantity }) => {
    console.log(currentQuantity);
    function handleChange (e, increment) {
        e.preventDefault()
        increment ? onQuantity(value => ++value) : onQuantity(value => --value)
    }
    return (
        <form
            id="quantity"
            name="quantity"
            className="popup-product__quantity quantity"
        >
            <p className="quantity__text">количество: </p>
            <button onClick={(e) => handleChange(e, false)} className="quantity__btn quantity__btn_minus" disabled={currentQuantity <= 1}>
                -
            </button>
            <input
                type="text"
                id="quantity"
                name="quantity"
                className="quantity__input"
                value={currentQuantity}
                maxLength={2}
                min={1}
                max={99}
                readOnly=""
                onChange={() => { }}
            />
            <button onClick={(e) => handleChange(e, true)} className="quantity__btn quantity__btn_plus">+</button>
        </form>
    )
}
export default Quantity