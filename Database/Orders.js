const UpdateWas = "Добавление новых слотов было: 23.09.26";
const ordersDatabase = [
  /* ШАБЛОН
  {
    ID: "order_Name",
    NameRU: "Название",
    NameEN: "Название",
    Status: "В заказе 4 серии",
    Type: "order-waiting",
    Slots: [
      {
        Date: "01.01.26",
        Slot: "1",
        Name: "Имя",
      },
    ],
  },
*/

  //#region ~В процессе~
  {
    ID: "order_Imawa-no-Kuni-no-Arisu-2",
    NameRU: "Алиса в Пограничье",
    NameEN: "Imawa no Kuni no Arisu",
    Status: "Аниме ⨯ Просмотрено: 2 Сезон 1-3/8 Эпизод",
    Type: "order-during",
    Slots: [
      {
        Name: "plague_9bit",
        Slot: "1.5", // 1 Сезон 1-3 Эпизод
        Date: "18.09.26",
        Listed: true,
      },
      {
        Name: "plague_9bit",
        Slot: "2.5", // 1 Сезон 4-8 Эпизод
        Date: "18.09.26",
      },
    ],
  },
  {
    ID: "order_Nanatsu-no-Taizai-2",
    NameRU: "Семь смертных грехов 2: Возрождение заповедей",
    NameEN: "Nanatsu no Taizai: Imashime no Fukkatsu",
    Status: "Аниме × В заказе: 2 Сезон 13-24/24 Эпизод",
    Type: "order-during",
    Slots: [
      {
        Name: "Podserty",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "06.08.25",
        Listed: true,
      },
      {
        Name: "Podserty",
        Slot: "2", // 2 Сезон 5-12 Эпизод
        Date: "14.12.25",
        Listed: true,
      },
      {
        Name: "Podserty",
        Slot: "1", // 2 Сезон 13-16 Эпизод
        Date: "14.12.25",
      },
      {
        Name: "Coras",
        Slot: "1", // 2 Сезон 17-20 Эпизод
        Date: "21.08.26",
      },
      {
        Name: "Wonder Of You",
        Slot: "1", // 2 Сезон 21-24 Эпизод
        Date: "21.08.26",
      },
    ],
  },
  {
    ID: "order_Gotham-1",
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × В заказе: 1 Сезон 13-22/22 Эпизод",
    Style: "user_Katya",
    Type: "order-during",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 1 Сезон 1-4 Эпизод
        Date: "12.10.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 5-6 Эпизод
        Date: "25.11.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 7-8 Эпизод
        Date: "26.12.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 1 Сезон 9-12 Эпизод
        Date: "08.01.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "5", // 1 Сезон 13-22 Эпизод
        Date: "08.01.26",
      },
    ],
  },
  {
    ID: "order_Rogue-Trader",
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра × Наиграно: 10 Часов, В заказе: 6 Часов",
    Type: "order-during",
    Slots: [
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "29.03.26",
        Listed: true,
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "05.04.26",
        Listed: true,
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "21.04.26",
        Listed: true,
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "28.04.26",
        Listed: true,
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "24.07.26",
        Listed: true,
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "07.08.26",
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "19.08.26",
      },
      {
        Name: "Ekemlyr",
        Slot: "1",
        Date: "27.08.26",
      },
    ],
  },
  {
    ID: "order_Crusader-Kings-3",
    NameRU: "Crusader Kings III",
    Status: "Игра × Наиграно: 18 Часов, В заказе: 4 Часа",
    Type: "order-during",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "2",
        Date: "06.06.26",
        Listed: true,
      },
      {
        Name: "Izida-Sama",
        Slot: "3",
        Date: "22.07.26",
        Listed: true,
      },
      {
        Name: "Izida-Sama",
        Slot: "2",
        Date: "01.08.26",
        Listed: true,
      },
      {
        Name: "Izida-Sama",
        Slot: "2",
        Date: "06.08.26",
        Listed: true,
      },
      {
        Name: "Izida-Sama",
        Slot: "2",
        Date: "13.08.26",
      },
    ],
  },
  //#endregion
  //#region ~В очереди~
  {
    ID: "order_Tengoku-Daimakyou-1",
    NameRU: "Иллюзия рая",
    NameEN: "Tengoku Daimakyou",
    Status: "Аниме × В заказе: 1 Сезон 1-13/13 Эпизод",
    Style: "user_Edwin",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Статист",
        Slot: "0.5", // 1 Сезон 1-2 Эпизод
        Date: "14.01.24",
      },
      {
        Name: "Статист",
        Slot: "1.5", // 1 Сезон 3-8 Эпизод
        Date: "05.03.24",
      },
      {
        Name: "Статист",
        Slot: "0.5", // 1 Сезон 9-10 Эпизод
        Date: "17.05.24",
      },
      {
        Name: "Статист",
        Slot: "0.5", // 1 Сезон 11-13 Эпизод
        Date: "25.07.24",
      },
    ],
  },
  {
    ID: "order_Most-Wanted-2005",
    NameRU: "Need for Speed: Most Wanted (2005)",
    Status: "Игра × В заказе: 14 Часов",
    Style: "user_Edwin",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Статист",
        Slot: "6",
        Date: "29.05.24",
      },
      {
        Name: "Статист",
        Slot: "1",
        Date: "05.07.24",
      },
    ],
  },
  {
    ID: "order_Muri-ja-Nakatta",
    NameRU: "У меня нет любовницы! (А может и есть?!)",
    NameEN: "Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?)",
    Status: "Аниме × В заказе: 1 Сезон 5-12/12 Эпизод",
    Style: "user_Edwin",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Статист",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "17.05.24",
        Listed: true,
      },
      {
        Name: "Статист",
        Slot: "2", // 1 Сезон 5-12 Эпизод
        Date: "26.08.24",
      },
    ],
  },
  {
    ID: "order_Conjuring-Rewatch",
    NameRU: "Пересмотр «Заклятие (Пересмотр пересмотра)»",
    Status: "Пересмотр пересмотра пересмотра",
    Style: "user_Edwin",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Статист",
        Slot: "1",
        Date: "27.09.24",
      },
    ],
  },
  {
    ID: "order_002",
    NameRU: "Золотой запас слотов на потом",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Madaofist",
        Slot: "7",
        Date: "17.11.24",
      },
    ],
  },
  {
    ID: "order_003",
    NameRU: "Слоты на потом",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Madaofist",
        Slot: "4.25",
        Date: "18.12.24",
      },
    ],
  },
  {
    ID: "order_Patch-Adams",
    NameRU: "Целитель Адамс",
    NameEN: "Patch Adams",
    Status: "Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "23.03.25",
      },
    ],
  },
  {
    ID: "order_Stick-of-Truth",
    NameRU: "South Park: The Stick of Truth",
    Status: "Игра × В заказе: 2 Часа",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "03.04.25",
      },
    ],
  },
  {
    ID: "order_FireBase",
    NameRU: "Опорный Пункт",
    NameEN: "FireBase",
    Status: "Мини-Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Ториан",
        Slot: "0.25",
        Date: "23.05.25",
      },
    ],
  },
  {
    ID: "order_Rakka",
    NameRU: "Ракка",
    NameEN: "Rakka",
    Status: "Мини-Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Ториан",
        Slot: "0.25",
        Date: "23.05.25",
      },
    ],
  },
  {
    ID: "order_The-Alters",
    NameRU: "The Alters",
    Status: "Игра × В заказе: 6 Часов",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "2",
        Date: "07.07.25",
      },
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "22.02.26",
      },
    ],
  },
  {
    ID: "order_Tainted-Grail",
    NameRU: "Tainted Grail: The Fall of Avalon",
    Status: "Игра × В заказе: 3 Часа",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Ториан",
        Slot: "1.5",
        Date: "09.07.25",
      },
    ],
  },
  {
    ID: "order_004",
    NameRU: "Пустые слоты",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Madaofist",
        Slot: "1.75",
        Date: "27.07.25",
      },
    ],
  },
  {
    ID: "order_Misfits-4",
    NameRU: "Отбросы",
    NameEN: "Misfits",
    Status: "Сериал × В заказе: 4 Сезон 1-8/8 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Madaofist",
        Slot: "4", // 4 Сезон 1-8 Эпизод
        Date: "08.08.25",
      },
    ],
  },
  {
    ID: "order_Pantheon-1",
    NameRU: "Пантеон",
    NameEN: "Pantheon",
    Status: "Мультсериал × В заказе: 1 Сезон 1-8/8 Эпизод",
    Style: "user_Izida",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "4", // 1 Сезон 1-8 Эпизод
        Date: "21.10.25",
      },
    ],
  },
  {
    ID: "order_Pantheon-2",
    NameRU: "Пантеон",
    NameEN: "Pantheon",
    Status: "Мультсериал × В заказе: 2 Сезон 1-8/8 Эпизод",
    Style: "user_Izida",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "4", // 2 Сезон 1-8 Эпизод
        Date: "21.10.25",
      },
    ],
  },
  {
    ID: "order_Quantum-of-Solace",
    NameRU: "Квант милосердия",
    NameEN: "Quantum of Solace",
    Status: "Фильм",
    Style: "user_Katya",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "05.11.25",
      },
    ],
  },
  {
    ID: "order_Skyfall",
    NameRU: "Координаты «Скайфолл»",
    NameEN: "Skyfall",
    Status: "Фильм",
    Style: "user_Katya",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "05.11.25",
      },
    ],
  },
  {
    ID: "order_Frankenstein",
    NameRU: "Франкенштейн",
    NameEN: "Frankenstein",
    Status: "Фильм",
    Style: "user_Misty",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Мисти",
        Slot: "1",
        Date: "18.11.25",
      },
    ],
  },
  {
    ID: "order_Blinkende-lygter",
    NameRU: "Мерцающие огни",
    NameEN: "Blinkende lygter",
    Status: "Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Аноним",
        Slot: "1",
        Date: "18.11.25",
      },
    ],
  },
  {
    ID: "order_Kung-fu",
    NameRU: "Разборки в стиле кунг-фу",
    NameEN: "Kung fu",
    Status: "Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "02.12.25",
      },
    ],
  },
  {
    ID: "order_007",
    NameRU: "Магическая битва: Смертельная миграция",
    NameEN: "Jujutsu Kaisen: Shimetsu Kaiyuu - Zenpen",
    Status: "Аниме × В заказе: 3 Сезон 1-12/12 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 3 Сезон 1-8 Эпизод
        Date: "02.12.25",
      },
      {
        Name: "Сулейка",
        Slot: "1", // 3 Сезон 9-12 Эпизод
        Date: "28.05.26",
      },
    ],
  },
  {
    ID: "order_My-Hero-Academia-Movie-3",
    NameRU: "Моя геройская академия 3: Миссия мировых героев",
    NameEN: "Boku no Hero Academia the Movie 3: World Heroes' Mission",
    Status: "Полнометражка",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Podserty",
        Slot: "1",
        Date: "14.12.25",
      },
    ],
  },
  {
    ID: "order_Death-Parade",
    NameRU: "Парад смерти",
    NameEN: "Death Parade",
    Status: "Аниме × В заказе: 1 Сезон 1-12/12 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "14.12.25",
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 5-8 Эпизод
        Date: "21.01.26",
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 9-12 Эпизод
        Date: "20.02.26",
      },
    ],
  },
  {
    ID: "order_Parasite",
    NameRU: "Паразиты",
    NameEN: "Parasite",
    Status: "Фильм",
    Style: "user_Misty",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Мисти",
        Slot: "1",
        Date: "14.12.25",
      },
    ],
  },
  {
    ID: "order_The-Mandalorian-2",
    NameRU: "Мандалорец",
    NameEN: "The Mandalorian",
    Status: "Сериал × В заказе: 2 Сезон 1-8/8 Эпизод",
    Style: "user_Misty",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Мисти",
        Slot: "2", // 1 Сезон 1-4 Эпизод
        Date: "17.12.25",
      },
      {
        Name: "Мисти",
        Slot: "2", // 1 Сезон 5-8 Эпизод
        Date: "28.12.25",
      },
    ],
  },
  {
    ID: "order_Hyakuemu",
    NameRU: "Стометровка",
    NameEN: "Hyakuemu",
    Status: "Полнометражка",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Ториан",
        Slot: "1",
        Date: "06.01.26",
      },
    ],
  },
  {
    ID: "order_Only-Lovers-Left-Alive",
    NameRU: "Выживут только любовники",
    NameEN: "Only Lovers Left Alive",
    Status: "Фильм",
    Style: "user_Katya",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "27.01.26",
      },
    ],
  },
  {
    ID: "order_Diamond-Hand",
    NameRU: "Бриллиантовая рука",
    Status: "Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Грейрат",
        Slot: "1",
        Date: "17.02.26",
      },
    ],
  },
  {
    ID: "order_Homunculus",
    NameRU: "Гомункул",
    NameEN: "Homunculus",
    Status: "Манга",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Бурят",
        Slot: "4.5",
        Date: "23.02.26",
      },
    ],
  },
  {
    ID: "order_Kokuriko-zaka-kara",
    NameRU: "Со склонов Кокурико",
    NameEN: "Kokuriko-zaka kara",
    Status: "Полнометражка",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Vlados",
        Slot: "1",
        Date: "26.02.26",
      },
    ],
  },
  {
    ID: "order_Kusuriya-no-Hitorigoto",
    NameRU: "Монолог фармацевта",
    NameEN: "Kusuriya no Hitorigoto",
    Status: "Аниме × В заказе: 1 Сезон 1-8/24 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Vlados",
        Slot: "2", // 1 Сезон 1-8 Эпизод
        Date: "26.02.26",
      },
    ],
  },
  {
    ID: "order_005",
    NameRU: "Пустой слот",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Аноним",
        Slot: "1",
        Date: "15.03.26",
      },
    ],
  },
  {
    ID: "order_Steel-Ball-Run-7",
    NameRU: "Невероятное приключение ДжоДжо: Гонка «Стальной шар»",
    NameEN: "Steel Ball Run: JoJo no Kimyou na Bouken",
    Status: "Аниме × В заказе: 7 Сезон 2-3 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Sadasogir",
        Slot: "0.5", // 1 Сезон 2-3 Эпизод
        Date: "19.03.26",
      },
    ],
  },
  {
    ID: "order_006",
    NameRU: "Пустые слоты",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Эклер",
        Slot: "4",
        Date: "25.03.26",
      },
    ],
  },
  {
    ID: "order_Marty-Supreme",
    NameRU: "Марти Великолепный",
    NameEN: "Marty Supreme",
    Status: "Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Сатурдей",
        Slot: "1",
        Date: "05.04.26",
      },
    ],
  },
  {
    ID: "order_Sunshine",
    NameRU: "Пекло",
    NameEN: "Sunshine",
    Status: "Фильм",
    Style: "user_Katya",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "08.04.26",
      },
    ],
  },
  {
    ID: "order_Meet-Joe-Black",
    NameRU: "Знакомьтесь, Джо Блэк",
    NameEN: "Meet Joe Black",
    Status: "Фильм",
    Style: "user_Misty",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Мисти",
        Slot: "1",
        Date: "21.04.26",
      },
    ],
  },
  {
    ID: "order_The-Lost-Room",
    NameRU: "Потерянная комната",
    NameEN: "The Lost Room",
    Status: "Сериал × В заказе: 1 Сезон 1-3/3 Эпизод",
    Style: "user_Katya",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2",
        Date: "05.05.26",
      },
    ],
  },
  {
    ID: "order_The-Village",
    NameRU: "Таинственный лес",
    NameEN: "The Village",
    Status: "Фильм",
    Style: "user_Katya",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "05.05.26",
      },
    ],
  },
  {
    ID: "order_Maul-Shadow-Lord",
    NameRU: "Звёздные войны. Дарт Мол: Повелитель теней",
    NameEN: "Star Wars: Maul – Shadow Lord",
    Status: "Мультсериал × В заказе: 1 Сезон 1-4/10 Эпизод",
    Style: "user_Misty",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Мисти",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "17.05.26",
      },
    ],
  },
  {
    ID: "order_Imawa-no-Kuni-no-Alice",
    NameRU: "Алиса в Пограничье",
    NameEN: "Imawa no Kuni no Alice",
    Status: "Манга",
    Style: "user_Izida",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "3",
        Date: "24.05.26",
      },
    ],
  },
  {
    ID: "order_Boku-no-Hero-Academia-Illegals",
    NameRU: "Моя геройская академия: Вне закона",
    NameEN: "Vigilante: Boku no Hero Academia Illegals",
    Status: "Аниме × В заказе: 1 Сезон 1-13/13 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Nightmare336",
        Slot: "3.25",
        Date: "24.05.26",
      },
    ],
  },
  {
    ID: "order_Angel-Beats",
    NameRU: "Ангельские ритмы!",
    NameEN: "Angel Beats!",
    Status: "Аниме × В заказе: 1 Сезон 1-4/13 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Insomnia",
        Slot: "1",
        Date: "09.06.26",
      },
    ],
  },
  {
    ID: "order_Unlimited-Blade-Works-1",
    NameRU: "Судьба/Ночь схватки: Бесконечный мир клинков",
    NameEN: "Fate/stay night: Unlimited Blade Works",
    Status: "Аниме × В заказе: 1 Сезон 0-12/12 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Рейч",
        Slot: "1", // 1 Сезон 0-1 Эпизод
        Date: "24.06.26",
      },
      {
        Name: "Рейч",
        Slot: "3", // 1 Сезон 2-12 Эпизод
        Date: "01.07.26",
      },
    ],
  },
  {
    ID: "order_I-Swear",
    NameRU: "Я ругаюсь",
    NameEN: "I Swear",
    Status: "Фильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ia_chort",
        Slot: "1",
        Date: "08.07.26",
      },
    ],
  },
  {
    ID: "order_Batman-Assault-on-Arkham",
    NameRU: "Бэтмен: Нападение на Аркхэм",
    NameEN: "Batman: Assault on Arkham",
    Status: "Мультфильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ia_chort",
        Slot: "0.5",
        Date: "08.07.26",
      },
    ],
  },
  {
    ID: "order_Justice-League-Dark",
    NameRU: "Тёмная Лига справедливости",
    NameEN: "Justice League Dark",
    Status: "Мультфильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ia_chort",
        Slot: "0.5",
        Date: "08.07.26",
      },
    ],
  },
  {
    NameRU: "Годнеслот",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "15.07.26",
      },
    ],
  },
  {
    ID: "order_Daredevil-1",
    NameRU: "Сорвиголова",
    NameEN: "Daredevil",
    Status: "Сериал × В заказе: 1 Сезон 1-13/13 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "3",
        Date: "22.07.26",
      },
      {
        Name: "Сулейка",
        Slot: "3.5",
        Date: "12.08.26",
      },
    ],
  },
  {
    ID: "order_Daredevil-2",
    NameRU: "Сорвиголова",
    NameEN: "Daredevil",
    Status: "Сериал × В заказе: 2 Сезон 1/13 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "0.5",
        Date: "12.08.26",
      },
    ],
  },
  {
    NameRU: "Годнеслот",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "1",
        Date: "01.08.26",
      },
    ],
  },
  {
    ID: "order_Nanatsu-no-Taizai-3",
    NameRU: "Семь смертных грехов 3: Гнев богов",
    NameEN: "Nanatsu no Taizai: Kamigami no Gekirin",
    Status: "Аниме × В заказе: 3 Сезон 1-8/24 Эпизод",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Coras",
        Slot: "2", // 1 Сезон 1-8 Эпизод
        Date: "28.08.26",
      },
    ],
  },
  {
    ID: "order_001",
    NameRU: "Пустые слоты",
    Style: "user_Izida",
    Type: "order-waiting",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "2",
        Date: "08.09.26",
      },
    ],
  },
  {
    ID: "order_Injustice",
    NameRU: "Несправедливость",
    NameEN: "Injustice",
    Status: "Мультфильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ia_chort",
        Slot: "0.5",
        Date: "03.09.26",
      },
    ],
  },
  {
    ID: "order_Justice-League-War",
    NameRU: "Лига справедливости: Война",
    NameEN: "Justice League: War",
    Status: "Мультфильм",
    Type: "order-waiting",
    Slots: [
      {
        Name: "ia_chort",
        Slot: "0.5",
        Date: "03.09.26",
      },
    ],
  },
  //#endregion
  //#region ~В уточнении~
  {
    ID: "order_Dexter-Resurrection-1",
    NameRU: "Декстер: Воскрешение",
    NameEN: "Dexter: Resurrection",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-2/10 Эпизод",
    Type: "order-determinate",
    Slots: [
      {
        Name: "Без имени",
        Slot: "1", // 1 Сезон 1-2 Эпизод
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    ID: "order_La-casa-de-papel-2",
    NameRU: "Бумажный дом",
    NameEN: "La casa de papel",
    Status: "Сериал × Просмотрено: 2 Сезон 1-6/9 Эпизод",
    Type: "order-determinate",
    Slots: [
      {
        Name: "lucky_god_man",
        Slot: "0.5", // 2 Сезон 1 Эпизод
        Date: "20.08.25",
        Listed: true,
      },
      {
        Name: "lucky_god_man",
        Slot: "0.5", // 2 Сезон 2 Эпизод
        Date: "28.08.25",
        Listed: true,
      },
      {
        Name: "lucky_god_man",
        Slot: "1.5", // 2 Сезон 3-5 Эпизод
        Date: "28.08.25",
        Listed: true,
      },
      {
        Name: "Без имени",
        Slot: "0.5", // 2 Сезон 6 Эпизод
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    NameRU: "Мобильный воин Гандам: Вспышка Хэтэуэя 2 - Колдунья Кирка",
    NameEN: "Mobile Suit Gundam: Senkou no Hathaway - Circe no Majo",
    Status: "Полнометражка",
    Type: "order-determinate",
    Slots: [
      {
        Name: "Без имени",
        Slot: "1",
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 8 Сезон 1-12/12 Эпизод",
    Type: "order-determinate",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 8 Сезон 1-2 Эпизод
        Date: "12.08.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 8 Сезон 3-4 Эпизод
        Date: "19.08.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 8 Сезон 5-6 Эпизод
        Date: "01.09.26",
        Listed: true,
      },
      {
        Name: "Без имени",
        Slot: "3", // 8 Сезон 7-8 Эпизод
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    NameRU: "Великий мышиный сыщик",
    NameEN: "The Great Mouse Detective",
    Status: "Мультфильм",
    Type: "order-determinate",
    Slots: [
      {
        Name: "Без имени",
        Slot: "1",
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    ID: "order_Vikings-4",
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × Просмотрено: 4 Сезон 1-18/20 Эпизод",
    Type: "order-determinate",
    Slots: [
      {
        Name: "Без имени",
        Slot: "9", // 1-12 Эпизод
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    NameRU: "Шрек навсегда",
    NameEN: "Shrek Forever After",
    Status: "Мультфильм",
    Type: "order-determinate",
    Slots: [
      {
        Name: "Без имени",
        Slot: "1",
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  {
    NameRU: "Шрек Третий",
    NameEN: "Shrek the Third",
    Status: "Мультфильм",
    Type: "order-determinate",
    Slots: [
      {
        Name: "Без имени",
        Slot: "1",
        Date: "Без даты",
        Listed: false,
      },
    ],
  },
  //#endregion
  //#region ~Нужен дозаказ~
  {
    ID: "order_100-nin-no-Kanojo-3",
    NameRU: "Сто девушек, которые очень сильно тебя любят",
    NameEN: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
    Status: "Аниме × Просмотрено: 3 Сезон 1-8/12 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Вару",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "24.07.26",
        Listed: true,
      },
      {
        Name: "Вару",
        Slot: "1", // 1 Сезон 5-8 Эпизод
        Date: "26.08.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Mahoutsukai-no-Yome-2",
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × Просмотрено: 2 Сезон 1-16/24 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Мисти",
        Slot: "0.5", // 2 Сезон 1-2 Эпизод
        Date: "16.09.25",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "0.5", // 2 Сезон 3-4 Эпизод
        Date: "16.02.26",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "1", // 2 Сезон 5-8 Эпизод
        Date: "16.02.26",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "1", // 2 Сезон 9-12 Эпизод
        Date: "17.03.26",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "1", // 2 Сезон 13-16 Эпизод
        Date: "17.05.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Summertime-Render",
    NameRU: "Летнее время",
    NameEN: "Summertime Render",
    Status: "Аниме × Просмотрено: 1 Сезон 1-5/25 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Krang",
        Slot: "1.25", // 1 Сезон 1-5 Эпизод
        Date: "27.07.25",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Munou-na-Nana",
    NameRU: "Бездарная Нана",
    NameEN: "Munou na Nana",
    Status: "Манга × Прочитано: 1-8/122 Главы",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Эклер",
        Slot: "1", // 1-10 Главы
        Date: "Без даты",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_My-Little-Pony",
    NameRU: "Дружба — это чудо",
    NameEN: "My Little Pony: Friendship is Magic",
    Status: "Мультсериал",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Эклер",
        Slot: "1",
        Date: "Без даты",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_South-Park",
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал ⨯ В заказе: 3 Сезон 15/17 Эпизод",
    // Style: "user_Katya",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "0.75", // 3 Сезон 1-3 Эпизод
        Date: "21.04.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 4-7 Эпизод
        Date: "20.05.26",
        Listed: true,
      },
      {
        Name: "₁₁Naтрий",
        Slot: "0.75", // 3 Сезон 8-10 Эпизод
        Date: "07.06.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 11-14 Эпизод
        Date: "07.06.26",
        Listed: true,
      },
      {
        Name: "₁₁Naтрий",
        Slot: "0.25", // 3 Сезон 15 Эпизод
        Date: "07.06.26",
      },
    ],
  },
  {
    ID: "order_Sopranos",
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал ⨯ Просмотрено: 3 Сезон 1-9/13 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Сатурдей",
        Slot: "1.5", // 3 Сезон 1-3 Эпизод
        Date: "21.04.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 3 Сезон 4-5 Эпизод
        Date: "12.05.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 3 Сезон 6-7 Эпизод
        Date: "07.06.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 3 Сезон 8-9 Эпизод
        Date: "Без даты",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_The-Big-Bang-Theory-4",
    NameRU: "Теория большого взрыва",
    NameEN: "The Big Bang Theory",
    Status: "Сериал × Просмотрено: 4 Сезон 1-9/12 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Вару",
        Slot: "0.25", // 4 Сезон 1 Эпизод
        Date: "09.01.25",
        Listed: true,
      },
      {
        Name: "Вару",
        Slot: "0.5", // 4 Сезон 2-3 Эпизод
        Date: "13.01.25",
        Listed: true,
      },
      {
        Name: "Вару",
        Slot: "0.25", // 4 Сезон 4 Эпизод
        Date: "14.01.25",
        Listed: true,
      },
      {
        Name: "Вару",
        Slot: "0.25", // 4 Сезон 5 Эпизод
        Date: "15.01.25",
        Listed: true,
      },
      {
        Name: "Вару",
        Slot: "1", // 4 Сезон 6-9 Эпизод
        Date: "29.06.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_One-Piece-Anime",
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × Просмотрено: 1 Сезон 1-1158/↻ Эпизод",
    Type: "order-incomplete",
    Slots: [],
  },
  {
    ID: "order_Inuyashiki",
    NameRU: "Инуяшики",
    NameEN: "Inuyashiki",
    Status: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/11 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "КутКин",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "25.11.24",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_To-Your-Eternity",
    NameRU: "Для тебя, Бессмертный",
    NameEN: "Fumetsu no Anata e",
    Status: "Аниме ⨯ Просмотрено: 2 Сезон 1-8/20 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "КутКин",
        Slot: "1", // 2 Сезон 1-4 Эпизод
        Date: "25.11.24",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "1", // 2 Сезон 5-8 Эпизод
        Date: "17.03.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Saiki-Kusuo-1",
    NameRU: "Ох уж этот экстрасенс Сайки Кусуо!",
    NameEN: "Saiki Kusuo no Ψ-nan",
    Status: "Аниме ⨯ Просмотрено: 1 Сезон 1-12/24 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Вару",
        Slot: "2", // 1 Сезон 1-8 Эпизод
        Date: "04.01.26",
        Listed: true,
      },
      {
        Name: "Вару",
        Slot: "1", // 1 Сезон 9-12 Эпизод
        Date: "18.03.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Kumo-Desu-ga-Nanika",
    NameRU: "Да, я паук, и что с того",
    NameEN: "Kumo Desu ga, Nanika?",
    Status: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/24 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Вару",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "09.01.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Dragon-Ball-1",
    NameRU: "Драгон Болл / Драконий жемчуг",
    NameEN: "Dragon Ball",
    Status: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/153 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Вару",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "22.01.26",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_The-Flash",
    NameRU: "Флэш",
    NameEN: "The Flash",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-12/23 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Глатон",
        Slot: "2", // 1 Сезон 1-4 Эпизод
        Date: "25.09.23",
        Listed: true,
      },
      {
        Name: "Глатон",
        Slot: "2", // 1 Сезон 5-8 Эпизод
        Date: "23.03.24",
        Listed: true,
      },
      {
        Name: "Аноним",
        Slot: "1", // 1 Сезон 9-10 Эпизод
        Date: "26.05.24",
        Listed: true,
      },
      {
        Name: "Сулейка",
        Slot: "1", // 1 Сезон 11-12 Эпизод
        Date: "22.11.24",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Grappler-Baki",
    NameRU: "Боец Баки",
    NameEN: "Grappler Baki",
    Status: "Аниме ⨯ Просмотрено: 1 Сезон 1-4/24 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Сатурдей",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "02.10.24",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_The-Vampire-Diaries-2",
    NameRU: "Дневники вампира",
    NameEN: "The Vampire Diaries",
    Status: "Сериал ⨯ Просмотрено: 2 Сезон 1/22 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "Демон21",
        Slot: "0.5", // 2 Сезон 1 Эпизод
        Date: "06.05.25",
        Listed: true,
      },
    ],
  },
  {
    ID: "order_Ojingeo-geim",
    NameRU: "Игра в кальмара",
    NameEN: "Ojingeo geim",
    Status: "Сериал ⨯ Просмотрено: 2 Сезон 1-2/7 Эпизод",
    Type: "order-incomplete",
    Slots: [
      {
        Name: "plague_9bit",
        Slot: "1", // 2 Сезон 1-2 Эпизод
        Date: "09.01.25",
        Listed: true,
      },
    ],
  },
  //#endregion
  //#region ~На паузе~
  {
    ID: "order_Liar-Game",
    NameRU: "Игра лжецов",
    NameEN: "Liar Game",
    Status: "Манга ⨯ 7 Слотов",
    Type: "order-frozen",
    Slots: [
      {
        Name: "Yukio",
        Slot: "7",
        Date: "01.05.24",
      },
    ],
  },
  //#endregion
  //#region ~Свапы~
  {
    Status: "Свап был 27.08.26 (Исида)",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Пустые слоты (24.08.24)",
        Status: "1 Слот",
      },
      {
        NameRU: "Повелитель тайн: Спецвыпуск",
        NameEN: "Guimi Zhi Zhu Specials / Lord of Mysteries Specials",
        Status: "Аниме × 1-3 Эпизод",
      },
    ],
  },
  {
    Status: "Свап был 16.08.26 (Мисти)",
    Style: "user_Misty",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Плутон",
        NameEN: "Pluto",
        Status: "Аниме × 1 Сезон 1-8 Эпизод",
      },
      {
        NameRU: "Невеста чародея",
        NameEN: "Mahoutsukai no Yome",
        Status: "Аниме × 2 Сезон 1-16 Эпизод",
      },
    ],
  },
  {
    Status: "Свап был 14.08.26 (Мисти)",
    Style: "user_Misty",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Оно: Добро пожаловать в Дерри",
        NameEN: "IT: Welcome to Derry",
        Status: "Сериал × 1 Сезон 1-8 Эпизод",
      },
      {
        NameRU: "Мандалорец",
        NameEN: "The Mandalorian",
        Status: "Сериал × 2 Сезон 1-8 Эпизод",
      },
    ],
  },
  {
    Status: "Свап был 07.08.26 (Годень)",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Годнеслот",
        NameEN: "23.02.26 ⨯ Кирвин",
        Status: "1 Слот",
      },
      {
        NameRU: "Телохранитель",
        NameEN: "Yojimbo",
        Status: "Фильм × 1 Слот",
      },
    ],
  },
  {
    Status: "Свап был 15.07.26 (Годень)",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Годнеслот",
        NameEN: "09.06.26 ⨯ ТВОЮ МАТЬ",
        Status: "1 Слот",
      },
      {
        NameRU: "Головокружение",
        NameEN: "Vertigo",
        Status: "Фильм × 1 Слот",
      },
    ],
  },
  {
    Status: "Свап был 23.06.26 (ТВОЮ МАТЬ)",
    Style: "user_Katya",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Сверхъестественное",
        NameEN: "Supernatural",
        Status: "Сериал × 6 Сезон 1-4 Эпизод",
      },
      {
        NameRU: "Магическая битва: Смертельная миграция",
        NameEN: "Jujutsu Kaisen: Shimetsu Kaiyuu - Zenpen",
        Status: "Аниме × 3 Сезон 1-8 Эпизод",
      },
    ],
  },
  {
    Status: "Свап был 03.05.26 (Статист)",
    Style: "user_Edwin",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Need for Speed: Underground",
        Status: "Игра × 1 Слот",
      },
      {
        NameRU: "Заклятие (Пересмотр пересмотра)",
        NameEN: "The Conjuring",
        Status: "Пересмотр стрима",
      },
    ],
  },
  {
    Status: "Свап был 27.08.26 (Имя)",
    Style: "user_Edwin",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Need for Speed: Underground",
        Status: "Игра × 1 Слот",
      },
      {
        NameRU: "Goat: Мечтай по-крупному",
        Status: "Мультфильм × 1 Слот",
      },
    ],
  },
  {
    Status: "Свап был 25.05.26 (Мисти)",
    Style: "user_Misty",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Грозовой перевал",
        NameEN: "Wuthering Heights",
        Status: "Фильм × 1 Слот",
      },
      {
        NameRU: "Плутон",
        NameEN: "Pluto",
        Status: "Аниме × 1 Сезон 1-2 Эпизод",
      },
    ],
  },
  {
    Status: "Свап был 25.05.26 (Мисти)",
    Style: "user_Misty",
    Type: "order-switch",
    FromTo: [
      {
        NameRU: "Знакомьтесь, Джо Блэк",
        NameEN: "Meet Joe Black",
        Status: "Фильм × 1 Слот",
      },
      {
        NameRU: "Проект «Конец света»",
        NameEN: "Project Hail Mary",
        Status: "Фильм × 1 Слот",
      },
    ],
  },
  //#endregion
  //#region ~Просмотренное~
  {
    NameRU: "Управление воспоминаниями (2026)",
    NameEN: "Jiyi Guanli Ju (2026)",
    Status: "Аниме ⨯ Просмотрено: 1 Сезон 1-7/7 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "2", // 1 Сезон 1-7 Эпизод
        Date: "24.08.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "F1: The Movie",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Аноним",
        Slot: "1",
        Date: "21.03.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Новые Мстители + Мстители Хикмана",
    NameEN: "New Avengers + Avengers by Jonathan Hickman",
    Status: "Комиксы",
    Type: "order-finished",
    Slots: [
      {
        Name: "qwarde",
        Slot: "1",
        Date: "28.09.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Повелитель тайн: Спецвыпуск",
    NameEN: "Guimi Zhi Zhu Specials / Lord of Mysteries Specials",
    Status: "Аниме × 1-3/3 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "1", // 1-3 Эпизод
        Date: "24.08.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai",
    Status: "Аниме × Просмотрено: 1 Сезон 1-24/24 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Podserty",
        Slot: "3", // 1 Сезон 1-12 Эпизод
        Date: "26.06.24",
        Listed: true,
      },
      {
        Name: "Coras",
        Slot: "1", // 1 Сезон 13-16 Эпизод
        Date: "29.03.25",
        Listed: true,
      },
      {
        Name: "Podserty",
        Slot: "2", // 1 Сезон 17-24 Эпизод
        Date: "06.08.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × Просмотрено: 1 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Мисти",
        Slot: "2", // 1 Сезон 1-4 Эпизод
        Date: "18.05.25",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "2", // 1 Сезон 5-8 Эпизод
        Date: "10.06.25",
        Listed: true,
      },
      {
        Name: "Мисти",
        Slot: "2", // 1 Сезон 9-12 Эпизод
        Date: "17.07.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Телохранитель",
    NameEN: "Yojimbo",
    Status: "Полнометражка",
    Type: "order-finished",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "23.02.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Клинок, рассекающий демонов: Бесконечный замок — Возвращение Акадзы",
    NameEN: "Kimetsu no Yaiba Movie 1: Mugenjou-hen - Akaza Sairai",
    Status: "Полнометражка",
    Type: "order-finished",
    Slots: [
      {
        Name: "Демон21",
        Slot: "1",
        Date: "15.03.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × Просмотрено: 1 Сезон 1-24/24 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "25.05.25",
        Listed: true,
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 5-8 Эпизод
        Date: "23.07.25",
        Listed: true,
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 9-12 Эпизод
        Date: "24.08.25",
        Listed: true,
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 13-16 Эпизод
        Date: "21.09.25",
        Listed: true,
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 17-20 Эпизод
        Date: "21.10.25",
        Listed: true,
      },
      {
        Name: "АйзенBBC",
        Slot: "1", // 1 Сезон 21-24 Эпизод
        Date: "21.11.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Соколиный глаз",
    NameEN: "Hawkeye",
    Status: "Сериал × Просмотрено: 1 Сезон 1-6/6 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "3", // 1 Сезон 1-6 Эпизод
        Date: "23.05.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Пока не сыграл в ящик",
    NameEN: "The Bucket List",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "10.06.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Головокружение",
    NameEN: "Vertigo",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "09.06.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × Просмотрено: 3 Сезон 1-10/10 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Без имени",
        Slot: "5", // 1-10 Эпизод
        Date: "Без даты",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Первородный грех Такопи",
    NameEN: "Takopii no Genzai",
    Status: "Аниме × Просмотрено: 1 Сезон 1-6/6 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Coras",
        Slot: "0.75", // 1 Сезон 1-3 Эпизод
        Date: "29.07.25",
        Listed: true,
      },
      {
        Name: "Izida-Sama",
        Slot: "0.75", // 1 Сезон 4-6 Эпизод
        Date: "29.07.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Исчезнувшая",
    NameEN: "Gone Girl",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1",
        Date: "17.07.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Проект «Конец света»",
    NameEN: "Project Hail Mary",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Мисти",
        Slot: "1",
        Date: "10.06.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Громовержцы*",
    NameEN: "Thunderbolts*",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "1",
        Date: "09.06.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "GTA Vice City: The Next-Gen Edition",
    Status: "Игра",
    Type: "order-finished",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "19.02.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "В лес, где мерцают светлячки",
    NameEN: "Hotarubi no Mori e",
    Status: "Полнометражка",
    Type: "order-finished",
    Slots: [
      {
        Name: "Статист",
        Slot: "0.5",
        Date: "05.03.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Ещё вчера",
    NameEN: "Omohide poro poro",
    Status: "Полнометражка",
    Type: "order-finished",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "1",
        Date: "30.03.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Удивительный цифровой цирк",
    NameEN: "The Amazing Digital Circus",
    Status: "Мультсериал × Просмотрено: 1 Сезон 1-9/9 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Эклер",
        Slot: "2.5", // 1-9 Эпизод
        Date: "Без даты",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Отец",
    NameEN: "Oyaji",
    Status: "Манга ⨯ Прочитано: 1-25/25 Главы",
    Type: "order-finished",
    Slots: [
      {
        Name: "1-25 Главы",
        Slot: "1.5", // 1-25 Главы
        Date: "Без даты",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Капитан Америка: Дивный новый мир",
    NameEN: "Captain America: Brave New World",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "1",
        Date: "09.06.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Goat: Мечтай по-крупному",
    Status: "Мультфильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Статист",
        Slot: "1",
        Date: "27.09.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Отверженные",
    NameEN: "Les Misérables",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Мисти",
        Slot: "1",
        Date: "21.03.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Одинокий замок в Зазеркалье",
    NameEN: "Kagami no Kojou",
    Status: "Полнометражка",
    Type: "order-finished",
    Slots: [
      {
        Name: "Izida-Sama",
        Slot: "1",
        Date: "21.03.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Фантастическая четвёрка: Первые шаги",
    NameEN: "The Fantastic Four: First Steps",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Nightmare336",
        Slot: "1",
        Date: "09.06.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Фантастическая четверка 2: Вторжение Серебряного серфера",
    NameEN: "Fantastic Four: Rise of the Silver Surfer",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Демон21",
        Slot: "1",
        Date: "24.06.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Фантастическая четверка",
    NameEN: "Fantastic Four",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Демон21",
        Slot: "1",
        Date: "24.06.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Паук-Нуар",
    NameEN: "Spider-Noir",
    Status: "Сериал × Просмотрено: 1 Сезон 1-8/8 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сулейка",
        Slot: "4",
        Date: "27.05.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Меч чужака",
    NameEN: "Stranger: Mukou Hadan",
    Status: "Полнометражка",
    Type: "order-finished",
    Slots: [
      {
        Name: "Рандом",
        Slot: "1",
        Date: "21.03.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Аллея кошмаров",
    NameEN: "Nightmare Alley",
    Status: "Фильм",
    Type: "order-finished",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1",
        Date: "11.03.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Особняк «Красная роза»",
    NameEN: "Rose Red",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-3/3 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 1 Сезон 1-3 Эпизод
        Date: "18.09.24",
        Listed: true,
      },
    ],
  },
  //#region Сопрано
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал ⨯ Просмотрено: 2 Сезон 1-13/13 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сатурдей",
        Slot: "0.5", // 2 Сезон 1 Эпизод
        Date: "23.10.25",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 2-3 Эпизод
        Date: "24.10.25",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 4-5 Эпизод
        Date: "08.01.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 6-7 Эпизод
        Date: "27.01.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 8-9 Эпизод
        Date: "03.02.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 10-11 Эпизод
        Date: "06.03.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 12-13 Эпизод
        Date: "19.03.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-13/13 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сатурдей",
        Slot: "1", // 1 Сезон 1-2 Эпизод
        Date: "27.09.24",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 1 Сезон 3-4 Эпизод
        Date: "18.10.24",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 1 Сезон 5-6 Эпизод
        Date: "06.05.25",
        Listed: true,
      },
      {
        Name: "fudjikayashi",
        Slot: "2", // 1 Сезон 7-10 Эпизод
        Date: "17.06.25",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1.5", // 1 Сезон 11-13 Эпизод
        Date: "23.10.25",
        Listed: true,
      },
    ],
  }, //#endregion
  //#region Южный Парк
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал ⨯ Просмотрено: 2 Сезон 1-18/18 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "0.25", // 2 Сезон 1 Эпизод
        Date: "04.02.26",
        Listed: true,
      },
      {
        Name: "афкМарк",
        Slot: "1", // 2 Сезон 2-5 Эпизод
        Date: "06.02.26",
        Listed: true,
      },
      {
        Name: "Кирвин",
        Slot: "1", // 2 Сезон 6-9 Эпизод
        Date: "22.02.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 2 Сезон 10-13 Эпизод
        Date: "04.03.26",
        Listed: true,
      },
      {
        Name: "Сатурдей",
        Slot: "1", // 2 Сезон 14-17 Эпизод
        Date: "06.03.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "0.25", // 2 Сезон 18 Эпизод
        Date: "21.04.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал ⨯ Просмотрено: 1 Сезон 1-13/13 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Сатурдей",
        Slot: "1", // 1 Сезон 1-4 Эпизод
        Date: "09.12.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 5-8 Эпизод
        Date: "08.03.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 9-12 Эпизод
        Date: "04.02.26",
        Listed: true,
      },
      {
        Name: "Кирвин",
        Slot: "0.25", // 1 Сезон 13 Эпизод
        Date: "04.02.26",
        Listed: true,
      },
    ],
  }, //#endregion
  //#region Декстер
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 7 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Мавроди",
        Slot: "1", // 7 Сезон 1-2 Эпизод
        Date: "22.04.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 7 Сезон 3-4 Эпизод
        Date: "29.05.26",
        Listed: true,
      },
      {
        Name: "Мавроди",
        Slot: "1", // 7 Сезон 5-6 Эпизод
        Date: "05.06.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 7 Сезон 7-8 Эпизод
        Date: "18.06.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 7 Сезон 9-10 Эпизод
        Date: "30.06.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 7 Сезон 11-12 Эпизод
        Date: "31.07.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 6 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "0.5", // 6 Сезон 1 Эпизод
        Date: "11.02.26",
        Listed: true,
      },
      {
        Name: "Мавроди",
        Slot: "1", // 6 Сезон 2-3 Эпизод
        Date: "12.02.26",
        Listed: true,
      },
      {
        Name: "Мавроди",
        Slot: "1.5", // 6 Сезон 4-6 Эпизод
        Date: "06.03.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1.5", // 6 Сезон 7-9 Эпизод
        Date: "17.03.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1.5", // 6 Сезон 10-12 Эпизод
        Date: "22.04.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 5 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 1-2 Эпизод
        Date: "25.12.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 3-4 Эпизод
        Date: "06.01.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 5-6 Эпизод
        Date: "08.01.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 7-8 Эпизод
        Date: "27.01.26",
        Listed: true,
      },
      {
        Name: "Мавроди",
        Slot: "1.5", // 5 Сезон 9-11 Эпизод
        Date: "30.01.26",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "0.5", // 5 Сезон 12 Эпизод
        Date: "11.02.26",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 4 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 4 Сезон 1-4 Эпизод
        Date: "30.09.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 4 Сезон 5-8 Эпизод
        Date: "02.11.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 4 Сезон 9-10 Эпизод
        Date: "10.11.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 4 Сезон 11-12 Эпизод
        Date: "11.11.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 3 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Кирвин",
        Slot: "1", // 3 Сезон 1-2 Эпизод
        Date: "29.08.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 3-4 Эпизод
        Date: "31.08.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 5-6 Эпизод
        Date: "07.09.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 7-8 Эпизод
        Date: "16.09.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 9-10 Эпизод
        Date: "19.09.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 11-12 Эпизод
        Date: "30.09.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 2 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Зеро_ИК",
        Slot: "3", // 2 Сезон 1-6 Эпизод
        Date: "25.10.23",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 2 Сезон 7-10 Эпизод
        Date: "29.10.23",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 2 Сезон 11-12 Эпизод
        Date: "21.12.23",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "Зеро_ИК",
        Slot: "6", // 1 Сезон 1-12 Эпизод
        Date: "10.08.23",
        Listed: true,
      },
    ],
  }, //#endregion
  //#region Сверхъестественное
  {
    NameRU: "Сверхъестественное",
    NameEN: "Supernatural",
    Status: "Сериал, 5 Сезон 1-22/22 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 1-2 Эпизод
        Date: "15.08.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 3-4 Эпизод
        Date: "28.08.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 5 Сезон 5-8 Эпизод
        Date: "16.09.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 9-10 Эпизод
        Date: "28.09.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 11-12 Эпизод
        Date: "12.10.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 13-14 Эпизод
        Date: "21.10.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 5 Сезон 15-18 Эпизод
        Date: "27.10.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 19-20 Эпизод
        Date: "11.11.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 5 Сезон 21-22 Эпизод
        Date: "18.11.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Сверхъестественное",
    NameEN: "Supernatural",
    Status: "Сериал, 4 Сезон 1-22/22 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "3", // 4 Сезон 1-6 Эпизод
        Date: "25.07.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 4 Сезон 7-8 Эпизод
        Date: "25.07.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "3", // 4 Сезон 9-14 Эпизод
        Date: "05.08.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 4 Сезон 15-18 Эпизод
        Date: "06.08.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 4 Сезон 19-22 Эпизод
        Date: "15.08.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Сверхъестественное",
    NameEN: "Supernatural",
    Status: "Сериал, 3 Сезон 1-16/16 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "0.5", // 3 Сезон 1 Эпизод
        Date: "05.06.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 3 Сезон 2-5 Эпизод
        Date: "30.06.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 3 Сезон 6-9 Эпизод
        Date: "15.07.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2.5", // 3 Сезон 10-14 Эпизод
        Date: "20.07.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 3 Сезон 15-16 Эпизод
        Date: "25.07.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Сверхъестественное",
    NameEN: "Supernatural",
    Status: "Сериал, 2 Сезон 1-22/22 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 2 Сезон 1-2 Эпизод
        Date: "24.11.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2.5", // 2 Сезон 3-7 Эпизод
        Date: "15.12.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 2 Сезон 8-9 Эпизод
        Date: "22.01.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 2 Сезон 10-11 Эпизод
        Date: "20.02.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 2 Сезон 12-15 Эпизод
        Date: "06.04.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 2 Сезон 16-19 Эпизод
        Date: "08.05.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1.5", // 2 Сезон 20-22 Эпизод
        Date: "05.06.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Сверхъестественное",
    NameEN: "Supernatural",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-22/22 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "3", // 1 Сезон 1-6 Эпизод
        Date: "10.05.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 1 Сезон 7-10 Эпизод
        Date: "15.06.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 11-12 Эпизод
        Date: "16.08.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 13-14 Эпизод
        Date: "11.09.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 1 Сезон 15-18 Эпизод
        Date: "18.10.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 19-20 Эпизод
        Date: "01.11.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 21-22 Эпизод
        Date: "09.11.24",
        Listed: true,
      },
    ],
  }, //#endregion
  //#region Дневники вампира
  {
    NameRU: "Дневники вампира",
    NameEN: "The Vampire Diaries",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-22/22 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1.5", // 1 Сезон 1-3 Эпизод
        Date: "09.10.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 4-5 Эпизод
        Date: "18.10.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 6-7 Эпизод
        Date: "26.10.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 8-9 Эпизод
        Date: "01.11.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 10-11 Эпизод
        Date: "24.11.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "1", // 1 Сезон 12-13 Эпизод
        Date: "11.01.25",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "4.5", // 1 Сезон 14-22 Эпизод
        Date: "21.01.25",
        Listed: true,
      },
    ],
  }, //#endregion
  //#region Американская история ужасов
  {
    NameRU: "Американская история ужасов: Апокалипсис",
    NameEN: "American Horror Story: Apocalypse",
    Status: "Сериал ⨯ Просмотрено: 8 Сезон 1-10/10 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "5", // 1 Сезон 1-10 Эпизод
        Date: "25.12.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Американская история ужасов: Отель",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал ⨯ Просмотрено: 5 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "6", // 1 Сезон 1-12 Эпизод
        Date: "25.12.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Американская история ужасов: Шабаш",
    NameEN: "American Horror Story: Coven",
    Status: "Сериал ⨯ Просмотрено: 3 Сезон 1-13/13 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "3.5", // 1 Сезон 1-7 Эпизод
        Date: "28.09.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "3", // 1 Сезон 8-13 Эпизод
        Date: "09.12.25",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Американская история ужасов: Психбольница",
    NameEN: "American Horror Story: Asylum",
    Status: "Сериал ⨯ Просмотрено: 2 Сезон 1-13/13 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "2", // 1 Сезон 1-4 Эпизод
        Date: "18.05.24",
        Listed: true,
      },
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "4.5", // 1 Сезон 5-13 Эпизод
        Date: "08.06.24",
        Listed: true,
      },
    ],
  },
  {
    NameRU: "Американская история ужасов: Дом-убийца",
    NameEN: "American Horror Story: Murder House",
    Status: "Сериал ⨯ Просмотрено: 1 Сезон 1-12/12 Эпизод",
    Type: "order-finished",
    Slots: [
      {
        Name: "ТВОЮ МАТЬ",
        Slot: "6", // 1 Сезон 1-12 Эпизод
        Date: "09.12.23",
        Listed: true,
      },
    ],
  },
  //#endregion
];
