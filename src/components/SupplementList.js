import useFilterProducts from "../hooks/useFilterProducts";
import SupplementItem from "./SupplementItem";
const SupplementList = ({ supplements, toggleSupplement }) => {
    const { productsList } = useFilterProducts('type', supplements)
    return (
        <>
            <h3 className="product__title">Вкусные добавки:</h3>
            <ul className="popup-product__supplements">
                {productsList.map((item) => <SupplementItem key={item.id} props={item} toggleSupplement={toggleSupplement} />)}

            </ul>
        </>
    )
}
export default SupplementList