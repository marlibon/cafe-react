import Popup from "./Popup";
import CloseButton from "./CloseButton"
import { NavLink } from "react-router-dom";

const PopupOrder = ({ isOpen }) => {
    return (
        <Popup name="popup-order">
            <div className="order__container">
                <CloseButton />
                <div className="order">
                    <h3 className="order__title">Оформление заказа</h3>
                    <div className="form_user-block">
                        <NavLink to="/cart"
                            className="form__submit-btn form__submit-btn_color_white form_go-cart"
                        >
                            ← вернуться в корзину
                        </NavLink>
                        <form name="form_user-block" className="form form_user-block">
                            <input
                                type="text"
                                placeholder="Имя"
                                id="name"
                                className="form__input form__input_name"
                                minLength={2}
                                maxLength={40}
                                required=""
                            />
                            <span className="form__error name-error" />
                            <input
                                placeholder="Телефон"
                                type="tel"
                                id="phone"
                                minLength={10}
                                className="form__input form__input_phone"
                                required=""
                            />
                            <span className="form__error phone-error" />
                            <input
                                placeholder="валидация"
                                type="tel"
                                id="phoneValid"
                                minLength={11}
                                maxLength={12}
                                className="form__input form__input_phone"
                                style={{ display: "none" }}
                                required=""
                            />
                            <label className="container">
                                Принимаю{" "}
                                <a href="/terms" target="_blank">
                                    Пользовательское соглашение
                                </a>
                                <input type="checkbox" defaultChecked="checked" />
                                <span className="checkmark" />
                            </label>
                            <button
                                type="submit"
                                name="form__submit"
                                className="form__submit-btn form__submit"
                            >
                                Далее →
                            </button>
                        </form>
                    </div>
                    <div className="form_delivery-block" style={{ display: "none" }}>
                        <button
                            type="button"
                            className="form__submit-btn form__submit-btn_color_white form_go-user-block"
                        >
                            ← вернуться назад
                        </button>
                        <p className="form__description">Сами заберете или нужна доставка?</p>
                        <form name="sposob" className="input-radio page_visibility">
                            <label htmlFor="sam" className="input-radio_label">
                                <input
                                    type="radio"
                                    name="sposob"
                                    id="sam"
                                    className="input-radio_radio"
                                    defaultValue="самовывоз"
                                    required="required"
                                />
                                <span className="input-radio_text">самовывоз</span>
                            </label>
                            <label htmlFor="city" className="input-radio_label">
                                <input
                                    type="radio"
                                    name="sposob"
                                    id="city"
                                    className="input-radio_radio"
                                    defaultValue="доставка"
                                    required="required"
                                />
                                <span className="input-radio_text">доставка</span>
                            </label>
                        </form>
                        <div
                            className="form form_delivery-block_filial"
                            style={{ padding: 0 }}
                        >
                            <p className="form__description">По какому адресу заберете?</p>
                            <form name="filial" className="input-radio page_visibility">
                                <label htmlFor="ostr" className="input-radio_label">
                                    <input
                                        type="radio"
                                        name="filial"
                                        id="ostr"
                                        className="input-radio_radio"
                                        defaultValue="Островского 26а"
                                        required="required"
                                        defaultChecked=""
                                    />
                                    <span className="input-radio_text">Островского 26а</span>
                                </label>
                                <label htmlFor="lenina" className="input-radio_label">
                                    <input
                                        type="radio"
                                        name="filial"
                                        id="lenina"
                                        className="input-radio_radio"
                                        defaultValue="Ленина 22"
                                        required="required"
                                    />
                                    <span className="input-radio_text">Ленина 22</span>
                                </label>
                            </form>
                        </div>
                        <form name="address" className="form address">
                            <div>
                                <p className="form__description">
                                    Напишите, пожалуйста, полный адрес
                                </p>
                                <input
                                    placeholder="г.Салават, ул. ..., д. ..., кв. ..."
                                    type="text"
                                    id="address"
                                    minLength={8}
                                    maxLength={102}
                                    className="form__input form__input_font_small form__input_address"
                                    required=""
                                />
                                <span className="form__error address-error" />
                            </div>
                            <button
                                type="submit"
                                name="form__submit"
                                className="form__submit-btn form__submit"
                            >
                                Далее →
                            </button>
                        </form>
                    </div>
                    <div className="form_confirm-block" style={{ display: "none" }}>
                        <button
                            type="button"
                            className="form__submit-btn form__submit-btn_color_white form_go-user-block"
                        >
                            ← вернуться назад
                        </button>
                        <p className="form__description">Проверьте заполненные данные</p>
                        <ul className="order__table"></ul>
                        <textarea
                            placeholder="Дополнительная информация"
                            type="text"
                            id="address"
                            minLength={8}
                            maxLength={402}
                            className="form__input form__textarea form__input_comment"
                            defaultValue={""}
                        />
                        <button
                            type="submit"
                            name="form__submit"
                            className="form__submit-btn form__submit"
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default PopupOrder