import { useCallback, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import useGetProductDataById from "../../hooks/useGetProductDataById"
import useSetTitle from "../../hooks/useSetTitle";
import config from "../../utils/config";
import Properties from "../elements/Properties";
import Quantity from "../elements/Quantity";
import SupplementList from "../SupplementList";
import CloseButton from "./CloseButton"
import Popup from "./Popup";
import { CartContext } from "../../contexts/CartContext";
import { addItem } from "../../utils/cartFunc";

const PopupProduct = () => {
    const params = useParams();
    let idProduct = params?.id;
    const { id, title, cost, description, weight, img, properties, type, supplements } = useGetProductDataById(idProduct);
    const [selectedProperties, setSelectedProperties] = useState({})
    const [selectedProduct, setSelectedProduct] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [addedSupplements, setAddedSupplements] = useState([]);
    const [sumSupplements, setSumSupplements] = useState(0);
    const [nameSupplements, setNameSupplements] = useState('');

    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    useSetTitle(`${type} ${title}`);

    useEffect(() => {
        cost && setSelectedProperties({ cost, weight })
    }, [cost])

    useEffect(() => {
        selectedProperties.cost && setTotalPrice(+selectedProperties.cost + +sumSupplements)
    }, [selectedProperties.cost, sumSupplements])

    const toggleSupplement = useCallback((supplement) => {
        addedSupplements.find((item) => JSON.stringify(item) === JSON.stringify(supplement))
            ? setAddedSupplements((state) => state.filter((item) => JSON.stringify(item) != JSON.stringify(supplement)))
            : setAddedSupplements([...addedSupplements, supplement])
    }, [addedSupplements])

    useEffect(() => {
        setSumSupplements(addedSupplements.reduce((acc, item) => acc + parseInt(item.cost, 10), 0))
        addedSupplements.length > 0
            ? setNameSupplements(addedSupplements.reduce((acc, item) => `${acc} ${item.title} (${item.weight});`, `. ${supplements}: `))
            : setNameSupplements('')

    }, [addedSupplements])

    useEffect(() => {
        setSelectedProduct({
            quantity,
            cost: totalPrice,
            id,
            img,
            title,
            description,
            type,
            weight: `${selectedProperties.weight}${selectedProperties.name ? ` (${selectedProperties.name})` : ''}${nameSupplements}`
        })
    }, [sumSupplements, nameSupplements, totalPrice, quantity])

    useEffect(() => {
        console.log(cart);
    }, [cart])

    function addCart () {
        const newCart = addItem(cart, selectedProduct)
        console.log(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
        navigate('/added', { replace: false })
    }
    if (!id) return "Загрузка..."
    return (
        <Popup name="popup-product" navigateOnClose="/" classNameContainer="popup-product__container popup-product__container_mobile">
            <h3 className="popup-product__title">{title}</h3>
            <div className="popup-product__description">
                <img
                    src={img}
                    alt={description}
                    className="popup-product__img-mob"
                />
                <div className="popup-product__content">
                    <p className="popup-product__weight">{selectedProperties.weight}{selectedProperties.name && ` (${selectedProperties.name})`}</p>
                    <p className="popup-product__opisanie">
                        {description}
                    </p>
                    {properties && <Properties properties={properties} onSelectProperties={setSelectedProperties} />}
                    <Quantity currentQuantity={quantity} onQuantity={setQuantity} afterText="количество: " />
                    {supplements && <SupplementList supplements={supplements} toggleSupplement={toggleSupplement} />}
                </div>
            </div>
            <button className="popup-product__add-cart" onClick={addCart}>
                Добавить в корзину за {totalPrice * quantity}р.
            </button>
            <div className="popup-product__imgzone">
                <img
                    src={img}
                    alt={description}
                    className="popup-product__img"
                />
            </div>
        </Popup>
    )
}

export default PopupProduct