import { useEffect } from "react";
import useFilterProducts from "../hooks/useFilterProducts";
import ProductList from "./ProductList";

const HandleProductList = ({ title }) => {
    const { productsList, handleFilter } = useFilterProducts();
    let countProducts;
    if (window.innerWidth > 1190) { countProducts = 4; }
    else if (window.innerWidth > 900) { countProducts = 3; }
    else if (window.innerWidth > 400) { countProducts = 2; }
    else { countProducts = 3; }
    useEffect(() => {
        handleFilter('type', title);

    }, [])
    return (
        <ProductList title={title} arrayProductsList={productsList} limit={countProducts} />
    )
}
export default HandleProductList