import Popup from "./Popup"

const PopupMessage = ({ title, children, navigateOnClose }) => {
    return (
        <Popup name="popup-message" classNameContainer="message__container" navigateOnClose={navigateOnClose}>
            <div className="message">
                <h3 className="message__title">{title}</h3>
                {children}
            </div>
        </Popup >
    )
}

export default PopupMessage