import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ arrayProductsList, title, limit }) => {
    const [productsList, setProductsList] = useState([]);
    const [countRemainingProducts, setCountRemainingProducts] = useState(0)
    const [limitProducts, setLimitProducts] = useState(limit)
    useEffect(() => {
        const newArray = [...arrayProductsList].splice(0, limitProducts);
        setCountRemainingProducts(arrayProductsList.length - newArray.length)
        setProductsList(newArray)
    }, [limitProducts, limit, arrayProductsList])

    return (
        <section className="products">
            <h2 className="products__title" id="filter-products-title">{title}</h2>
            <div className="products__items filtered-products-container">
                {productsList && productsList.map((product) => <ProductItem key={product.id} {...product} />)}
            </div>
            {countRemainingProducts ? (<button className="product__button" onClick={() => setLimitProducts(9999)}>показать еще ({countRemainingProducts})</button>) : ''}
        </section>
    )
}

export default ProductList