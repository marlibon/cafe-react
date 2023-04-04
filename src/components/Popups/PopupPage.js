import CloseButton from "./CloseButton"
import Popup from "./Popup"

const PopupPage = ({ title, children, navigateOnClose }) => {
    return (
        <Popup name="popup-page" classNameContainer="page__container" navigateOnClose={navigateOnClose}>
            <div className="page__content-popup">
                <h3 className="message__title">{title}</h3>
                {children}
            </div>
        </Popup >
    )
}

export default PopupPage