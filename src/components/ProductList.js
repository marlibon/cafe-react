import ProductItem from "./ProductItem";

const ProductList = ({ arrayCurrentCategory }) => {
    return (
        <div className="products__items filtered-products-container">
            {arrayCurrentCategory && arrayCurrentCategory.map((product) => <ProductItem key={product.id} {...product} />)}
        </div>
    )
}

export default ProductList