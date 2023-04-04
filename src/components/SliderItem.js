const SliderItem = ({ img, description }) => {

    return (<>
        <img src={img} alt={`фото: ${description}`} className="slider__img" />
    </>
    )
}

export default SliderItem