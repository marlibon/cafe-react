import { api } from "./Api";

const textForTelegram = ({ orderText, currentDate, cart, number }) => {
    //получили текущую дату и время
    let contentOrder = `новый заказ №${number} с ${window.location.host} (${currentDate}):%0A%0A`;
    cart.forEach((item, i) => contentOrder += `${++i}) ${item.title}(${item.weight}): ${item.cost}₽ х ${item.quantity}шт. = ${item.quantity * item.cost}₽%0A`);
    contentOrder += `%0A`;
    orderText.forEach((item) => contentOrder += `${item} %0A`
    );
    return contentOrder;
};


function sendOrder ({ orderText, orderData, cart, orderCompleted, orderNotCompleted }) {
    const currentDate = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' });
    orderData["date"] = currentDate;
    const text = textForTelegram({ orderText, currentDate, cart, number: 1, })
    console.log(text);
    api.sendTelegramBackend(text)
        .then((res) => {
            console.log(res);
            if (!res) {
                return Promise.reject(`Ошибка получения данных`);
            } else {
                orderCompleted()
            }
        })
        .catch((err) => {
            console.log(err);
            orderNotCompleted()
        })
}
export default sendOrder;
