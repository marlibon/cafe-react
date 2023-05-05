import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <ul className="footer__column">
                    <li>Шеф Чебурек</li>
                    <li>
                        <Link to="/terms" className="footer__link" >Пользовательское соглашение</Link>
                    </li>
                    <li>
                        <a href="#" className="footer__link">
                            Доставка
                        </a>
                    </li>
                    <li>
                        <NavLink to="/contacts" className="footer__link" >Контакты</NavLink>
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