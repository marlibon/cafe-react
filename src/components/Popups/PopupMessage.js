import CloseButton from "./CloseButton"
import Popup from "./Popup"

const PopupMessage = ({ title, children }) => {
    return (
        <Popup name="popup-message">
            <div className="message__container">
                <CloseButton />
                <div className="message">
                    <h3 className="message__title">{title}</h3>
                    {children}
                </div>
            </div>
        </Popup>
    )
}

export default PopupMessage