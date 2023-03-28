import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import useGetProductDataById from "../../hooks/useGetProductDataById"
import config from "../../utils/config";
import Properties from "../elements/Properties";
import Quantity from "../elements/Quantity";
import CloseButton from "./CloseButton"
import Popup from "./Popup";

const PopupProduct = () => {
    const params = useParams();
    let idProduct = params?.id;
    const { id, title, cost, description, weight, img, properties } = useGetProductDataById(idProduct);
    const [selectedProperties, setSelectedProperties] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        document.title = `${title} - ${config.nameCompany}`;
    }, [title]);

    useEffect(() => {
        weight && cost && setSelectedProperties({ cost, weight })
    }, [weight, cost])

    useEffect(() => {
        console.log(selectedProperties.cost, quantity);
        setTotalPrice(selectedProperties.cost * quantity)
    }, [selectedProperties.cost, quantity, weight])


    console.log(quantity);
    if (!id) return "Загрузка..."
    return (
        <Popup name="popup-product">
            <div className="popup-product__container">
                <CloseButton />
                <h3 className="popup-product__title">{title}</h3>
                <div className="popup-product__description">
                    <img
                        src={img}
                        alt={description}
                        className="popup-product__img-mob"
                    />
                    <div className="popup-product__content">
                        <p className="popup-product__weight">{selectedProperties.weight}</p>
                        <p className="popup-product__opisanie">
                            {description}
                        </p>
                        {properties && <Properties properties={properties} onSelectProperties={setSelectedProperties} />}
                        <Quantity currentQuantity={quantity} onQuantity={setQuantity} />
                        <ul className="popup-product__supplements"></ul>
                    </div>
                </div>
                <button className="popup-product__add-cart">
                    Добавить в корзину за {totalPrice}р.
                </button>
                <div className="popup-product__imgzone">
                    <img
                        src={img}
                        alt={description}
                        className="popup-product__img"
                    />
                </div>
            </div>
        </Popup>
    )
}

export default PopupProduct