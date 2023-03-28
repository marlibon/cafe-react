import { useState } from "react";
import getMinCostProduct from "../utils/getMinCostProduct";
import getMinWeight from "../utils/getMinWeight";

const SupplementItem = ({ props, toggleSupplement }) => {
    const [active, setActive] = useState(false);
    const cost = getMinCostProduct(props);
    function handleClick () {
        setActive(!active)
        toggleSupplement({ cost, title: props.title, weight: getMinWeight(props) })
    }

    return (
        <li className={`supplement ${active && 'supplement_active'}`} onClick={handleClick}>
            <img className="supplement__img" src={props.img} alt={props.title} />
            <h3 className="supplement__title">{props.title}</h3>
            <p className="supplement__price">{cost}р.</p>
        </li>
    )
}
export default SupplementItem