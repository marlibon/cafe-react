import useSetTitle from "../../hooks/useSetTitle"
import config from "../../utils/config"
import dataImageList from "../../utils/dataImageList"
import SliderImages from "../SliderImages"
import PopupPage from "./PopupPage"

const PopupContacts = () => {
    useSetTitle('Контакты')

    return (
        <PopupPage title={`Как нас найти - ${config.nameCompany}`} navigateOnClose="/">
            <SliderImages imagesArray={dataImageList} />
            <div style={{ textAlign: 'left' }}>Мы находимся в г.Салават. Адреса, где можно покушать в спокойной атмосфере или забрать самому заказанные "вкусняшки":
                <div style={{ display: 'flex', flexWrap: 'nowrap', maxHeight: '150px', }}>
                    <ul style={{ margin: '5px 20px 5px 0' }}>
                        <li>Островского 26а</li>
                        <li>Ленина 22</li>
                    </ul>
                </div>
                <p style={{ fontWeight: '500', }}>Работаем по следующему графику: {config.operatingMode.text()}</p>
                <p>Телефон для связи: <a href={`tel:${config.tel}`}>{config.tel}</a></p>
            </div>
            <h3>Наши адреса на карте:</h3>
            <iframe title="Наши адреса на карте" src="https://yandex.ru/map-widget/v1/?um=constructor%3A8afc32b0100d2fe9514d3333848aa20e5872f90fd62a077de074f4d14577a641&amp;source=constructor" width="93%" height="400" ></iframe>

        </PopupPage >
    )
}
export default PopupContacts