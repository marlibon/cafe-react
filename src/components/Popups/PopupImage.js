import { useCallback, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import useSetTitle from "../../hooks/useSetTitle";
import dataImageList from "../../utils/dataImageList"
import CloseButton from "./CloseButton";
import Popup from "./Popup";

const PopupImage = () => {
    const params = useParams();
    let idProduct = params?.id;
    const image = dataImageList.find((item) => item.id == idProduct)
    useSetTitle(image?.description)

    if (!image) return ''
    return (
        <Popup name="popup-image" navigateOnClose={-1} classNameContainer="page__container page__container_image">
            <img src={image?.img} alt={image?.description} className="popup-image" />
            <p>{image?.description}</p>
        </Popup >
    )
}
export default PopupImage