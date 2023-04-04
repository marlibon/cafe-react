import useFilterProducts from "../hooks/useFilterProducts"
import ProductPopularItem from "./ProductPopularItem";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";

const ProductPopular = () => {
    const { productsList } = useFilterProducts('often', true)
    const navigate = useNavigate();

    function handleClick (item) {
        navigate(`product/${item.id}`, { replace: false })
    }

    return (
        <section className="product-popular">
            <h2 className="products__title products__title_medium">
                Часто заказывают
            </h2>
            <Slider itemsArray={productsList} handleClick={handleClick} ComponentItem={ProductPopularItem} />
        </section>
    )
}

export default ProductPopular