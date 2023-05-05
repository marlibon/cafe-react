import { useNavigate } from "react-router-dom"
import getMinCost from "../utils/getMinCostProduct"
import imageMobMenuLogo from '../images/logo__img.png'


const ProductItem = ({ id, cost, title, img, description, properties }) => {
    const navigate = useNavigate()
    const minCost = getMinCost({ cost, properties }, "от ")

    function handleClick () {
        navigate(`product/${id}`, { replace: false })
    }

    return (
        <article className="product" onClick={handleClick}>
            <img
                src={img}
                alt={title}
                className="product__img"
                style={{ backgroundImage: `url(${imageMobMenuLogo})` }}
            />
            <h3 className="product__title" >{title}</h3>
            <p className="product__description" >{description}</p>
            <div className="product__footer">
                <p className="product__price" >{minCost}₽</p>
                <button className="product__button">Выбрать</button>
            </div>
        </article>
    )
}

export default ProductItem