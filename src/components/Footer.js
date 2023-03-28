
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <ul className="footer__column">
                    <li>Шеф Чебурек</li>
                    <li>
                        <a href="#" className="/terms">
                            Пользовательское соглашение
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">
                            Доставка
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">
                            Контакты
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">
                            Акции
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">
                            Вакансии
                        </a>
                    </li>
                </ul>
                <ul className="footer__column">
                    <li>Этот сайт</li>
                    <li>
                        <a href="#" className="footer__link feedback-link" data-name="error">
                            Нашли ошибку?
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer__link feedback-link" data-name="letter">
                            Письмо директору
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer__link feedback-link" data-name="site">
                            Хочу такой же сайт!
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer