const updateWas = "Добавление новых слотов было: 06.07.26";
const ordersDatabase = [
  /* ШАБЛОН
  {
    nameRu: "Название",
    nameEn: "Название",
    orderRemark: "Тип",
    cardType: "order-test",
    items: [
      {
        nickname: "Имя",
        slot: "0",
        date: "00.00.26",
      },
    ],
  },
	*/

  //#region ~В процессе~
  {
    nameRu: "Шрек навсегда",
    nameEn: "Shrek Forever After",
    orderRemark: "Мультфильм",
    cardType: "order-during",
    items: [
      {
        nickname: "Без имени",
        slot: "1",
        date: "Без даты",
        was: "owe",
      },
    ],
  },
  {
    nameRu: "Шрек Третий",
    nameEn: "Shrek the Third",
    orderRemark: "Мультфильм",
    cardType: "order-during",
    items: [
      {
        nickname: "Без имени",
        slot: "1",
        date: "Без даты",
        was: "owe",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 8 Сезон 1-2/12 Эпизод",
    cardType: "order-during",
    id: "order_Dexter-8",
    items: [
      {
        nickname: "Без имени",
        slot: "1", // 8 Сезон 1-2 Эпизод
        date: "Без даты",
        was: "owe",
      },
    ],
  },
  {
    nameRu: "Сто девушек, которые очень сильно тебя любят",
    nameEn: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
    orderRemark: "Аниме × Просмотрено: 3 Сезон 1-4/↻ Эпизод",
    cardType: "order-during",
    id: "order_100-nin-no-Kanojo-3",
    items: [
      {
        nickname: "Без имени",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "Без даты",
        was: "owe",
      },
    ],
  },
  {
    nameRu: "Семь смертных грехов",
    nameEn: "Nanatsu no Taizai / The Seven Deadly Sins",
    orderRemark: "Аниме × В заказе: 1 Сезон 17-24/24 Эпизод",
    cardType: "order-during",
    id: "order_Nanatsu-no-Taizai-1",
    items: [
      {
        nickname: "Podserty",
        slot: "3", // 1 Сезон 1-12 Эпизод
        date: "26.06.24",
        was: "was",
      },
      {
        nickname: "Coras",
        slot: "1", // 1 Сезон 13-16 Эпизод
        date: "29.03.25",
        was: "was",
      },
      {
        nickname: "Podserty",
        slot: "2", // 1 Сезон 17-12 Эпизод
        date: "06.08.25",
      },
    ],
  },
  {
    nameRu: "Рим",
    nameEn: "Rome",
    orderRemark: "Сериал × В заказе: 1 Сезон 11-12/12 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-during",
    id: "order_Rome-1",
    items: [
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 1-2 Эпизод
        date: "18.05.25",
        was: "was",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 3-4 Эпизод
        date: "18.05.25",
        was: "was",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 5-6 Эпизод
        date: "10.06.25",
        was: "was",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 7-8 Эпизод
        date: "10.06.25",
        was: "was",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 9-10 Эпизод
        date: "17.07.25",
        was: "was",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 11-12 Эпизод
        date: "17.07.25",
      },
    ],
  },
  {
    nameRu: "Бумажный дом",
    nameEn: "La casa de papel",
    orderRemark: "Сериал × В заказе: 2 Сезон 3-5/9 Эпизод",
    cardType: "order-during",
    id: "order_La-casa-de-papel-2",
    items: [
      {
        nickname: "lucky_god_man",
        slot: "0.5", // 2 Сезон 1 Эпизод
        date: "20.08.25",
        was: "was",
      },
      {
        nickname: "lucky_god_man",
        slot: "0.5", // 2 Сезон 2 Эпизод
        date: "28.08.25",
        was: "was",
      },
      {
        nickname: "lucky_god_man",
        slot: "1.5", // 2 Сезон 3-5 Эпизод
        date: "28.08.25",
      },
    ],
  },
  {
    nameRu: "Warhammer 40 000: Rogue Trader",
    orderRemark: "Игра",
    cardType: "order-during",
    id: "order_Rogue-Trader",
    items: [
      {
        nickname: "Ekemlyr",
        slot: "1",
        date: "29.03.26",
        was: "was",
      },
      {
        nickname: "Ekemlyr",
        slot: "1",
        date: "05.04.26",
        was: "was",
      },
      {
        nickname: "Ekemlyr",
        slot: "1",
        date: "21.04.26",
      },
      {
        nickname: "Ekemlyr",
        slot: "1",
        date: "28.04.26",
      },
    ],
  },
  {
    nameRu: "Crusader Kings III",
    orderRemark: "Игра",
    personalOrder: "user_Izida",
    cardType: "order-during",
    id: "order_Crusader-Kings-3",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "1",
        date: "06.06.26",
        was: "was",
      },
      {
        nickname: "Izida-Sama",
        slot: "1",
        date: "06.06.26",
        was: "was",
      },
      {
        nickname: "Без даты",
        slot: "3",
        date: "Без имени",
        was: "owe",
      },
    ],
  },
  {
    nameRu: "Tainted Grail: The Fall of Avalon",
    orderRemark: "Игра",
    cardType: "order-during",
    id: "order_Tainted-Grail",
    items: [
      {
        nickname: "Ториан",
        slot: "1.5",
        date: "09.07.25",
      },
    ],
  },
  {
    nameRu: "Опорный Пункт",
    nameEn: "FireBase",
    orderRemark: "Мини-Фильм",
    cardType: "order-during",
    id: "order_FireBase",
    items: [
      {
        nickname: "Ториан",
        slot: "0.25",
        date: "23.05.25",
      },
    ],
  },
  {
    nameRu: "Ракка",
    nameEn: "Rakka",
    orderRemark: "Мини-Фильм",
    cardType: "order-during",
    id: "order_Rakka",
    items: [
      {
        nickname: "Ториан",
        slot: "0.25",
        date: "23.05.25",
      },
    ],
  },
  {
    nameRu: "Целитель Адамс",
    nameEn: "Patch Adams",
    orderRemark: "Фильм",
    cardType: "order-during",
    id: "order_Patch-Adams",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "23.03.25",
      },
    ],
  },
  {
    nameRu: "Бездарная Нана",
    nameEn: "Munou na Nana",
    orderRemark: "Манга × Прочитано: 1-8/122 Главы",
    cardType: "order-during",
    id: "order_Munou-na-Nana",
    items: [
      {
        nickname: "Эклер",
        slot: "1", // 1-10 Главы
        date: "Без даты",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Дружба — это чудо",
    nameEn: "My Little Pony: Friendship is Magic",
    orderRemark: "Мультсериал",
    cardType: "order-during",
    id: "order_My-Little-Pony",
    items: [
      {
        nickname: "Эклер",
        slot: "1",
        date: "Без даты",
        was: "was",
      },
    ],
  },
  //#endregion
  //#region ~В очереди~
  {
    nameRu: "Иллюзия рая",
    nameEn: "Tengoku Daimakyou",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-13/13 Эпизод",
    personalOrder: "user_Edwin",
    cardType: "order-waiting",
    id: "order_Tengoku-Daimakyou-1",
    items: [
      {
        nickname: "Статист",
        slot: "0.5", // 1 Сезон 1-2 Эпизод
        date: "14.01.24",
      },
      {
        nickname: "Статист",
        slot: "1.5", // 1 Сезон 3-8 Эпизод
        date: "05.03.24",
      },
      {
        nickname: "Статист",
        slot: "0.5", // 1 Сезон 9-10 Эпизод
        date: "17.05.24",
      },
      {
        nickname: "Статист",
        slot: "0.5", // 1 Сезон 11-13 Эпизод
        date: "25.07.24",
      },
    ],
  },
  {
    nameRu: "Need for Speed: Most Wanted (2005)",
    orderRemark: "Игра",
    personalOrder: "user_Edwin",
    cardType: "order-waiting",
    id: "order_Most-Wanted-2005",
    items: [
      {
        nickname: "Статист",
        slot: "6",
        date: "29.05.24",
      },
      {
        nickname: "Статист",
        slot: "1",
        date: "05.07.24",
      },
    ],
  },
  {
    nameRu: "Пустые слоты",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_001",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "3",
        date: "24.08.24",
      },
    ],
  },
  {
    nameRu: "У меня нет любовницы! (А может и есть?!)",
    nameEn: "Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?)",
    orderRemark: "Аниме × В заказе: 1 Сезон 5-12/12 Эпизод",
    personalOrder: "user_Edwin",
    cardType: "order-waiting",
    id: "order_Muri-ja-Nakatta",
    items: [
      {
        nickname: "Статист",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "17.05.24",
        was: "was",
      },
      {
        nickname: "Статист",
        slot: "2", // 1 Сезон 5-12 Эпизод
        date: "26.08.24",
      },
    ],
  },
  {
    nameRu: "Пересмотр «Заклятие (Пересмотр пересмотра)»",
    orderRemark: "Пересмотр пересмотра пересмотра",
    personalOrder: "user_Edwin",
    cardType: "order-waiting",
    id: "order_Conjuring-Rewatch",
    items: [
      {
        nickname: "Статист",
        slot: "1",
        date: "27.09.24",
      },
    ],
  },
  {
    nameRu: "Золотой запас слотов на потом",
    cardType: "order-waiting",
    id: "order_002",
    items: [
      {
        nickname: "Madaofist",
        slot: "7",
        date: "17.11.24",
      },
    ],
  },
  {
    nameRu: "Слоты на потом",
    cardType: "order-waiting",
    id: "order_003",
    items: [
      {
        nickname: "Madaofist",
        slot: "4.25",
        date: "18.12.24",
      },
    ],
  },
  {
    nameRu: "South Park: The Stick of Truth",
    orderRemark: "Игра",
    cardType: "order-waiting",
    id: "order_Stick-of-Truth",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "03.04.25",
      },
    ],
  },
  {
    nameRu: "The Alters",
    orderRemark: "Игра",
    cardType: "order-waiting",
    id: "order_The-Alters",
    items: [
      {
        nickname: "Кирвин",
        slot: "2",
        date: "07.07.25",
      },
      {
        nickname: "Кирвин",
        slot: "1",
        date: "22.02.26",
      },
    ],
  },
  {
    nameRu: "Пустые слоты",
    cardType: "order-waiting",
    id: "order_004",
    items: [
      {
        nickname: "Madaofist",
        slot: "1.75",
        date: "27.07.25",
      },
    ],
  },
  {
    nameRu: "Летнее время",
    nameEn: "Summertime Render",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-5/25 Эпизод",
    cardType: "order-waiting",
    id: "order_Summertime-Render",
    items: [
      {
        nickname: "Krang",
        slot: "1.25", // 1 Сезон 1-5 Эпизод
        date: "27.07.25",
      },
    ],
  },
  {
    nameRu: "Семь смертных грехов",
    nameEn: "Nanatsu no Taizai / The Seven Deadly Sins",
    orderRemark: "Аниме × В заказе: 2 Сезон 1-16/24 Эпизод",
    cardType: "order-waiting",
    id: "order_Nanatsu-no-Taizai-2",
    items: [
      {
        nickname: "Podserty",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "06.08.25",
      },
      {
        nickname: "Podserty",
        slot: "3", // 2 Сезон 5-16 Эпизод
        date: "14.12.25",
      },
    ],
  },
  {
    nameRu: "Отбросы",
    nameEn: "Misfits",
    orderRemark: "Сериал × В заказе: 4 Сезон 1-8/8 Эпизод",
    cardType: "order-waiting",
    id: "order_Misfits-4",
    items: [
      {
        nickname: "Madaofist",
        slot: "4", // 4 Сезон 1-8 Эпизод
        date: "08.08.25",
      },
    ],
  },
  {
    nameRu: "Плутон",
    nameEn: "Pluto",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Pluto",
    items: [
      {
        nickname: "Мисти",
        slot: "0.5", // 1 Сезон 1 Эпизод
        date: "16.09.25",
      },
      {
        nickname: "Мисти",
        slot: "1.5", // 1 Сезон 2-4 Эпизод
        date: "16.02.26",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 5-6 Эпизод
        date: "17.03.26",
      },
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 7-8 Эпизод
        date: "17.05.26",
      },
    ],
  },
  {
    nameRu: "Мстители",
    nameEn: "Avengers by Jonathan Hickman",
    orderRemark: "Комикс",
    cardType: "order-waiting",
    id: "order_Avengers-Jonathan-Hickman",
    items: [
      {
        nickname: "qwarde",
        slot: "1",
        date: "28.09.25",
      },
    ],
  },
  {
    nameRu: "Готэм",
    nameEn: "Gotham",
    orderRemark: "Сериал × В заказе: 1 Сезон 1-22/22 Эпизод",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Gotham-1",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2", // 1 Сезон 1-4 Эпизод
        date: "12.10.25",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 5-6 Эпизод
        date: "25.11.25",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 7-8 Эпизод
        date: "26.12.25",
      },
      {
        nickname: "Твою мать!",
        slot: "7", // 1 Сезон 9-22 Эпизод
        date: "08.01.26",
      },
    ],
  },
  {
    nameRu: "Пантеон",
    nameEn: "Pantheon",
    orderRemark: "Мультсериал × В заказе: 1 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Pantheon-1",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "4", // 1 Сезон 1-8 Эпизод
        date: "21.10.25",
      },
    ],
  },
  {
    nameRu: "Пантеон",
    nameEn: "Pantheon",
    orderRemark: "Мультсериал × В заказе: 2 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Pantheon-2",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "4", // 2 Сезон 1-8 Эпизод
        date: "21.10.25",
      },
    ],
  },
  {
    nameRu: "Квант милосердия",
    nameEn: "Quantum of Solace",
    orderRemark: "Фильм",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Quantum-of-Solace",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "05.11.25",
      },
    ],
  },
  {
    nameRu: "Координаты «Скайфолл»",
    nameEn: "Skyfall",
    orderRemark: "Фильм",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Skyfall",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "05.11.25",
      },
    ],
  },
  {
    nameRu: "Франкенштейн",
    nameEn: "Frankenstein",
    orderRemark: "Фильм",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Frankenstein",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "18.11.25",
      },
    ],
  },
  {
    nameRu: "Мерцающие огни",
    nameEn: "Blinkende lygter",
    orderRemark: "Фильм",
    cardType: "order-waiting",
    id: "order_Blinkende-lygter",
    items: [
      {
        nickname: "Аноним",
        slot: "1",
        date: "18.11.25",
      },
    ],
  },
  {
    nameRu: "Разборки в стиле кунг-фу",
    nameEn: "Kung fu",
    orderRemark: "Фильм",
    cardType: "order-waiting",
    id: "order_Kung-fu",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "02.12.25",
      },
    ],
  },
  {
    nameRu: "Магическая битва: Смертельная миграция",
    nameEn: "Jujutsu Kaisen: Shimetsu Kaiyuu - Zenpen",
    orderRemark: "Аниме × В заказе: 3 Сезон 1-12/12 Эпизод",
    cardType: "order-waiting",
    id: "order_007",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2", // 3 Сезон 1-8 Эпизод
        date: "02.12.25",
      },
      {
        nickname: "Сулейка",
        slot: "1", // 3 Сезон 9-12 Эпизод
        date: "28.05.26",
      },
    ],
  },
  {
    nameRu: "Моя геройская академия 3: Миссия мировых героев",
    nameEn: "Boku no Hero Academia the Movie 3: World Heroes' Mission",
    orderRemark: "Полнометражка",
    cardType: "order-waiting",
    id: "order_My-Hero-Academia-Movie-3",
    items: [
      {
        nickname: "Podserty",
        slot: "1",
        date: "14.12.25",
      },
    ],
  },
  {
    nameRu: "Парад смерти",
    nameEn: "Death Parade",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-12/12 Эпизод",
    cardType: "order-waiting",
    id: "order_Death-Parade",
    items: [
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "14.12.25",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 5-8 Эпизод
        date: "21.01.26",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 9-12 Эпизод
        date: "20.02.26",
      },
    ],
  },
  {
    nameRu: "Паразиты",
    nameEn: "Parasite",
    orderRemark: "Фильм",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Parasite",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "14.12.25",
      },
    ],
  },
  {
    nameRu: "Оно: Добро пожаловать в Дерри",
    nameEn: "IT: Welcome to Derry",
    orderRemark: "Сериал × В заказе: 1 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Welcome-to-Derry-1",
    items: [
      {
        nickname: "Мисти",
        slot: "2", // 1 Сезон 1-4 Эпизод
        date: "17.12.25",
      },
      {
        nickname: "Мисти",
        slot: "2", // 1 Сезон 5-8 Эпизод
        date: "28.12.25",
      },
    ],
  },
  {
    nameRu: "Стометровка",
    nameEn: "Hyakuemu",
    orderRemark: "Полнометражка",
    cardType: "order-waiting",
    id: "order_Hyakuemu",
    items: [
      {
        nickname: "Ториан",
        slot: "1",
        date: "06.01.26",
      },
    ],
  },
  {
    nameRu: "Выживут только любовники",
    nameEn: "Only Lovers Left Alive",
    orderRemark: "Фильм",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Only-Lovers-Left-Alive",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "27.01.26",
      },
    ],
  },
  {
    nameRu: "Бриллиантовая рука",
    orderRemark: "Фильм",
    cardType: "order-waiting",
    id: "order_Diamond-Hand",
    items: [
      {
        nickname: "Грейрат",
        slot: "1",
        date: "17.02.26",
      },
    ],
  },
  {
    nameRu: "Гомункул",
    nameEn: "Homunculus",
    orderRemark: "Манга",
    cardType: "order-waiting",
    id: "order_Homunculus",
    items: [
      {
        nickname: "Бурят",
        slot: "4.5",
        date: "23.02.26",
      },
    ],
  },
  {
    nameRu: "Годнеслот Тарковского",
    cardType: "order-waiting",
    id: "order_Tarkovsky",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "23.02.26",
      },
    ],
  },
  {
    nameRu: "Со склонов Кокурико",
    nameEn: "Kokuriko-zaka kara",
    orderRemark: "Полнометражка",
    cardType: "order-waiting",
    id: "order_Kokuriko-zaka-kara",
    items: [
      {
        nickname: "Vlados",
        slot: "1",
        date: "26.02.26",
      },
    ],
  },
  {
    nameRu: "Монолог фармацевта",
    nameEn: "Kusuriya no Hitorigoto",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-8/24 Эпизод",
    cardType: "order-waiting",
    id: "order_Kusuriya-no-Hitorigoto",
    items: [
      {
        nickname: "Vlados",
        slot: "2", // 1 Сезон 1-8 Эпизод
        date: "26.02.26",
      },
    ],
  },
  {
    nameRu: "Пустой слот",
    cardType: "order-waiting",
    id: "order_005",
    items: [
      {
        nickname: "Аноним",
        slot: "1",
        date: "15.03.26",
      },
    ],
  },
  {
    nameRu: "Невероятное приключение ДжоДжо: Гонка «Стальной шар»",
    nameEn: "Steel Ball Run: JoJo no Kimyou na Bouken",
    orderRemark: "Аниме × В заказе: 7 Сезон 2-3 Эпизод",
    cardType: "order-waiting",
    id: "order_Steel-Ball-Run-7",
    items: [
      {
        nickname: "Sadasogir",
        slot: "0.5", // 1 Сезон 2-3 Эпизод
        date: "19.03.26",
      },
    ],
  },
  {
    nameRu: "F1: The Movie",
    orderRemark: "Фильм",
    cardType: "order-waiting",
    id: "order_F1-The-Movie",
    items: [
      {
        nickname: "Аноним",
        slot: "1",
        date: "21.03.26",
      },
    ],
  },
  {
    nameRu: "Пустые слоты",
    cardType: "order-waiting",
    id: "order_006",
    items: [
      {
        nickname: "Эклер",
        slot: "4",
        date: "25.03.26",
      },
    ],
  },
  {
    nameRu: "Марти Великолепный",
    nameEn: "Marty Supreme",
    orderRemark: "Фильм",
    cardType: "order-waiting",
    id: "order_Marty-Supreme",
    items: [
      {
        nickname: "Сатурдей",
        slot: "1",
        date: "05.04.26",
      },
    ],
  },
  {
    nameRu: "Пекло",
    nameEn: "Sunshine",
    orderRemark: "Фильм",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Sunshine",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "08.04.26",
      },
    ],
  },
  {
    nameRu: "Знакомьтесь, Джо Блэк",
    nameEn: "Meet Joe Black",
    orderRemark: "Фильм",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Meet-Joe-Black",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "21.04.26",
      },
    ],
  },
  {
    nameRu: "Потерянная комната",
    nameEn: "The Lost Room",
    orderRemark: "Сериал × В заказе: 1 Сезон 1-3/3 Эпизод",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_The-Lost-Room",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2",
        date: "05.05.26",
      },
    ],
  },
  {
    nameRu: "Таинственный лес",
    nameEn: "The Village",
    orderRemark: "Фильм",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_The-Village",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "05.05.26",
      },
    ],
  },
  {
    nameRu: "Звёздные войны. Дарт Мол: Повелитель теней",
    nameEn: "Star Wars: Maul – Shadow Lord",
    orderRemark: "Мультсериал × В заказе: 1 Сезон 1-4/10 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Maul-Shadow-Lord",
    items: [
      {
        nickname: "Мисти",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "17.05.26",
      },
    ],
  },
  {
    nameRu: "Алиса в Пограничье",
    nameEn: "Imawa no Kuni no Alice",
    orderRemark: "Манга",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Imawa-no-Kuni-no-Alice",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "3",
        date: "24.05.26",
      },
    ],
  },
  {
    nameRu: "Моя геройская академия: Вне закона",
    nameEn: "Vigilante: Boku no Hero Academia Illegals",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-13/13 Эпизод",
    cardType: "order-waiting",
    id: "order_Boku-no-Hero-Academia-Illegals",
    items: [
      {
        nickname: "Nightmare336",
        slot: "3.25",
        date: "24.05.26",
      },
    ],
  },
  {
    nameRu: "Ангельские ритмы!",
    nameEn: "Angel Beats!",
    orderRemark: "Аниме × В заказе: 1 Сезон 1-4/13 Эпизод",
    cardType: "order-waiting",
    id: "order_Angel-Beats",
    items: [
      {
        nickname: "Insomnia",
        slot: "1",
        date: "09.06.26",
      },
    ],
  },
  {
    nameRu: "Судьба/Ночь схватки: Бесконечный мир клинков",
    nameEn: "Fate/stay night: Unlimited Blade Works",
    orderRemark: "Аниме × В заказе: 1 Сезон 0-12/12 Эпизод",
    cardType: "order-waiting",
    id: "order_Unlimited-Blade-Works-1",
    items: [
      {
        nickname: "Рейч",
        slot: "1", // 1 Сезон 0-1 Эпизод
        date: "24.06.26",
      },
      {
        nickname: "Рейч",
        slot: "3", // 1 Сезон 2-12 Эпизод
        date: "01.07.26",
      },
    ],
  },
  //#endregion
  //#region ~Нужен дозаказ~
  {
    nameRu: "Южный Парк",
    nameEn: "South Park",
    orderRemark: "Мультсериал ⨯ В заказе: 3 Сезон 15/17 Эпизод",
    // personalOrder: "user_Katya",
    cardType: "order-incomplete",
    id: "order_South-Park",
    items: [
      {
        nickname: "Твою мать!",
        slot: "0.75", // 3 Сезон 1-3 Эпизод
        date: "21.04.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 4-7 Эпизод
        date: "20.05.26",
        was: "was",
      },
      {
        nickname: "₁₁Naтрий",
        slot: "0.75", // 3 Сезон 8-10 Эпизод
        date: "07.06.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 11-14 Эпизод
        date: "07.06.26",
        was: "was",
      },
      {
        nickname: "₁₁Naтрий",
        slot: "0.25", // 3 Сезон 15 Эпизод
        date: "07.06.26",
      },
    ],
  },
  {
    nameRu: "Сопрано",
    nameEn: "The Sopranos",
    orderRemark: "Сериал ⨯ Просмотрено: 3 Сезон 1-9/13 Эпизод",
    cardType: "order-incomplete",
    id: "order_Sopranos",
    items: [
      {
        nickname: "Сатурдей",
        slot: "1.5", // 3 Сезон 1-3 Эпизод
        date: "21.04.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 3 Сезон 4-5 Эпизод
        date: "12.05.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 3 Сезон 6-7 Эпизод
        date: "07.06.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 3 Сезон 8-9 Эпизод
        date: "Без даты",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Теория большого взрыва",
    nameEn: "The Big Bang Theory",
    orderRemark: "Сериал × Просмотрено: 4 Сезон 1-9/12 Эпизод",
    cardType: "order-incomplete",
    id: "order_The-Big-Bang-Theory-4",
    items: [
      {
        nickname: "Вару",
        slot: "0.25", // 4 Сезон 1 Эпизод
        date: "09.01.25",
        was: "was",
      },
      {
        nickname: "Вару",
        slot: "0.5", // 4 Сезон 2-3 Эпизод
        date: "13.01.25",
        was: "was",
      },
      {
        nickname: "Вару",
        slot: "0.25", // 4 Сезон 4 Эпизод
        date: "14.01.25",
        was: "was",
      },
      {
        nickname: "Вару",
        slot: "0.25", // 4 Сезон 5 Эпизод
        date: "15.01.25",
        was: "was",
      },
      {
        nickname: "Вару",
        slot: "1", // 4 Сезон 6-9 Эпизод
        date: "29.06.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Ван Пис",
    nameEn: "One Piece",
    orderRemark: "Аниме × Просмотрено: 1 Сезон 1-1158/↻ Эпизод",
    cardType: "order-incomplete",
    id: "order_One-Piece-Anime",
    items: [],
  },
  {
    nameRu: "Инуяшики",
    nameEn: "Inuyashiki",
    orderRemark: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/11 Эпизод",
    cardType: "order-incomplete",
    id: "order_Inuyashiki",
    items: [
      {
        nickname: "КутКин",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "25.11.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Для тебя, Бессмертный",
    nameEn: "Fumetsu no Anata e",
    orderRemark: "Аниме ⨯ Просмотрено: 2 Сезон 1-8/20 Эпизод",
    cardType: "order-incomplete",
    id: "order_To-Your-Eternity",
    items: [
      {
        nickname: "КутКин",
        slot: "1", // 2 Сезон 1-4 Эпизод
        date: "25.11.24",
        was: "was",
      },
      {
        nickname: "Мисти",
        slot: "1", // 2 Сезон 5-8 Эпизод
        date: "17.03.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Ох уж этот экстрасенс Сайки Кусуо!",
    nameEn: "Saiki Kusuo no Ψ-nan",
    orderRemark: "Аниме ⨯ Просмотрено: 1 Сезон 1-12/24 Эпизод",
    cardType: "order-incomplete",
    id: "order_Saiki-Kusuo-1",
    items: [
      {
        nickname: "Вару",
        slot: "2", // 1 Сезон 1-8 Эпизод
        date: "04.01.26",
        was: "was",
      },
      {
        nickname: "Вару",
        slot: "1", // 1 Сезон 9-12 Эпизод
        date: "18.03.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Да, я паук, и что с того",
    nameEn: "Kumo Desu ga, Nanika?",
    orderRemark: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/24 Эпизод",
    cardType: "order-incomplete",
    id: "order_Kumo-Desu-ga-Nanika",
    items: [
      {
        nickname: "Вару",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "09.01.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Драгон Болл / Драконий жемчуг",
    nameEn: "Dragon Ball",
    orderRemark: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/153 Эпизод",
    cardType: "order-incomplete",
    id: "order_Dragon-Ball-1",
    items: [
      {
        nickname: "Вару",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "22.01.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Флэш",
    nameEn: "The Flash",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-12/23 Эпизод",
    cardType: "order-incomplete",
    id: "order_The-Flash",
    items: [
      {
        nickname: "Глатон",
        slot: "2", // 1 Сезон 1-4 Эпизод
        date: "25.09.23",
        was: "was",
      },
      {
        nickname: "Глатон",
        slot: "2", // 1 Сезон 5-8 Эпизод
        date: "23.03.24",
        was: "was",
      },
      {
        nickname: "Аноним",
        slot: "1", // 1 Сезон 9-10 Эпизод
        date: "26.05.24",
        was: "was",
      },
      {
        nickname: "Сулейка",
        slot: "1", // 1 Сезон 11-12 Эпизод
        date: "22.11.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Боец Баки",
    nameEn: "Grappler Baki",
    orderRemark: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/24 Эпизод",
    cardType: "order-incomplete",
    id: "order_Grappler-Baki",
    items: [
      {
        nickname: "Сатурдей",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "02.10.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Дневники вампира",
    nameEn: "The Vampire Diaries",
    orderRemark: "Сериал ⨯ Просмотрено: 2 Сезон 1/22 Эпизод",
    cardType: "order-incomplete",
    id: "order_The-Vampire-Diaries-2",
    items: [
      {
        nickname: "Демон21",
        slot: "0.5", // 2 Сезон 1 Эпизод
        date: "06.05.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Игра в кальмара",
    nameEn: "Ojingeo geim",
    orderRemark: "Сериал ⨯ Просмотрено: 2 Сезон 1-2/7 Эпизод",
    cardType: "order-incomplete",
    id: "order_Ojingeo-geim",
    items: [
      {
        nickname: "plague_9bit",
        slot: "1", // 2 Сезон 1-2 Эпизод
        date: "09.01.25",
        was: "was",
      },
    ],
  },
  //#endregion
  //#region ~На паузе~
  {
    nameRu: "Игра лжецов",
    nameEn: "Liar Game",
    orderRemark: "Манга ⨯ 7 Слотов",
    cardType: "order-frozen",
    id: "order_Liar-Game",
    items: [
      {
        nickname: "Yukio",
        slot: "7",
        date: "01.05.24",
      },
    ],
  },
  //#endregion
  //#region ~Свапы~
  {
    nameRu_1: "Годнеслот (09.06.26 ⨯ Твою мать!)",
    nameRu_2: "Головокружение",
    nameEn_2: "Vertigo",
    orderRemark_1: "1 Слот > Фильм",
    orderRemark_2: "Свап был 15.07.26 (Годень)",
    cardType: "order-switch",
    items: [],
  },
  {
    nameRu_1: "Сверхъестественное",
    nameEn_1: "Supernatural",
    nameRu_2: "Магическая битва: Смертельная миграция",
    nameEn_2: "Jujutsu Kaisen: Shimetsu Kaiyuu - Zenpen",
    orderRemark_1: "Сериал > 2 Слота > Аниме",
    orderRemark_2: "Свап был 23.06.26 (Твою мать!)",
    personalOrder: "user_Katya",
    cardType: "order-switch",
    items: [],
  },
  {
    nameRu_1: "Need for Speed: Underground",
    nameRu_2: "Заклятие (Пересмотр пересмотра)",
    nameEn_2: "The Conjuring",
    orderRemark_1: "Игра > 1 Слот > Пересмотр стрима",
    orderRemark_2: "Свап был 03.05.26 (Статист)",
    personalOrder: "user_Edwin",
    cardType: "order-switch",
    items: [],
  },
  {
    nameRu_1: "Need for Speed: Underground",
    nameRu_2: "Goat: Мечтай по-крупному",
    orderRemark_1: "Игра > 1 Слот > Мультфильм",
    orderRemark_2: "Свап был 04.04.26 (Статист)",
    personalOrder: "user_Edwin",
    cardType: "order-switch",
    items: [],
  },
  {
    nameRu_1: "Грозовой перевал",
    nameEn_1: "Wuthering Heights",
    nameRu_2: "Плутон",
    nameEn_2: "Pluto",
    orderRemark_1: "Фильм > 1 Слот > Аниме",
    orderRemark_2: "Свап был 25.05.26 (Мисти)",
    personalOrder: "user_Misty",
    cardType: "order-switch",
    items: [],
  },
  {
    nameRu_1: "Знакомьтесь, Джо Блэк",
    nameEn_1: "Meet Joe Black",
    nameRu_2: "Проект «Конец света»",
    nameEn_2: "Project Hail Mary",
    orderRemark_1: "Фильм > 1 Слот > Фильм",
    orderRemark_2: "Свап был 25.05.26 (Мисти)",
    personalOrder: "user_Misty",
    cardType: "order-switch",
    items: [],
  },
  //#endregion
  //#region ~Просмотренное~
  {
    nameRu: "Клинок, рассекающий демонов: Бесконечный замок — Возвращение Акадзы",
    nameEn: "Kimetsu no Yaiba Movie 1: Mugenjou-hen - Akaza Sairai",
    orderRemark: "Полнометражка",
    cardType: "order-finished",
    items: [
      {
        nickname: "Демон21",
        slot: "1",
        date: "15.03.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Невеста чародея",
    nameEn: "Mahoutsukai no Yome",
    orderRemark: "Аниме × Просмотрено: 1 Сезон 1-24/24 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "25.05.25",
        was: "was",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 5-8 Эпизод
        date: "23.07.25",
        was: "was",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 9-12 Эпизод
        date: "24.08.25",
        was: "was",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 13-16 Эпизод
        date: "21.09.25",
        was: "was",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 17-20 Эпизод
        date: "21.10.25",
        was: "was",
      },
      {
        nickname: "АйзенBBC",
        slot: "1", // 1 Сезон 21-24 Эпизод
        date: "21.11.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Соколиный глаз",
    nameEn: "Hawkeye",
    orderRemark: "Сериал × Просмотрено: 1 Сезон 1-6/6 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сулейка",
        slot: "3", // 1 Сезон 1-6 Эпизод
        date: "23.05.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Пока не сыграл в ящик",
    nameEn: "The Bucket List",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "10.06.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Головокружение",
    nameEn: "Vertigo",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "09.06.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Викинги",
    nameEn: "Vikings",
    orderRemark: "Сериал × В заказе: 3 Сезон 6-10/10 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Без имени",
        slot: "5", // 1-10 Эпизод
        date: "Без даты",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Первородный грех Такопи",
    nameEn: "Takopii no Genzai",
    orderRemark: "Аниме × Просмотрено: 1 Сезон 1-6/6 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Coras",
        slot: "0.75", // 1 Сезон 1-3 Эпизод
        date: "29.07.25",
        was: "was",
      },
      {
        nickname: "Izida-Sama",
        slot: "0.75", // 1 Сезон 4-6 Эпизод
        date: "29.07.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Исчезнувшая",
    nameEn: "Gone Girl",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "17.07.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Проект «Конец света»",
    nameEn: "Project Hail Mary",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "10.06.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Громовержцы*",
    nameEn: "Thunderbolts*",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сулейка",
        slot: "1",
        date: "09.06.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "GTA Vice City: The Next-Gen Edition",
    orderRemark: "Игра",
    cardType: "order-finished",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "19.02.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "В лес, где мерцают светлячки",
    nameEn: "Hotarubi no Mori e",
    orderRemark: "Полнометражка",
    cardType: "order-finished",
    items: [
      {
        nickname: "Статист",
        slot: "0.5",
        date: "05.03.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Ещё вчера",
    nameEn: "Omohide poro poro",
    orderRemark: "Полнометражка",
    cardType: "order-finished",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "1",
        date: "30.03.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Удивительный цифровой цирк",
    nameEn: "The Amazing Digital Circus",
    orderRemark: "Мультсериал × Просмотрено: 1 Сезон 1-9/9 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Эклер",
        slot: "2.5", // 1-9 Эпизод
        date: "Без даты",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Отец",
    nameEn: "Oyaji",
    orderRemark: "Манга ⨯ Прочитано: 1-25/25 Главы",
    cardType: "order-finished",
    items: [
      {
        nickname: "1-25 Главы",
        slot: "1.5", // 1-25 Главы
        date: "Без даты",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Капитан Америка: Дивный новый мир",
    nameEn: "Captain America: Brave New World",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сулейка",
        slot: "1",
        date: "09.06.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Goat: Мечтай по-крупному",
    orderRemark: "Мультфильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Статист",
        slot: "1",
        date: "27.09.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Отверженные",
    nameEn: "Les Misérables",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "21.03.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Одинокий замок в Зазеркалье",
    nameEn: "Kagami no Kojou",
    orderRemark: "Полнометражка",
    cardType: "order-finished",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "1",
        date: "21.03.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Фантастическая четвёрка: Первые шаги",
    nameEn: "The Fantastic Four: First Steps",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Nightmare336",
        slot: "1",
        date: "09.06.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Фантастическая четверка 2: Вторжение Серебряного серфера",
    nameEn: "Fantastic Four: Rise of the Silver Surfer",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Демон21",
        slot: "1",
        date: "24.06.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Фантастическая четверка",
    nameEn: "Fantastic Four",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Демон21",
        slot: "1",
        date: "24.06.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Паук-Нуар",
    nameEn: "Spider-Noir",
    orderRemark: "Сериал × Просмотрено: 1 Сезон 1-8/8 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сулейка",
        slot: "4",
        date: "27.05.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Меч чужака",
    nameEn: "Stranger: Mukou Hadan",
    orderRemark: "Полнометражка",
    cardType: "order-finished",
    items: [
      {
        nickname: "Рандом",
        slot: "1",
        date: "21.03.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Аллея кошмаров",
    nameEn: "Nightmare Alley",
    orderRemark: "Фильм",
    cardType: "order-finished",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "11.03.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Особняк «Красная роза»",
    nameEn: "Rose Red",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-3/3 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2", // 1 Сезон 1-3 Эпизод
        date: "18.09.24",
        was: "was",
      },
    ],
  },
  //#region Сопрано
  {
    nameRu: "Сопрано",
    nameEn: "The Sopranos",
    orderRemark: "Сериал ⨯ Просмотрено: 2 Сезон 1-13/13 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сатурдей",
        slot: "0.5", // 2 Сезон 1 Эпизод
        date: "23.10.25",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 2-3 Эпизод
        date: "24.10.25",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 4-5 Эпизод
        date: "08.01.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 6-7 Эпизод
        date: "27.01.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 8-9 Эпизод
        date: "03.02.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 10-11 Эпизод
        date: "06.03.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 12-13 Эпизод
        date: "19.03.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Сопрано",
    nameEn: "The Sopranos",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-13/13 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сатурдей",
        slot: "1", // 1 Сезон 1-2 Эпизод
        date: "27.09.24",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 1 Сезон 3-4 Эпизод
        date: "18.10.24",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 1 Сезон 5-6 Эпизод
        date: "06.05.25",
        was: "was",
      },
      {
        nickname: "fudjikayashi",
        slot: "2", // 1 Сезон 7-10 Эпизод
        date: "17.06.25",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1.5", // 1 Сезон 11-13 Эпизод
        date: "23.10.25",
        was: "was",
      },
    ],
  }, //#endregion
  //#region Южный Парк
  {
    nameRu: "Южный Парк",
    nameEn: "South Park",
    orderRemark: "Мультсериал ⨯ Просмотрено: 2 Сезон 1-18/18 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Кирвин",
        slot: "0.25", // 2 Сезон 1 Эпизод
        date: "04.02.26",
        was: "was",
      },
      {
        nickname: "афкМарк",
        slot: "1", // 2 Сезон 2-5 Эпизод
        date: "06.02.26",
        was: "was",
      },
      {
        nickname: "Кирвин",
        slot: "1", // 2 Сезон 6-9 Эпизод
        date: "22.02.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 2 Сезон 10-13 Эпизод
        date: "04.03.26",
        was: "was",
      },
      {
        nickname: "Сатурдей",
        slot: "1", // 2 Сезон 14-17 Эпизод
        date: "06.03.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "0.25", // 2 Сезон 18 Эпизод
        date: "21.04.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Южный Парк",
    nameEn: "South Park",
    orderRemark: "Мультсериал ⨯ Просмотрено: 1 Сезон 1-13/13 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Сатурдей",
        slot: "1", // 1 Сезон 1-4 Эпизод
        date: "09.12.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 5-8 Эпизод
        date: "08.03.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 9-12 Эпизод
        date: "04.02.26",
        was: "was",
      },
      {
        nickname: "Кирвин",
        slot: "0.25", // 1 Сезон 13 Эпизод
        date: "04.02.26",
        was: "was",
      },
    ],
  }, //#endregion
  //#region Декстер
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 7 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Мавроди",
        slot: "1", // 7 Сезон 1-2 Эпизод
        date: "22.04.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 7 Сезон 3-4 Эпизод
        date: "29.05.26",
        was: "was",
      },
      {
        nickname: "Мавроди",
        slot: "1", // 7 Сезон 5-6 Эпизод
        date: "05.06.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 7 Сезон 7-8 Эпизод
        date: "18.06.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 7 Сезон 9-10 Эпизод
        date: "30.06.26",
        was: "was",
      },
      {
        nickname: "7с 9-12эп",
        slot: "1", // 7 Сезон 11-12 Эпизод
        date: "В уточнении",
        was: "owe",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 6 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "0.5", // 6 Сезон 1 Эпизод
        date: "11.02.26",
        was: "was",
      },
      {
        nickname: "Мавроди",
        slot: "1", // 6 Сезон 2-3 Эпизод
        date: "12.02.26",
        was: "was",
      },
      {
        nickname: "Мавроди",
        slot: "1.5", // 6 Сезон 4-6 Эпизод
        date: "06.03.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1.5", // 6 Сезон 7-9 Эпизод
        date: "17.03.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1.5", // 6 Сезон 10-12 Эпизод
        date: "22.04.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 5 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 1-2 Эпизод
        date: "25.12.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 3-4 Эпизод
        date: "06.01.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 5-6 Эпизод
        date: "08.01.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 7-8 Эпизод
        date: "27.01.26",
        was: "was",
      },
      {
        nickname: "Мавроди",
        slot: "1.5", // 5 Сезон 9-11 Эпизод
        date: "30.01.26",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "0.5", // 5 Сезон 12 Эпизод
        date: "11.02.26",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 4 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2", // 4 Сезон 1-4 Эпизод
        date: "30.09.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 4 Сезон 5-8 Эпизод
        date: "02.11.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 4 Сезон 9-10 Эпизод
        date: "10.11.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 4 Сезон 11-12 Эпизод
        date: "11.11.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 3 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Кирвин",
        slot: "1", // 3 Сезон 1-2 Эпизод
        date: "29.08.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 3-4 Эпизод
        date: "31.08.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 5-6 Эпизод
        date: "07.09.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 7-8 Эпизод
        date: "16.09.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 9-10 Эпизод
        date: "19.09.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 11-12 Эпизод
        date: "30.09.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 2 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Зеро_ИК",
        slot: "3", // 2 Сезон 1-6 Эпизод
        date: "25.10.23",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 2 Сезон 7-10 Эпизод
        date: "29.10.23",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 2 Сезон 11-12 Эпизод
        date: "21.12.23",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Зеро_ИК",
        slot: "6", // 1 Сезон 1-12 Эпизод
        date: "10.08.23",
        was: "was",
      },
    ],
  }, //#endregion
  //#region Сверхъестественное
  {
    nameRu: "Сверхъестественное",
    nameEn: "Supernatural",
    orderRemark: "Сериал, 5 Сезон 1-22/22 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 1-2 Эпизод
        date: "15.08.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 3-4 Эпизод
        date: "28.08.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 5 Сезон 5-8 Эпизод
        date: "16.09.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 9-10 Эпизод
        date: "28.09.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 11-12 Эпизод
        date: "12.10.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 13-14 Эпизод
        date: "21.10.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 5 Сезон 15-18 Эпизод
        date: "27.10.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 19-20 Эпизод
        date: "11.11.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 5 Сезон 21-22 Эпизод
        date: "18.11.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Сверхъестественное",
    nameEn: "Supernatural",
    orderRemark: "Сериал, 4 Сезон 1-22/22 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "3", // 4 Сезон 1-6 Эпизод
        date: "25.07.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 4 Сезон 7-8 Эпизод
        date: "25.07.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "3", // 4 Сезон 9-14 Эпизод
        date: "05.08.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 4 Сезон 15-18 Эпизод
        date: "06.08.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 4 Сезон 19-22 Эпизод
        date: "15.08.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Сверхъестественное",
    nameEn: "Supernatural",
    orderRemark: "Сериал, 3 Сезон 1-16/16 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "0.5", // 3 Сезон 1 Эпизод
        date: "05.06.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 3 Сезон 2-5 Эпизод
        date: "30.06.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 3 Сезон 6-9 Эпизод
        date: "15.07.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2.5", // 3 Сезон 10-14 Эпизод
        date: "20.07.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 3 Сезон 15-16 Эпизод
        date: "25.07.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Сверхъестественное",
    nameEn: "Supernatural",
    orderRemark: "Сериал, 2 Сезон 1-22/22 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1", // 2 Сезон 1-2 Эпизод
        date: "24.11.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2.5", // 2 Сезон 3-7 Эпизод
        date: "15.12.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 2 Сезон 8-9 Эпизод
        date: "22.01.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 2 Сезон 10-11 Эпизод
        date: "20.02.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 2 Сезон 12-15 Эпизод
        date: "06.04.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 2 Сезон 16-19 Эпизод
        date: "08.05.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1.5", // 2 Сезон 20-22 Эпизод
        date: "05.06.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Сверхъестественное",
    nameEn: "Supernatural",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-22/22 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "3", // 1 Сезон 1-6 Эпизод
        date: "10.05.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 1 Сезон 7-10 Эпизод
        date: "15.06.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 11-12 Эпизод
        date: "16.08.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 13-14 Эпизод
        date: "11.09.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "2", // 1 Сезон 15-18 Эпизод
        date: "18.10.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 19-20 Эпизод
        date: "01.11.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 21-22 Эпизод
        date: "09.11.24",
        was: "was",
      },
    ],
  }, //#endregion
  //#region Дневники вампира
  {
    nameRu: "Дневники вампира",
    nameEn: "The Vampire Diaries",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-22/22 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1.5", // 1 Сезон 1-3 Эпизод
        date: "09.10.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 4-5 Эпизод
        date: "18.10.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 6-7 Эпизод
        date: "26.10.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 8-9 Эпизод
        date: "01.11.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 10-11 Эпизод
        date: "24.11.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "1", // 1 Сезон 12-13 Эпизод
        date: "11.01.25",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "4.5", // 1 Сезон 14-22 Эпизод
        date: "21.01.25",
        was: "was",
      },
    ],
  }, //#endregion
  //#region Американская история ужасов
  {
    nameRu: "Американская история ужасов: Апокалипсис",
    nameEn: "American Horror Story: Apocalypse",
    orderRemark: "Сериал ⨯ Просмотрено: 8 Сезон 1-10/10 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "5", // 1 Сезон 1-10 Эпизод
        date: "25.12.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Американская история ужасов: Отель",
    nameEn: "American Horror Story: Hotel",
    orderRemark: "Сериал ⨯ Просмотрено: 5 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "6", // 1 Сезон 1-12 Эпизод
        date: "25.12.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Американская история ужасов: Шабаш",
    nameEn: "American Horror Story: Coven",
    orderRemark: "Сериал ⨯ Просмотрено: 3 Сезон 1-13/13 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "3.5", // 1 Сезон 1-7 Эпизод
        date: "28.09.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "3", // 1 Сезон 8-13 Эпизод
        date: "09.12.25",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Американская история ужасов: Психбольница",
    nameEn: "American Horror Story: Asylum",
    orderRemark: "Сериал ⨯ Просмотрено: 2 Сезон 1-13/13 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2", // 1 Сезон 1-4 Эпизод
        date: "18.05.24",
        was: "was",
      },
      {
        nickname: "Твою мать!",
        slot: "4.5", // 1 Сезон 5-13 Эпизод
        date: "08.06.24",
        was: "was",
      },
    ],
  },
  {
    nameRu: "Американская история ужасов: Дом-убийца",
    nameEn: "American Horror Story: Murder House",
    orderRemark: "Сериал ⨯ Просмотрено: 1 Сезон 1-12/12 Эпизод",
    cardType: "order-finished",
    items: [
      {
        nickname: "Твою мать!",
        slot: "6", // 1 Сезон 1-12 Эпизод
        date: "09.12.23",
        was: "was",
      },
    ],
  },
  //#endregion
];
