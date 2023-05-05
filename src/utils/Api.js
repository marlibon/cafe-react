const TOKEN_BACKEND_ORDERS = 'fF11DSRsLUml9Pvtx8QpC1GF!6e4ze/dSc/R7jZwDBxC15jwwhaerpNYlG5V';
export class Api {
  constructor(options) {
    this._headers = options.headers;
    // это корректный для шефчебурек. а ниже это питстоп this._serverTelegram = "https://api.telegram.org/bot6128124968:AAEsrI21MpH-C_0qSfrF4eDOcMEBrst3WYQ/sendMessage?chat_id=-1001857657187&parse_mode=html"
    //this._serverTelegram = "https://api.telegram.org/bot5506734715:AAGYKstSIFt0GGWmthQ8_ScDOqHnQmAbVtU/sendMessage?chat_id=-1001698638520&parse_mode=html";
    this._urlBackServerForTelegram = "https://shefcheburek.store/back/sendMessageTelegram.php"
  }

  sendTelegramBackend = (message = 'пустое сообщение') => {
    return fetch(this._urlBackServerForTelegram, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': TOKEN_BACKEND_ORDERS
      },
    })
      .then(data => data.json());

  };

  sendTelegram = (message) => {

    const token = "5506734715:AAGYKstSIFt0GGWmthQ8_ScDOqHnQmAbVtU";
    const chatId = -1001698638520;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;


    return fetch(`${url}&text=${message}`, {
      headers: this._headers,
    }).then(this._getResponseData)
  }


  sendBackendOrder (data) {
    return fetch('https://shefcheburek.ru/back/saveOrder.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${TOKEN_BACKEND_ORDERS}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else if (response.status === 401) {
          console.error('Ошибка авторизации');
        } else {
          console.error('Произошла ошибка');
          Promise.reject(`Ошибка: ${response.status}`)
        }
      })

  }
  getBackendOrders (query) {
    fetch(`https://shefcheburek.ru/back/getData.php?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': TOKEN_BACKEND_ORDERS,
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  search (searchField, searchQuery) {
    fetch(`https://shefcheburek.ru/back/search.php?query=${searchQuery}&field=${searchField}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': TOKEN_BACKEND_ORDERS,
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  }

  _getResponseData = res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '53eceee5-1c39-4ee0-babf-ca8a3ddb3e6e',
    'Content-Type': 'application/json',
  }
})
