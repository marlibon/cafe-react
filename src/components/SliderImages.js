import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import SliderItem from "./SliderItem";

const SliderImages = ({ imagesArray }) => {
    const navigate = useNavigate();

    function handleClick (item) {
        navigate(`/image/${item.id}`, { replace: false })
    }
    return (
        <Slider itemsArray={imagesArray} handleClick={handleClick} ComponentItem={SliderItem} />
    )
}
export default SliderImages