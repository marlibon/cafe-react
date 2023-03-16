const data = [
    {
        id: 1,
        title: "Мраморная говядина",
        cost: null,
        description: "мраморная говядина, лук, перец молотый, соль",
        weight: "",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/1.jpg",
        often: true,
        properties: {
            1: {
                name: "маленький",
                cost: "70",
                weight: "вес: 100 г"
            },
            2: {
                name: "обычный",
                cost: "110",
                weight: "вес: 200 г"
            },
            3: {
                name: "большой",
                cost: "190",
                weight: "вес: 360 г"
            }
        },
        supplements: "Добавки в чебурек",
    },
    {
        id: 2,
        title: "Говядина с халапенью",
        cost: 130,
        description: "мраморная говядина, халапенью,  лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/2.jpg",
        often: true,
        properties: null,
        supplements: "Добавки в чебурек",
    },
    {
        id: 3,
        title: "Свинина-говядина",
        cost: null,
        description: "фарш из свинины и говядины, лук, перец молотый, соль",
        weight: "",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/3.jpg",
        often: false,
        properties: {
            1: {
                name: "маленький",
                cost: "70",
                weight: "вес: 100 г"
            },
            2: {
                name: "обычный",
                cost: "100",
                weight: "вес: 200 г"
            },
            3: {
                name: "большой",
                cost: "180",
                weight: "вес: 360 г"
            }
        },
        supplements: "Добавки в чебурек",
    },
    {
        id: 4,
        title: "Курица",
        cost: null,
        description: "фарш из куриного филе,  лук, перец молотый, соль",
        weight: "",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/4.jpg",
        often: true,
        properties: {
            1: {
                name: "маленький",
                cost: "70",
                weight: "вес: 100 г"
            },
            2: {
                name: "обычный",
                cost: "100",
                weight: "вес: 200 г"
            }
        },
        supplements: "Добавки в чебурек",
    },
    {
        id: 5,
        title: "Курица по-азиатски",
        cost: 110,
        description: "фарш из куриного филе, кисло-сладкий соус,  лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/5.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в чебурек",
    },
    {
        id: 6,
        title: "Курица и грибы",
        cost: 120,
        description: "фарш из куриного филе, шампиньоны,  лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/6.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в чебурек",
    },
    {
        id: 7,
        title: "Жульен",
        cost: 140,
        description: "фарш из куриного филе, шампиньоны, сыр моцарелла,  лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/7.jpg",
        often: true,
        properties: null,
        supplements: "Добавки в чебурек",
    },
    {
        id: 8,
        title: "Солянка",
        cost: 140,
        description: "охотничьи колбаски, ветчина, сосиска, аджика, кетчуп",
        weight: "вес: 200 г",
        type: "Чебуреки с мясом",
        img: "https://shefcheburek.ru/images/products/8.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в чебурек",
    },
    {
        id: 9,
        title: "Мраморная говядина - миничебуреки",
        cost: 120,
        description: "мраморная говядина, лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Миничебуреки 5шт.",
        img: "https://shefcheburek.ru/images/products/9.jpg",
        often: true,
        properties: null
    },
    {
        id: 10,
        title: "Свинина-говядина - миничебуреки",
        cost: 120,
        description: "фарш из свинины и говядины, лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Миничебуреки 5шт.",
        img: "https://shefcheburek.ru/images/products/10.jpg",
        often: false,
        properties: null
    },
    {
        id: 11,
        title: "Курица - миничебуреки",
        cost: 120,
        description: "фарш из куриного филе,  лук, перец молотый, соль",
        weight: "вес: 200 г",
        type: "Миничебуреки 5шт.",
        img: "https://shefcheburek.ru/images/products/11.jpg",
        often: true,
        properties: null
    },
    {
        id: 12,
        title: "С картофелем",
        cost: null,
        description: "картофель, лук жареный, соль",
        weight: "",
        type: "Чебуреки с картофелем",
        img: "https://shefcheburek.ru/images/products/12.jpg",
        often: false,
        properties: {
            1: {
                name: "маленький",
                cost: "60",
                weight: "вес: 100 г"
            },
            2: {
                name: "обычный",
                cost: "80",
                weight: "вес: 200 г"
            }
        }
    },
    {
        id: 13,
        title: "С картофелем и грибами",
        cost: 90,
        description: "картофель, лук жареный, грибы, соль",
        weight: "",
        type: "Чебуреки с картофелем",
        img: "https://shefcheburek.ru/images/products/13.jpg",
        often: false,
        properties: null
    },
    {
        id: 14,
        title: "Картофель с сосиской",
        cost: 100,
        description: "картофель, сосиска, лук жареный, соль",
        weight: "",
        type: "Чебуреки с картофелем",
        img: "https://shefcheburek.ru/images/products/14.jpg",
        often: false,
        properties: null
    },
    {
        id: 15,
        title: "Сыр-клубника",
        cost: 120,
        description: "сыр моцарелла, клубничный джем",
        weight: "вес: 200 г",
        type: "Сладкие чебуреки",
        img: "https://shefcheburek.ru/images/products/15.jpg",
        often: false,
        properties: null
    },
    {
        id: 16,
        title: "Банан-клубника",
        cost: 100,
        description: "банан, клубничный джем",
        weight: "вес: 200 г",
        type: "Сладкие чебуреки",
        img: "https://shefcheburek.ru/images/products/16.jpg",
        often: false,
        properties: null
    },
    {
        id: 17,
        title: "Банан-шоколад",
        cost: 100,
        description: "банан, молочный шоколад",
        weight: "вес: 200 г",
        type: "Сладкие чебуреки",
        img: "https://shefcheburek.ru/images/products/17.jpg",
        often: false,
        properties: null
    },
    {
        id: 18,
        title: "Яблоко-корица",
        cost: 100,
        description: "яблоко, мед. Корица",
        weight: "вес: 200 г",
        type: "Сладкие чебуреки",
        img: "https://shefcheburek.ru/images/products/18.jpg",
        often: false,
        properties: null
    },
    {
        id: 19,
        title: "Миничебуреки 3шт.",
        cost: 60,
        description: "малиновый джем, клубничный, персиковый",
        weight: "",
        type: "Сладкие чебуреки",
        img: "https://shefcheburek.ru/images/products/19.jpg",
        often: true,
        properties: null
    },
    {
        id: 20,
        title: "Вишня + творожный сыр",
        cost: 80,
        description: "творожный сыр, вишневый джем",
        weight: "вес: 100 г",
        type: "Сладкие чебуреки",
        img: "https://shefcheburek.ru/images/products/20.jpg",
        often: false,
        properties: null
    },
    {
        id: 21,
        title: "Сыр моцарелла",
        cost: null,
        description: "сыр моцарелла",
        weight: "",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/21.jpg",
        often: false,
        properties: {
            1: {
                name: "маленький",
                cost: "80",
                weight: "вес: 100 г"
            },
            2: {
                name: "обычный",
                cost: "120",
                weight: "вес: 200 г"
            }
        }
    },
    {
        id: 22,
        title: "Двойной сыр",
        cost: 130,
        description: "сыр моцарелла с добавлением творожного сыра",
        weight: "вес: 200 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/22.jpg",
        often: false,
        properties: null
    },
    {
        id: 23,
        title: "Сыр сулугуни",
        cost: 80,
        description: "сыр сулугуни",
        weight: "вес: 100 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/23.jpg",
        often: false,
        properties: null
    },
    {
        id: 24,
        title: "Сулугуни с зеленью",
        cost: 120,
        description: "сыр сулугуни с добавлением укропа и петрушки",
        weight: "вес: 200 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/24.jpg",
        often: false,
        properties: null
    },
    {
        id: 25,
        title: "Сыр ветчина",
        cost: 130,
        description: "ветчина с сыром",
        weight: "вес: 200 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/25.jpg",
        often: false,
        properties: null
    },
    {
        id: 26,
        title: "Чебупицца",
        cost: 130,
        description: "сыр моцарелла, ветчина, итальянский кетчуп",
        weight: "вес: 200 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/26.jpg",
        often: false,
        properties: null
    },
    {
        id: 27,
        title: "Сыр грибы",
        cost: 130,
        description: "сыр моцарелла с добавлением грибов",
        weight: "вес: 200 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/27.jpg",
        often: false,
        properties: null
    },
    {
        id: 28,
        title: "Охотничьи колбаски",
        cost: 140,
        description: "охотничьи колбаски, сыр моцарелла, аджика",
        weight: "вес: 200 г",
        type: "Чебуреки с сыром",
        img: "https://shefcheburek.ru/images/products/28.jpg",
        often: false,
        properties: null
    },
    {
        id: 29,
        title: "Пельмени отварные",
        cost: 150,
        description: "свинина-говядина, лук, перец, соль",
        weight: "вес: 200 г",
        type: "Пельмени, вареники",
        img: "https://shefcheburek.ru/images/products/29.jpg",
        often: false,
        properties: null,
        supplements: "Соусы",
    },
    {
        id: 30,
        title: "Вареники",
        cost: 120,
        description: "картофель, грибы, соль",
        weight: "вес: 200 г",
        type: "Пельмени, вареники",
        img: "https://shefcheburek.ru/images/products/30.jpg",
        often: false,
        properties: null,
        supplements: "Соусы",
    },
    {
        id: 31,
        title: "Картофель фри",
        cost: null,
        description: "",
        weight: "",
        type: "Снеки",
        img: "https://shefcheburek.ru/images/products/31.png",
        often: false,
        properties: {
            1: {
                name: "вес: 100 г",
                cost: "80",
                weight: "вес: 100 г"
            },
            2: {
                name: "вес: 200 г",
                cost: "120",
                weight: "вес: 200 г"
            }
        },
        supplements: "Соусы",
    },
    {
        id: 32,
        title: "Картофель по-деревенски",
        cost: null,
        description: "",
        weight: "",
        type: "Снеки",
        img: "https://shefcheburek.ru/images/products/32.jpg",
        often: false,
        properties: {
            1: {
                name: "вес: 100 г",
                cost: "90",
                weight: "вес: 100 г"
            },
            2: {
                name: "вес: 200 г",
                cost: "140",
                weight: "вес: 200 г"
            }
        },
        supplements: "Соусы",
    },
    {
        id: 33,
        title: "Наггетсы",
        cost: null,
        description: "",
        weight: "",
        type: "Снеки",
        img: "https://shefcheburek.ru/images/products/33.jpg",
        often: false,
        properties: {
            1: {
                name: "6 шт.",
                cost: "90",
                weight: "6 шт."
            },
            2: {
                name: "12 шт.",
                cost: "160",
                weight: "12 шт."
            }
        },
        supplements: "Соусы",
    },
    {
        id: 34,
        title: "Хворост",
        cost: 50,
        description: "",
        weight: "",
        type: "Снеки",
        img: "https://shefcheburek.ru/images/products/34.jpg",
        often: false,
        properties: {
            1: {
                name: "сладкий",
                cost: "50",
                weight: "сладкий"
            },
            2: {
                name: "соленый",
                cost: "50",
                weight: "соленый"
            }
        },
        supplements: "Соусы",
    },
    {
        id: 35,
        title: "Гренки+чесночный соус",
        cost: 150,
        description: "",
        weight: "",
        type: "Снеки",
        img: "https://shefcheburek.ru/images/products/35.jpg",
        often: false,
        properties: null
    },
    {
        id: 36,
        title: "Горчичный соус",
        cost: 25,
        description: "",
        weight: "",
        type: "Соусы",
        img: "https://shefcheburek.ru/images/products/36.jpg",
        often: false,
        properties: null
    },
    {
        id: 37,
        title: "Кисло-сладкий соус",
        cost: 25,
        description: "",
        weight: "",
        type: "Соусы",
        img: "https://shefcheburek.ru/images/products/37.jpg",
        often: false,
        properties: null
    },
    {
        id: 38,
        title: "Чесночный соус",
        cost: 25,
        description: "",
        weight: "",
        type: "Соусы",
        img: "https://shefcheburek.ru/images/products/38.jpg",
        often: false,
        properties: null
    },
    {
        id: 39,
        title: "Сырный соус",
        cost: 25,
        description: "",
        weight: "",
        type: "Соусы",
        img: "https://shefcheburek.ru/images/products/39.jpg",
        often: false,
        properties: null
    },
    {
        id: 40,
        title: "Кетчуп",
        cost: 25,
        description: "",
        weight: "",
        type: "Соусы",
        img: "https://shefcheburek.ru/images/products/40.jpg",
        often: false,
        properties: null
    },
    {
        id: 41,
        title: "Соус барбекю",
        cost: 25,
        description: "",
        weight: "",
        type: "Соусы",
        img: "https://shefcheburek.ru/images/products/41.jpg",
        often: false,
        properties: null
    },
    {
        id: 42,
        title: "Чай",
        cost: 30,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/42.jpg",
        often: true,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 43,
        title: "Кофе 3 в 1",
        cost: 30,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/43.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 44,
        title: "Капучино",
        cost: null,
        description: "",
        weight: "",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/44.jpg",
        often: false,
        properties: {
            1: {
                name: "0,2 л",
                cost: "100",
                weight: "0,2 л"
            },
            2: {
                name: "0,3 л",
                cost: "130",
                weight: "0,3 л"
            }
        },
        supplements: "Добавки в напитки",
    },
    {
        id: 45,
        title: "Латте",
        cost: null,
        description: "",
        weight: "",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/45.jpg",
        often: false,
        properties: {
            1: {
                name: "0,2 л",
                cost: "120",
                weight: "0,2 л"
            },
            2: {
                name: "0,3 л",
                cost: "150",
                weight: "0,3 л"
            }
        },
        supplements: "Добавки в напитки",
    },
    {
        id: 46,
        title: "Американо",
        cost: 100,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/46.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 47,
        title: "Эспрессо",
        cost: 70,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/47.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 48,
        title: "Флет Уайт",
        cost: 100,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/48.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 49,
        title: "Горячий шоколад",
        cost: 80,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/49.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 50,
        title: "Мокачино",
        cost: 100,
        description: "",
        weight: "0,2 л",
        type: "Горячие напитки",
        img: "https://shefcheburek.ru/images/products/50.jpg",
        often: false,
        properties: null,
        supplements: "Добавки в напитки",
    },
    {
        id: 51,
        title: "Коктейль",
        cost: 129,
        description: "ванильный, клубничный, шоколадный",
        weight: "",
        type: "Холодные напитки",
        img: "https://shefcheburek.ru/images/products/51.jpg",
        often: false,
        properties: null
    },
    {
        id: 52,
        title: "Лимонад",
        cost: 40,
        description: "дюшес",
        weight: "",
        type: "Холодные напитки",
        img: "https://shefcheburek.ru/images/products/52.jpg",
        often: false,
        properties: null
    },
    {
        id: 53,
        title: "Мраморная говядина",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/53.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 54,
        title: "Свинина-говядина",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/54.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 55,
        title: "Курица",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/55.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 56,
        title: "Сыр моцарелла",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/56.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "50",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "70",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 57,
        title: "Сыр сулугуни",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/57.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "50",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "70",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 58,
        title: "Творожный сыр",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/58.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 59,
        title: "Колбаски",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/59.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 60,
        title: "Ветчина",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/60.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 61,
        title: "Грибы",
        cost: null,
        description: "",
        weight: "",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/61.png",
        often: false,
        properties: {
            1: {
                name: "30 г",
                cost: "30",
                weight: "вес: 30 г"
            },
            2: {
                name: "50 г",
                cost: "50",
                weight: "вес: 50 г"
            }
        }
    },
    {
        id: 62,
        title: "Аджика",
        cost: 15,
        description: "",
        weight: "вес: 20г",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/62.png",
        often: false,
        properties: null
    },
    {
        id: 63,
        title: "Зелень",
        cost: 10,
        description: "",
        weight: "вес: 10г",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/63.png",
        often: false,
        properties: null
    },
    {
        id: 64,
        title: "Халапеньо",
        cost: 20,
        description: "",
        weight: "вес: 10г",
        type: "Добавки в чебурек",
        img: "https://shefcheburek.ru/images/products/64.png",
        often: false,
        properties: null
    },
    {
        id: 65,
        title: "Молоко",
        cost: 10,
        description: "",
        weight: "",
        type: "Добавки в напитки",
        img: "https://shefcheburek.ru/images/products/65.jpg",
        often: false,
        properties: null
    },
    {
        id: 66,
        title: "Лимон",
        cost: 10,
        description: "",
        weight: "",
        type: "Добавки в напитки",
        img: "https://shefcheburek.ru/images/products/66.jpg",
        often: false,
        properties: null
    },
    {
        id: 67,
        title: "Пончик",
        cost: 20,
        description: "",
        weight: "",
        type: "Добавки в напитки",
        img: "https://shefcheburek.ru/images/products/67.jpg",
        often: false,
        properties: null
    }
];
const dataProductList = [];
/*fetch("http://pitstopslv.ru/json.json", {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "text/json;charset=UTF-8",
  },
  mode: "no-cors",
})
  .then((response) => response.json())
  .then((datas) => console.log(datas))
  .catch((err) => console.log(err));*/

Object.keys(data).forEach((element) => {
    dataProductList.push(data[element]);
});

export default dataProductList;