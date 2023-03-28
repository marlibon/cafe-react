import useFilterProducts from "../hooks/useFilterProducts"
import ProductPopularItem from "./ProductPopularItem";
import imgSliderRevBtn from "../images/slider-rev.png"
import imgSliderNextBtn from "../images/slider-next.png"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPopular = () => {
    const { productsList } = useFilterProducts('often', true)
    const containerRef = useRef();
    const itemsListRef = useRef([]);
    const [countItem, setCountItem] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        if (itemsListRef.current.length > 0 && containerRef.current) {
            const widthItem = Math.floor(itemsListRef.current[0].getBoundingClientRect().width) // ширина одного элемента
            const widthContainer = Math.floor(containerRef.current.getBoundingClientRect().width) // фактич ширина контейнера
            const quantityItemsUntilEnd = Math.floor(widthContainer / widthItem) - 1; //кол-во элементов до окончания слайдера
            if (countItem >= (itemsListRef.current.length - quantityItemsUntilEnd)) setCountItem(0); // если будущий переход не покажет новые элементы, сбрасываем счетчик и показываем первый элемент
        }
        (itemsListRef.current[countItem]) && itemsListRef.current[countItem].scrollIntoView({ block: "nearest", inline: "start", behavior: "smooth" }); // переход
    }, [countItem])

    function countNext () {
        setCountItem(currentCount => currentCount + 1)
    }

    function countPrev () {
        setCountItem(currentCount => currentCount - 1)
        countItem < 0 && setCountItem(itemsListRef.current.length);
    }
    function handleClick (id) {
        navigate(`product/${id}`, { replace: true })
    }

    return (
        <section className="product-popular">
            <h2 className="products__title products__title_medium">
                Часто заказывают
            </h2>
            <div className="product-popular__slider">
                <ul className="product-popular__container" ref={containerRef}>
                    {/* сюда загрузятся актуальные часто заказываемые товары через JS */}
                    {productsList && productsList.map((product, index) => {
                        return (<li className="product-popular__item" key={product.id} ref={(el) => itemsListRef.current[index] = el} onClick={() => handleClick(product.id)}>
                            <ProductPopularItem  {...product} />
                        </li>)
                    })}
                </ul>
                {!countItem === 0 && (<button
                    className="product-popular__slider-button product-popular__slider-button-prev"
                    type="button"
                    onClick={countPrev}
                >
                    <img
                        src={imgSliderRevBtn}
                        alt=""
                        className="product-popular__slider-button-img"
                    />
                </button>)}
                <button
                    className="product-popular__slider-button product-popular__slider-button-next"
                    type="button"
                    onClick={countNext}
                >
                    <img
                        src={imgSliderNextBtn}
                        alt=""
                        className="product-popular__slider-button-img"
                    />
                </button>
            </div>
        </section>
    )
}

export default ProductPopular