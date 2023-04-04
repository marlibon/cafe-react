import imgSliderRevBtn from "../images/slider-rev.png"
import imgSliderNextBtn from "../images/slider-next.png"
import { useEffect, useRef, useState } from "react";

const Slider = ({ itemsArray, handleClick, ComponentItem }) => {
    const containerRef = useRef();
    const itemsListRef = useRef([]);
    const [countItem, setCountItem] = useState(0)
    const [positionButtonTopPx, setPositionButtonTopPx] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            const heightContainer = Math.floor(containerRef.current?.getBoundingClientRect()?.height) // фактич высота контейнера
            heightContainer && setPositionButtonTopPx((heightContainer - 50) / 2)

        }, 1000)
    }, [])

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
    return (
        <div className="slider">
            <ul className="slider__container" ref={containerRef}>
                {itemsArray && itemsArray.map((item, index) => {
                    return (<li className="slider__item" key={index} ref={(el) => itemsListRef.current[index] = el} onClick={() => handleClick(item)}>
                        <ComponentItem  {...item} />
                    </li>)
                })}
            </ul>
            {countItem !== 0 && (<button
                className="slider__button slider__button-prev"
                type="button"
                onClick={countPrev}
                style={{ top: `${positionButtonTopPx}px` }}

            >
                <img
                    src={imgSliderRevBtn}
                    alt=""
                    className="slider__button-img"
                />
            </button>)}
            <button
                className="slider__button slider__button-next"
                type="button"
                onClick={countNext}
                style={{ top: `${positionButtonTopPx}px` }}
            >
                <img
                    src={imgSliderNextBtn}
                    alt=""
                    className="slider__button-img"
                />
            </button>
        </div>
    )
}
export default Slider