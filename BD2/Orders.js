const updateWas = "Добавление новых слотов было: 25.05.25";
const ordersDatabase = [
  /* ШАБЛОН
  {
    nameRu: "Название",
    nameEn: "Название",
    orderRemark: "Тип",
    personalOrder: "",
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

  //#region В процессе
  {
    nameRu: "Ван Пис",
    nameEn: "One Piece",
    orderRemark: "Аниме, 1 Сезон 1158-1164 Эпизод",
    personalOrder: "",
    cardType: "order-during",
    id: "order_One-Piece-Anime",
    items: [
      {
        nickname: "Дурко",
        slot: "1.75 + 0.25",
        date: "~14.04.26",
      },
    ],
  },
  /*{
    nameRu: "Ван Пис",
    nameEn: "One Piece",
    orderRemark: "Манга",
    personalOrder: "",
    cardType: "order-during",
    id: "order_One-Piece-Manga",
    items: [],
  },*/
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    orderRemark: "Сериал, 7 Сезон 3-12/12 Эпизод / Требуется +5 слота",
    personalOrder: "",
    cardType: "order-during",
    id: "order_Dexter",
    items: [],
  },
  {
    nameRu: "Сопрано",
    nameEn: "The Sopranos",
    orderRemark: "Сериал, 3 Сезон 6-13/13 Эпизод / Требуется +4 слота",
    personalOrder: "",
    cardType: "order-during",
    id: "order_Sopranos",
    items: [],
  },
  //#endregion
  //#region В очереди
  {
    nameRu: "Пустые слоты",
    orderRemark: "",
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
    nameRu: "Золотой запас слотов на потом",
    orderRemark: "",
    personalOrder: "",
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
    orderRemark: "",
    personalOrder: "",
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
    nameRu: "GTA Vice City: The Next-Gen Edition",
    orderRemark: "Игра",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Vice-City",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "19.02.25",
      },
    ],
  },
  {
    nameRu: "Аллея кошмаров",
    nameEn: "Nightmare Alley",
    orderRemark: "Фильм",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Nightmare-Alley",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "11.03.25",
      },
    ],
  },
  {
    nameRu: "Инуяшики",
    nameEn: "Inuyashiki",
    orderRemark: "Аниме, 1 Сезон 5/11 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Inuyashiki",
    items: [
      {
        nickname: "Аноним",
        slot: "0.25",
        date: "15.03.25",
      },
    ],
  },
  {
    nameRu: "Ямада-кун и семь ведьм",
    nameEn: "Yamada-kun to 7-nin no Majo",
    orderRemark: "Аниме, 1 Сезон 1-12/12 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Yamada-kun",
    items: [
      {
        nickname: "Стас",
        slot: "3",
        date: "19.03.25",
      },
    ],
  },
  {
    nameRu: "Меч чужака",
    nameEn: "Stranger: Mukou Hadan",
    orderRemark: "Полнометражка",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Mukou-Hadan",
    items: [
      {
        nickname: "Рандом",
        slot: "1",
        date: "21.03.25",
      },
    ],
  },
  {
    nameRu: "Одинокий замок в Зазеркалье",
    nameEn: "Kagami no Kojou",
    orderRemark: "Полнометражка",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Kagami-no-Kojou",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "1",
        date: "21.03.25",
      },
    ],
  },
  {
    nameRu: "Отверженные",
    nameEn: "Les Misérables",
    orderRemark: "Фильм",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Les-Miserables",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "21.03.25",
      },
    ],
  },
  {
    nameRu: "Целитель Адамс",
    nameEn: "Patch Adams",
    orderRemark: "Фильм",
    personalOrder: "",
    cardType: "order-waiting",
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
    nameRu: "Ещё вчера",
    nameEn: "Omohide poro poro",
    orderRemark: "Полнометражка",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Omohide-poro-poro",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "1",
        date: "30.03.25",
      },
    ],
  },
  {
    nameRu: "South Park: The Stick of Truth",
    orderRemark: "Игра",
    personalOrder: "",
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
    nameRu: "Рим",
    nameEn: "Rome",
    orderRemark: "Сериал, 1 Сезон 1-12/12 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Rome-1",
    items: [
      {
        nickname: "Мисти",
        slot: "2",
        date: "18.05.25",
      },
      {
        nickname: "Мисти",
        slot: "2",
        date: "10.06.25",
      },
      {
        nickname: "Мисти",
        slot: "2",
        date: "17.07.25",
      },
    ],
  },
  {
    nameRu: "Соколиный глаз",
    nameEn: "Hawkeye",
    orderRemark: "Сериал, 1 Сезон 1-6/6 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Hawkeye",
    items: [
      {
        nickname: "Сулейка",
        slot: "3",
        date: "23.05.25",
      },
    ],
  },
  {
    nameRu: "Опорный Пункт",
    nameEn: "FireBase",
    orderRemark: "Мини-Фильм",
    personalOrder: "",
    cardType: "order-waiting",
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
    personalOrder: "",
    cardType: "order-waiting",
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
    nameRu: "Проект «Конец света»",
    nameEn: "Project Hail Mary",
    orderRemark: "Фильм",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Project-Hail-Mary",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "10.06.25",
      },
    ],
  },
  {
    nameRu: "Пока не сыграл в ящик",
    nameEn: "The Bucket List",
    orderRemark: "Фильм",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_The-Bucket-List",
    items: [
      {
        nickname: "Кирвин",
        slot: "1",
        date: "10.06.25",
      },
    ],
  },
  {
    nameRu: "Фантастическая четверка 2: Вторжение Серебряного серфера",
    nameEn: "Fantastic Four: Rise of the Silver Surfer",
    orderRemark: "Фильм",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Fantastic-Four-2",
    items: [
      {
        nickname: "Демон21",
        slot: "1",
        date: "24.06.25",
      },
    ],
  },
  {
    nameRu: "The Alters",
    orderRemark: "Игра, 3 слота",
    personalOrder: "",
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
    nameRu: "Tainted Grail: The Fall of Avalon",
    orderRemark: "Игра, 1.5 Слота",
    personalOrder: "",
    cardType: "order-waiting",
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
    nameRu: "Исчезнувшая",
    nameEn: "Gone Girl",
    orderRemark: "Фильм",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Gone-Girl",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "17.07.25",
      },
    ],
  },
  {
    nameRu: "Невеста чародея",
    nameEn: "Mahoutsukai no Yome",
    orderRemark: "Аниме, 1 Сезон 5-24/24 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Mahoutsukai-no-Yome",
    items: [
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "23.07.25",
      },
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "24.08.25",
      },
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "21.09.25",
      },
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "21.10.25",
      },
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "21.11.25",
      },
    ],
  },
  {
    nameRu: "Пустые слоты",
    orderRemark: "",
    personalOrder: "",
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
    orderRemark: "Аниме, 1 Сезон 1-5/25 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Summertime-Render",
    items: [
      {
        nickname: "Krang",
        slot: "1.25",
        date: "27.07.25",
      },
    ],
  },
  {
    nameRu: "Первородный грех Такопи",
    nameEn: "Takopii no Genzai",
    orderRemark: "Аниме, 1 Сезон 1-6/6 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Takopii-no-Genzai",
    items: [
      {
        nickname: "Coras",
        slot: "0.75",
        date: "29.07.25",
      },
      {
        nickname: "Izida-Sama",
        slot: "0.75",
        date: "29.07.25",
      },
    ],
  },
  {
    nameRu: "Семь смертных грехов",
    nameEn: "Nanatsu no Taizai / The Seven Deadly Sins",
    orderRemark: "Аниме, 1 Сезон 9-24/24 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Nanatsu-no-Taizai-1",
    items: [
      {
        nickname: "Podserty",
        slot: "3",
        date: "06.08.25",
      },
      {
        nickname: "Podserty",
        slot: "1",
        date: "14.12.25",
      },
    ],
  },
  {
    nameRu: "Семь смертных грехов",
    nameEn: "Nanatsu no Taizai / The Seven Deadly Sins",
    orderRemark: "Аниме, 2 Сезон 1-8/24 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Nanatsu-no-Taizai-2",
    items: [
      {
        nickname: "Podserty",
        slot: "2",
        date: "14.12.25",
      },
    ],
  },
  {
    nameRu: "Отбросы",
    nameEn: "Misfits",
    orderRemark: "Сериал, 4 Сезон 1-8/8 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Misfits-4",
    items: [
      {
        nickname: "Madaofist",
        slot: "4",
        date: "08.08.25",
      },
    ],
  },
  {
    nameRu: "Бумажный дом",
    nameEn: "La casa de papel",
    orderRemark: "Сериал, 2 Сезон 1-5/9 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_La-casa-de-papel-2",
    items: [
      {
        nickname: "lucky_god_man",
        slot: "0.5",
        date: "20.08.25",
      },
      {
        nickname: "lucky_god_man",
        slot: "20",
        date: "28.08.25",
      },
    ],
  },
  {
    nameRu: "Плутон",
    nameEn: "Pluto",
    orderRemark: "Аниме, 1 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Pluto",
    items: [
      {
        nickname: "Мисти",
        slot: "0.5",
        date: "16.09.25",
      },
      {
        nickname: "Мисти",
        slot: "1.5",
        date: "16.02.26",
      },
      {
        nickname: "Мисти",
        slot: "1",
        date: "17.03.26",
      },
      {
        nickname: "Мисти",
        slot: "1",
        date: "17.05.26",
      },
    ],
  },
  {
    nameRu: "Мстители",
    nameEn: "Avengers by Jonathan Hickman",
    orderRemark: "Комикс",
    personalOrder: "",
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
    orderRemark: "Сериал, 1 Сезон 1-22/22 Эпизод",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Gotham-1",
    items: [
      {
        nickname: "Твою мать!",
        slot: "2",
        date: "12.10.25",
      },
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "25.11.25",
      },
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "26.12.25",
      },
      {
        nickname: "Твою мать!",
        slot: "7",
        date: "08.01.26",
      },
    ],
  },
  {
    nameRu: "Пантеон",
    nameEn: "Pantheon",
    orderRemark: "Мультсериал, 1 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Pantheon-1",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "4",
        date: "21.10.25",
      },
    ],
  },
  {
    nameRu: "Пантеон",
    nameEn: "Pantheon",
    orderRemark: "Мультсериал, 2 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Izida",
    cardType: "order-waiting",
    id: "order_Pantheon-2",
    items: [
      {
        nickname: "Izida-Sama",
        slot: "4",
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
    personalOrder: "",
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
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Kung-fu",
    items: [
      {
        nickname: "Марс Кривокопьев",
        slot: "1",
        date: "02.12.25",
      },
    ],
  },
  {
    nameRu: "Сверхъестественное",
    nameEn: "Supernatural",
    orderRemark: "Сериал, 6 Сезон 1-2/22 Эпизод",
    personalOrder: "user_Katya",
    cardType: "order-waiting",
    id: "order_Supernatural-6",
    items: [
      {
        nickname: "Твою мать!",
        slot: "1",
        date: "02.12.25",
      },
    ],
  },
  {
    nameRu: "Моя геройская академия 3: Миссия мировых героев",
    nameEn: "Boku no Hero Academia the Movie 3: World Heroes' Mission",
    orderRemark: "Полнометражка",
    personalOrder: "",
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
    orderRemark: "Аниме, 1 Сезон 1-12/12 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Death-Parade",
    items: [
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "14.12.25",
      },
      {
        nickname: "АйзенBBC",
        slot: "1",
        date: "21.01.26",
      },
      {
        nickname: "АйзенBBC",
        slot: "1",
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
    orderRemark: "Сериал, 1 Сезон 1-8/8 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Welcome-to-Derry-1",
    items: [
      {
        nickname: "Мисти",
        slot: "2",
        date: "17.12.25",
      },
      {
        nickname: "Мисти",
        slot: "2",
        date: "28.12.25",
      },
    ],
  },
  {
    nameRu: "Стометровка",
    nameEn: "Hyakuemu",
    orderRemark: "Полнометражка",
    personalOrder: "",
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
    personalOrder: "",
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
    personalOrder: "",
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
    orderRemark: "",
    personalOrder: "",
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
    personalOrder: "",
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
    orderRemark: "Аниме, 1 Сезон 1-8/24 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Kusuriya-no-Hitorigoto",
    items: [
      {
        nickname: "Vlados",
        slot: "2",
        date: "26.02.26",
      },
    ],
  },
  {
    nameRu: "Клинок, рассекающий демонов: Бесконечный замок — Возвращение Акадзы",
    nameEn: "Kimetsu no Yaiba Movie 1: Mugenjou-hen - Akaza Sairai",
    orderRemark: "Полнометражка",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Kimetsu-no-Yaiba-Movie-1",
    items: [
      {
        nickname: "Аноним",
        slot: "1",
        date: "15.03.26",
      },
    ],
  },
  {
    nameRu: "Пустой слот",
    orderRemark: "",
    personalOrder: "",
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
    orderRemark: "Аниме, 7 Сезон 2-3 Эпизод",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Steel-Ball-Run-7",
    items: [
      {
        nickname: "Sadasogir",
        slot: "0.5",
        date: "19.03.26",
      },
    ],
  },
  {
    nameRu: "F1: The Movie",
    orderRemark: "Фильм",
    personalOrder: "",
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
    orderRemark: "",
    personalOrder: "",
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
    nameRu: "Warhammer 40 000: Rogue Trader",
    orderRemark: "Игра",
    personalOrder: "",
    cardType: "order-waiting",
    id: "order_Rogue-Trader",
    items: [
      {
        nickname: "Ekemlyr",
        slot: "1",
        date: "29.03.26",
      },
      {
        nickname: "Ekemlyr",
        slot: "1",
        date: "05.04.26",
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
    nameRu: "Марти Великолепный",
    nameEn: "Marty Supreme",
    orderRemark: "Фильм",
    personalOrder: "",
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
    nameRu: "Звёздные войны. Дарт Мол: Повелитель теней",
    nameEn: "Star Wars: Maul – Shadow Lord",
    orderRemark: "Мультсериал, 1 Сезон 1-4/10 Эпизод",
    personalOrder: "user_Misty",
    cardType: "order-waiting",
    id: "order_Maul-Shadow-Lord",
    items: [
      {
        nickname: "Мисти",
        slot: "1",
        date: "17.05.26",
      },
    ],
  },
  //#endregion
  //#region Початые
  {
    nameRu: "Южный Парк",
    nameEn: "South Park",
    orderRemark: "Мультсериал, 3 Сезон 7-17/17 Эпизод / Требуется +2,75 слота",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_South-Park",
    items: [],
  },
  {
    nameRu: "Для тебя, Бессмертный",
    nameEn: "Fumetsu no Anata e",
    orderRemark: "Аниме, 1 Сезон 9-20/20 Эпизод / Требуется +3 слота",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_To-Your-Eternity",
    items: [],
  },
  {
    nameRu: "Ох уж этот экстрасенс Сайки Кусуо!",
    nameEn: "Saiki Kusuo no Ψ-nan",
    orderRemark: "Аниме, 1 Сезон 13-24/24 Эпизод / Требуется +4 слота",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_Saiki-Kusuo-1",
    items: [],
  },
  {
    nameRu: "Да, я паук, и что с того",
    nameEn: "Kumo Desu ga, Nanika?",
    orderRemark: "Аниме, 1 Сезон 5-24/24 Эпизод / Требуется +5 слотов",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_Kumo-Desu-ga-Nanika",
    items: [],
  },
  {
    nameRu: "Драгон Болл / Драконий жемчуг",
    nameEn: "Dragon Ball",
    orderRemark: "Аниме, 1 Сезон 5-153/153 Эпизод / Требуется +37.25 слотов",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_Dragon-Ball-1",
    items: [],
  },
  {
    nameRu: "Флэш",
    nameEn: "The Flash",
    orderRemark: "Сериал, 1 Сезон 13-23/23 Эпизод / Требуется +5 слотов",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_The-Flash",
    items: [],
  },
  {
    nameRu: "Боец Баки",
    nameEn: "Grappler Baki",
    orderRemark: "Аниме, 1 Сезон 5-24/24 Эпизод / Требуется +5 слотов",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_Grappler-Baki",
    items: [],
  },
  {
    nameRu: "Игра в кальмара",
    nameEn: "Ojingeo geim",
    orderRemark: "Сериал, 2 Сезон 3-7/7 Эпизод / Требуется +2.5 слота",
    personalOrder: "",
    cardType: "order-incomplete",
    id: "order_Ojingeo-geim",
    items: [],
  },
  //#endregion
  //#region Заморожено
  {
    nameRu: "Игра лжецов",
    nameEn: "Liar Game",
    orderRemark: "Манга, 7 Слотов",
    personalOrder: "",
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
  {
    nameRu: "Иллюзия рая",
    nameEn: "Tengoku Daimakyou",
    orderRemark: "Аниме, 1 Сезон 1-13/13 Эпизод",
    personalOrder: "user_Edwin",
    cardType: "order-frozen",
    id: "order_Tengoku-Daimakyou-1",
    items: [
      {
        nickname: "Статист",
        slot: "0.5",
        date: "14.01.24",
      },
      {
        nickname: "Статист",
        slot: "1.5",
        date: "05.03.24",
      },
      {
        nickname: "Статист",
        slot: "0.5",
        date: "17.05.24",
      },
      {
        nickname: "Статист",
        slot: "0.5",
        date: "25.07.24",
      },
    ],
  },
  {
    nameRu: "В лес, где мерцают светлячки",
    nameEn: "Hotarubi no Mori e",
    orderRemark: "Полнометражка",
    personalOrder: "user_Edwin",
    cardType: "order-frozen",
    id: "order_Hotarubi-no-Mori-e",
    items: [
      {
        nickname: "Статист",
        slot: "0.5",
        date: "05.03.24",
      },
    ],
  },
  {
    nameRu: "Need for Speed: Most Wanted (2005)",
    orderRemark: "Игра, 7 Слотов",
    personalOrder: "user_Edwin",
    cardType: "order-frozen",
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
    nameRu: "У меня нет любовницы! (А может и есть?!)",
    nameEn: "Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?)",
    orderRemark: "Аниме, 1 Сезон 5-12/12 Эпизод",
    personalOrder: "user_Edwin",
    cardType: "order-frozen",
    id: "order_Muri-ja-Nakatta",
    items: [
      {
        nickname: "Статист",
        slot: "2",
        date: "26.08.24",
      },
    ],
  },
  {
    nameRu: "Goat: Мечтай по-крупному",
    orderRemark: "Мультфильм",
    personalOrder: "user_Edwin",
    cardType: "order-frozen",
    id: "order_Goat",
    items: [
      {
        nickname: "Статист",
        slot: "1",
        date: "27.09.24",
      },
    ],
  },
  {
    nameRu: "Пересмотр «Заклятие (Пересмотр пересмотра)»",
    orderRemark: "Пересмотр пересмотра пересмотра",
    personalOrder: "user_Edwin",
    cardType: "order-frozen",
    id: "order_Conjuring-Rewatch",
    items: [
      {
        nickname: "Статист",
        slot: "1",
        date: "27.09.24",
      },
    ],
  },
  //#endregion
  //#region Свапы
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
];
