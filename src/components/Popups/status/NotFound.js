import useSetTitle from "../../../hooks/useSetTitle"
import config from "../../../utils/config"
import PopupMessage from "../PopupMessage"

const NotFound = () => {
    useSetTitle('Страница не найдена')

    return (
        <PopupMessage title="Такой страницы тут не было." navigateOnClose="/">
            <p>
                К сожалению, произошла ошибка.
            </p>
            <p>Попробуйте закрыть это окошко и начать сначала.</p>
        </PopupMessage>
    )
}
export default NotFound