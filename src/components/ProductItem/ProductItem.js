

const ProductItem = ({ cost, title, img, description, properties }) => {
    function getMinCost () {
        const arrCost = [];
        if (properties) {
            Object.keys(properties).forEach((item) => {
                arrCost.push(properties[item].cost);
            });
            const text = "от ";
            return `${text}${Math.min(...arrCost)}`;
        } else {
            return cost;
        }
    }
    return (
        <article className="product">
            <img
                src={img}
                alt={title}
                className="product__img"
            />
            <h3 className="product__title" >{title}</h3>
            <p className="product__description" >{description}</p>
            <div className="product__footer">
                <p className="product__price" >{getMinCost()}₽</p>
                <button className="product__button">Выбрать</button>
            </div>
        </article>
    )
}

export default ProductItem