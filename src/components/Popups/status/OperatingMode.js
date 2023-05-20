import useSetTitle from "../../../hooks/useSetTitle";
import checkWorkTime from "../../../utils/checkWorkTime"
import config from "../../../utils/config"
import CloseButton from "../CloseButton";

const OperatingMode = ({ isOpen, onOpen }) => {
    const statusWorking = checkWorkTime();

    function handleClick (e) {
        e.preventDefault();
        e.currentTarget === e.target && onOpen(false)
    }
    return (
        <section className={`popup popup-message ${isOpen && 'popup_opened'}`} onClick={handleClick}>
            <div className="message__container">
                <button className="popup__close" onClick={handleClick} ></button>
                <div className="message">
                    <h3 className="message__title">Упс! Мы сейчас закрыты!</h3>
                    <p>Наше рабочее время {config.operatingMode.text()}, а заказы на текущий день принимаем до {config.operatingMode.textEndTime()}.</p>
                    <p>Заказы, оформленные после {config.operatingMode.textEndTime()} будут исполнены на следующий рабочий день.</p>
                    <p>До начала исполнения заказов осталось {statusWorking}</p>
                </div>
            </div>
        </section>

    )

}
export default OperatingMode
