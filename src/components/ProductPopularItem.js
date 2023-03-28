import getMinCost from "../utils/getMinCostProduct"

const ProductPopularItem = ({ cost, title, img, description, properties }) => {
    const minCost = getMinCost({ cost, properties }, "от ")
    return (<>
        <img src={img} alt={`фото товара: часто заказывают ${title} - ${description}`} className="product-popular__img" />
        <div className="product-popular__content">
            <h3 className="product-popular__title" >{title}</h3>
            <p className="product-popular__price" >{minCost}₽</p>
        </div>
    </>
    )
}

export default ProductPopularItem