const config = {
    nameCompany: "Кафе Шеф Чебурек",
    city: "г.Салават",
    tel: "+7(987)240-15-55",
    operatingMode: {
        startWorkHour: '10',
        startWorkMinute: '00',
        endWorkHour: '22',
        endWorkMinute: '00',
        text: function () {
            return `${this.startWorkHour}:${this.startWorkMinute}-${this.endWorkHour}:${this.endWorkMinute}`
        },
    },
    freeDeliverySum: 700,
    deliveryCost: 100,
    address: "г. Салават, Островского 26а, г.Салават, Ленина 22</span>",
    yandexMaps: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8afc32b0100d2fe9514d3333848aa20e5872f90fd62a077de074f4d14577a641&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>'
}

export default config;