import Popup from "./Popups/Popup"

const Loading = () => {
    const navigateOnClose = "/"
    return (
        <Popup name="popup-message" classNameContainer="" navigateOnClose={navigateOnClose}>
            <div className="loading">
                <div className="spinner"><i></i></div>
                <p>Загрузка данных...</p>
            </div>
        </Popup >
    )
}
export default Loading