const scheduleDatabase = [
  //#region Текущая неделя
  /* ШАБЛОН
  {
    NameRU: "Name",
    NameEN: "Name",
    Status: "Status",
    Current: true,
    Date: "00.09.26",
  },
  */

  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: true,
    Date: "21.09.26",
  },
  // Вторник
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 4 Сезон 15-18 Эпизод",
    Current: true,
    Date: "22.09.26",
  },
  {
    NameRU: "Покер",
    Current: true,
    Date: "22.09.26",
  },
  // Среда
  {
    NameRU: "Алиса в Пограничье",
    NameEN: "Imawa no Kuni no Arisu",
    Status: "Сериал × 2 Сезон 4-6 Эпизод",
    Current: true,
    Date: "23.09.26",
  },
  // Четверг
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × Начало в 15:00 по МСК",
    //Status: "Сериал × 4 Сезон 19-20 Эпизод",
    Current: true,
    Date: "24.09.26",
  },
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × Начало в 17:00 по МСК",
    //Status: "Сериал × 1 Сезон 13-14 Эпизод",
    Current: true,
    Date: "24.09.26",
  },
  {
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра × Начало в 19:00 по МСК",
    Current: true,
    Date: "24.09.26",
  },
  {
    NameRU: "Покер",
    Status: "Начало в 21:00 по МСК",
    Current: true,
    Date: "24.09.26",
  },
  // Пятница
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai / The Seven Deadly Sins",
    Status: "Аниме × Начало в 16:00 по МСК",
    //Status: "Аниме × 2 Сезон 13-24 Эпизод",
    Current: true,
    Date: "25.09.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: true,
    Date: "26.09.26",
  },
  // Воскресенье
  {
    NameRU: "Трансформеры",
    Status: "Начало в 16:00 по МСК",
    Current: true,
    Date: "27.09.26",
  },
  {
    NameRU: "Целитель Адамс",
    NameEN: "Patch Adams",
    Status: "Фильм × Начало в 16:00 по МСК",
    Current: true,
    Date: "27.09.26",
  },
  {
    NameRU: "The Alters",
    Status: "Игра × Начало в 16:00 по МСК",
    Current: true,
    Date: "27.09.26",
  },

  //#region Старое: Январь 26
  // Четверг
  {
    NameRU: "Алёша Попович и Тугарин Змей",
    Status: "Игра",
    Current: false,
    Date: "01.01.26",
  },
  // Пятница
  {
    NameRU: "Очень странные дела",
    NameEN: "Stranger Things",
    Status: "Сериал × 5 Сезон 5-7 Эпизод",
    Current: false,
    Date: "02.01.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "03.01.26",
  },
  // Воскресенье
  {
    NameRU: "Ох уж этот экстрасенс Сайки Кусуо!",
    NameEN: "Saiki Kusuo no Ψ-nan",
    Status: "Аниме × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "04.01.26",
  },
  {
    NameRU: "Человек-бензопила: История Резе",
    NameEN: "Chainsaw Man Movie: Reze-hen",
    Status: "Полнометражка",
    Current: false,
    Date: "04.01.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "05.01.26",
  },
  // Вторник
  {
    NameRU: "Ох уж этот экстрасенс Сайки Кусуо!",
    NameEN: "Saiki Kusuo no Ψ-nan",
    Status: "Аниме × 1 Сезон 5-8 Эпизод",
    Current: false,
    Date: "06.01.26",
  },
  {
    NameRU: "Очень странные дела",
    NameEN: "Stranger Things",
    Status: "Сериал × 5 Сезон 8 Эпизод",
    Current: false,
    Date: "06.01.26",
  },
  {
    NameRU: "Терминатор",
    NameEN: "The Terminator",
    Status: "Фильм",
    Current: false,
    Date: "06.01.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "06.01.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "07.01.26",
  },
  // Четверг
  {
    NameRU: "Кошечка из Сакурасо",
    NameEN: "Sakura-sou no Pet na Kanojo",
    Status: "Аниме × 1 Сезон 13-15 Эпизод",
    Current: false,
    Date: "08.01.26",
  },
  {
    NameRU: "Секретные материалы",
    NameEN: "The X-Files",
    Status: "Сериал × 1 Сезон 21-24 Эпизод",
    Current: false,
    Date: "08.01.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 5 Сезон 3-4 Эпизод",
    Current: false,
    Date: "08.01.26",
  },
  // Пятница
  {
    NameRU: "Восхождение в тени! / Кардинал теней",
    NameEN: "Kage no Jitsuryokusha ni Naritakute!",
    Status: "Аниме × 1 Сезон 14-17 Эпизод",
    Current: false,
    Date: "09.01.26",
  },
  {
    NameRU: "Да, я паук, и что с того?",
    NameEN: "Kumo Desu ga, Nanika?",
    Status: "Аниме × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "09.01.26",
  },
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia / My Hero Academia",
    Status: "Аниме × 4 Сезон 5-7 Эпизод",
    Current: false,
    Date: "09.01.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "10.01.26",
  },
  // Воскресенье
  {
    NameRU: "Кошечка из Сакурасо",
    NameEN: "Sakura-sou no Pet na Kanojo",
    Status: "Аниме × 1 Сезон 16 Эпизод",
    Current: false,
    Date: "11.01.26",
  },
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia / My Hero Academia",
    Status: "Аниме × 4 Сезон 8-14 Эпизод",
    Current: false,
    Date: "11.01.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "11.01.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "12.01.26",
  },
  // Вторник
  {
    NameRU: "Укрась прощальное утро цветами обещания",
    NameEN: "Sayonara no Asa ni Yakusoku no Hana wo Kazarou",
    Status: "Полнометражка",
    Current: false,
    Date: "13.01.26",
  },
  {
    NameRU: "Малыш на драйве",
    NameEN: "Baby Driver",
    Status: "Фильм",
    Current: false,
    Date: "13.01.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "13.01.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "14.01.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "15.01.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "16.01.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "17.01.26",
  },
  // Воскресенье
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "18.01.26",
  },
  // Понедельник
  {
    NameRU: "Покер",
    Current: false,
    Date: "19.01.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "20.01.26",
  },
  // Среда
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 5 Сезон 5-6 Эпизод",
    Current: false,
    Date: "21.01.26",
  },
  {
    NameRU: "Хищник: Планета смерти",
    NameEN: "Predator: Badlands",
    Status: "Фильм",
    Current: false,
    Date: "21.01.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "21.01.26",
  },
  // Четверг
  {
    NameRU: "Восхождение в тени! / Кардинал теней",
    NameEN: "Kage no Jitsuryokusha ni Naritakute!",
    Status: "Аниме × 1 Сезон 18-20 Эпизод",
    Current: false,
    Date: "22.01.26",
  },
  {
    NameRU: "Драгон Болл",
    NameEN: "Dragon Ball",
    Status: "Аниме × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "22.01.26",
  },
  {
    NameRU: "Дандадан",
    NameEN: "Dandadan",
    Status: "Аниме × 1 Сезон 8-9 Эпизод",
    Current: false,
    Date: "22.01.26",
  },
  // Пятница
  {
    NameRU: "Флэш",
    NameEN: "The Flash",
    Status: "Сериал × 1 Сезон 11-12 Эпизод",
    Current: false,
    Date: "23.01.26",
  },
  {
    NameRU: "Мастер вздрочки Куросава",
    NameEN: "Onanie Master Kurosawa",
    Status: "Манга",
    Current: false,
    Date: "23.01.26",
  },
  {
    NameRU: "Авиатор",
    NameEN: "The Aviator",
    Status: "Фильм",
    Current: false,
    Date: "23.01.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "24.01.26",
  },
  // Воскресенье
  {
    NameRU: "Сатанинское танго",
    NameEN: "Sátántangó",
    Status: "Фильм 2/3",
    Current: false,
    Date: "25.01.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "26.01.26",
  },
  // Вторник
  {
    NameRU: "Классический Доктор Кто",
    NameEN: "Doctor Who",
    Status: "Сериал × 21 Сезон 7 Эпизод",
    Current: false,
    Date: "27.01.26",
  },
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал × 5 Сезон 1-2 Эпизод",
    Current: false,
    Date: "27.01.26",
  },
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 2 Сезон 1-2 Эпизод",
    Current: false,
    Date: "27.01.26",
  },
  // Среда
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 5 Сезон 7-8 Эпизод",
    Current: false,
    Date: "28.01.26",
  },
  {
    NameRU: "Сатанинское танго",
    NameEN: "Sátántangó",
    Status: "Фильм 3/3",
    Current: false,
    Date: "28.01.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "29.01.26",
  },
  // Пятница
  {
    NameRU: "С нашей эволюцией что-то не так",
    NameEN: "ALI",
    Status: "Ютуб",
    Current: false,
    Date: "30.01.26",
  },
  {
    NameRU: "Мастер вздрочки Куросава",
    NameEN: "Onanie Master Kurosawa",
    Status: "Манга",
    Current: false,
    Date: "30.01.26",
  },
  {
    NameRU: "Machinarium",
    Status: "Игра",
    Current: false,
    Date: "30.01.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "31.01.26",
  },
  //#endregion
  //#region Старое: Февраль 26
  // Воскресенье
  {
    NameRU: "Half-Life: Alyx",
    Status: "Игра",
    Current: false,
    Date: "01.02.26",
  },
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 4 Сезон 15-25 Эпизод",
    Current: false,
    Date: "01.02.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "02.02.26",
  },
  // Вторник
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 2 Сезон 3-6 Эпизод",
    Current: false,
    Date: "03.02.26",
  },
  // Среда
  {
    NameRU: "Дандадан",
    NameEN: "Dandadan",
    Status: "Аниме × 1 Сезон 10-12 Эпизод",
    Current: false,
    Date: "04.02.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 1 Сезон 1-5 Эпизод",
    Current: false,
    Date: "04.02.26",
  },
  // Четверг
  {
    NameRU: "Клинок, рассекающий демонов",
    NameEN: "Kimetsu no Yaiba: Hashira Geiko-hen",
    Status: "Аниме × 4 Сезон 1-8 Эпизод",
    Current: false,
    Date: "05.02.26",
  },
  // Пятница
  {
    NameRU: "Мастер вздрочки Куросава",
    NameEN: "Onanie Master Kurosawa",
    Status: "Манга × 24-33 Главы",
    Current: false,
    Date: "06.02.26",
  },
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал × 5 Сезон 3-4 Эпизод",
    Current: false,
    Date: "06.02.26",
  },
  {
    NameRU: "Дандадан",
    NameEN: "Dandadan",
    Status: "Аниме × 2 Сезон 1-4 Эпизод",
    Current: false,
    Date: "06.02.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "07.02.26",
  },
  // Воскресенье
  {
    NameRU: "Убийцы цветочной луны",
    NameEN: "Killers of the Flower Moon",
    Status: "Фильм",
    Current: false,
    Date: "08.02.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "09.02.26",
  },
  // Вторник
  {
    NameRU: "Атомный лес",
    Status: "Мультсериал × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "10.02.26",
  },
  {
    NameRU: "Дандадан",
    NameEN: "Dandadan",
    Status: "Аниме × 2 Сезон 5-12 Эпизод",
    Current: false,
    Date: "10.02.26",
  },
  // Среда
  {
    NameRU: "Атомный лес",
    Status: "Мультсериал × 1 Сезон 5-8 Эпизод",
    Current: false,
    Date: "11.02.26",
  },
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал × 5 Сезон 5-6 Эпизод",
    Current: false,
    Date: "11.02.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 5 Сезон 9-10 Эпизод",
    Current: false,
    Date: "11.02.26",
  },
  // Четверг
  {
    NameRU: "Принц Галактики",
    Status: "Мультсериал × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "12.02.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 5 Сезон 11-12 Эпизод",
    Current: false,
    Date: "12.02.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 1 Сезон 7-10 Эпизод",
    Current: false,
    Date: "12.02.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "12.02.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "13.02.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "14.02.26",
  },
  // Воскресенье
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "15.02.26",
  },
  // Понедельник
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал × 5 Сезон 7-8 Эпизод",
    Current: false,
    Date: "16.02.26",
  },
  {
    NameRU: "Machinarium",
    Status: "Игра",
    Current: false,
    Date: "16.02.26",
  },
  {
    NameRU: "Троя",
    NameEN: "Troy",
    Status: "Фильм",
    Current: false,
    Date: "16.02.26",
  },
  // Вторник
  {
    NameRU: "Machinarium",
    Status: "Игра",
    Current: false,
    Date: "17.02.26",
  },
  {
    NameRU: "Покер",
    Status: "Тип × Серии",
    Current: false,
    Date: "17.02.26",
  },
  // Среда
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал × 5 Сезон 11-12 Эпизод",
    Current: false,
    Date: "18.02.26",
  },
  {
    NameRU: "Machinarium",
    Status: "Игра",
    Current: false,
    Date: "18.02.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "18.02.26",
  },
  // Четверг
  {
    NameRU: "Кромешная тьма",
    NameEN: "Pitch Black",
    Status: "Фильм",
    Current: false,
    Date: "19.02.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "20.02.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "21.02.26",
  },
  // Воскресенье
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 5 Сезон 1-11 Эпизод",
    Current: false,
    Date: "22.02.26",
  },
  // Понедельник
  {
    NameRU: "Немыслимое",
    NameEN: "Unthinkable",
    Status: "Фильм",
    Current: false,
    Date: "23.02.26",
  },
  {
    NameRU: "Иван Васильевич меняет профессию",
    Status: "Фильм",
    Current: false,
    Date: "23.02.26",
  },
  {
    NameRU: "Джуманджи",
    NameEN: "Jumanji",
    Status: "Фильм",
    Current: false,
    Date: "23.02.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "24.02.26",
  },
  // Среда
  {
    NameRU: "Союз Серокрылых",
    NameEN: "Haibane Renmei",
    Status: "Аниме × 1 Сезон 1-13 Эпизод",
    Current: false,
    Date: "25.02.26",
  },
  {
    NameRU: "С широко закрытыми глазами",
    NameEN: "Eyes Wide Shut",
    Status: "Фильм",
    Current: false,
    Date: "25.02.26",
  },
  // Четверг
  {
    NameRU: "Выходной день Ферриса Бьюллера",
    NameEN: "Ferris Bueller's Day Off",
    Status: "Фильм",
    Current: false,
    Date: "26.02.26",
  },
  {
    NameRU: "Чёрный клевер: Меч короля магов",
    NameEN: "Black Clover: Mahou Tei no Ken",
    Status: "Полнометражка",
    Current: false,
    Date: "26.02.26",
  },
  {
    NameRU: "Хроники Риддика",
    NameEN: "The Chronicles of Riddick",
    Status: "Фильм",
    Current: false,
    Date: "26.02.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "27.02.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "28.02.26",
  },
  //#endregion
  //#region Старое: Март 26
  // Воскресенье
  {
    NameRU: "Инуяшики",
    NameEN: "Inuyashiki",
    Status: "Аниме × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "01.03.26",
  },
  {
    NameRU: "Для тебя, Бессмертный",
    NameEN: "Fumetsu no Anata e",
    Status: "Аниме × 2 Сезон 1-4 Эпизод",
    Current: false,
    Date: "01.03.26",
  },
  {
    NameRU: "Белая птица",
    NameEN: "White Bird",
    Status: "Фильм",
    Current: false,
    Date: "01.03.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "02.03.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "03.03.26",
  },
  // Среда
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Hotel",
    Status: "Сериал × 5 Сезон 11-12 Эпизод",
    Current: false,
    Date: "04.03.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 6 Сезон 1-2 Эпизод",
    Current: false,
    Date: "04.03.26",
  },
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 2 Сезон 7-8 Эпизод",
    Current: false,
    Date: "04.03.26",
  },
  // Четверг
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 5 Сезон 12-23 Эпизод",
    Current: false,
    Date: "05.03.26",
  },
  // Пятница
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 2 Сезон 9-13 Эпизод",
    Current: false,
    Date: "06.03.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "07.03.26",
  },
  // Воскресенье
  {
    NameRU: "Шестое чувство",
    NameEN: "The Sixth Sense",
    Status: "Фильм",
    Current: false,
    Date: "08.03.26",
  },
  {
    NameRU: "Риддик",
    NameEN: "Riddick",
    Status: "Фильм",
    Current: false,
    Date: "08.03.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 1 Сезон 6, 11-13 Эпизод",
    Current: false,
    Date: "08.03.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "09.03.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "10.03.26",
  },
  // Среда
  {
    NameRU: "Соучастник",
    NameEN: "Collateral",
    Status: "Фильм",
    Current: false,
    Date: "11.03.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 2 Сезон 1-4 Эпизод",
    Current: false,
    Date: "11.03.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "12.03.26",
  },
  // Пятница
  {
    NameRU: "Очень страшное кино",
    NameEN: "Scary Movie",
    Status: "Фильм",
    Current: false,
    Date: "13.03.26",
  },
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 5 Сезон 24-25 Эпизод",
    Current: false,
    Date: "13.03.26",
  },
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 6 Сезон 1-10 Эпизод",
    Current: false,
    Date: "13.03.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "14.03.26",
  },
  // Воскресенье
  {
    NameRU: "У меня нет любовницы! (А может и есть?!)",
    NameEN: "Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri!",
    Status: "Аниме × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "15.03.26",
  },
  {
    NameRU: "Турбо-пацан",
    NameEN: "Turbo Kid",
    Status: "Фильм",
    Current: false,
    Date: "15.03.26",
  },
  {
    NameRU: "Ван Пис. Большой куш",
    NameEN: "One Piece",
    Status: "Сериал × 2 Сезон 1-3 Эпизод",
    Current: false,
    Date: "15.03.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "16.03.26",
  },
  // Вторник
  {
    NameRU: "Планета сокровищ",
    NameEN: "Treasure Planet",
    Status: "Мультфильм",
    Current: false,
    Date: "17.03.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 6 Сезон 3-4 Эпизод",
    Current: false,
    Date: "17.03.26",
  },
  // Среда
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Apocalypse",
    Status: "Сериал × 8 Сезон 1-2 Эпизод",
    Current: false,
    Date: "18.03.26",
  },
  {
    NameRU: "Ох уж этот экстрасенс Сайки Кусуо!",
    NameEN: "Saiki Kusuo no Ψ-nan",
    Status: "Аниме × 1 Сезон 9-12 Эпизод",
    Current: false,
    Date: "18.03.26",
  },
  {
    NameRU: "Омен",
    NameEN: "The Omen",
    Status: "Фильм",
    Current: false,
    Date: "18.03.26",
  },
  // Четверг
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 3 Сезон 1-2 Эпизод",
    Current: false,
    Date: "19.03.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 2 Сезон 5-8 Эпизод",
    Current: false,
    Date: "19.03.26",
  },
  {
    NameRU: "CODA: Ребёнок глухих родителей",
    Status: "Фильм",
    Current: false,
    Date: "19.03.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "20.03.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "21.03.26",
  },
  // Воскресенье
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 6 Сезон 11-25 Эпизод",
    Current: false,
    Date: "22.03.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "23.03.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "24.03.26",
  },
  // Среда
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Apocalypse",
    Status: "Сериал × 8 Сезон 3-4 Эпизод",
    Current: false,
    Date: "25.03.26",
  },
  {
    NameRU: "Киберслав",
    Status: "Мультсериал × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "25.03.26",
  },
  {
    NameRU: "Ван Пис. Большой куш",
    NameEN: "One Piece",
    Status: "Сериал × 2 Сезон 4-7 Эпизод",
    Current: false,
    Date: "25.03.26",
  },
  // Четверг
  {
    NameRU: "Звёздные войны: Войны клонов",
    NameEN: "Star Wars: The Clone Wars",
    Status: "Мультсериал × 5 Сезон 5-12 Эпизод",
    Current: false,
    Date: "26.03.26",
  },
  // Пятница
  {
    NameRU: "Звёздные войны: Войны клонов",
    NameEN: "Star Wars: The Clone Wars",
    Status: "Мультсериал × 5 Сезон 13-20 Эпизод",
    Current: false,
    Date: "27.03.26",
  },
  {
    NameRU: "Slay the Princess",
    Status: "Игра",
    Current: false,
    Date: "27.03.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "28.03.26",
  },
  // Воскресенье
  {
    NameRU: "Slay the Princess",
    Status: "Игра",
    Current: false,
    Date: "29.03.26",
  },
  {
    NameRU: "Звёздные войны: Войны клонов",
    NameEN: "Star Wars: The Clone Wars",
    Status: "Мультсериал × 6 Сезон 1-7 Эпизод",
    Current: false,
    Date: "29.03.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "30.03.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "31.03.26",
  },
  //#endregion
  //#region Старое: Апрель 26
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "01.04.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "02.04.26",
  },
  // Пятница
  {
    NameRU: "Звёздные войны: Войны клонов",
    NameEN: "Star Wars: The Clone Wars",
    Status: "Мультсериал × 6 Сезон 8-13 Эпизод",
    Current: false,
    Date: "03.04.26",
  },
  {
    NameRU: "Звёздные войны: Войны клонов",
    NameEN: "Star Wars: The Clone Wars",
    Status: "Мультсериал × 7 Сезон 1-4 Эпизод",
    Current: false,
    Date: "03.04.26",
  },
  {
    NameRU: "Области тьмы",
    NameEN: "Limitless",
    Status: "Фильм",
    Current: false,
    Date: "03.04.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "04.04.26",
  },
  // Воскресенье
  {
    NameRU: "Звёздные войны: Войны клонов",
    NameEN: "Star Wars: The Clone Wars",
    Status: "Мультсериал × 7 Сезон 5-8 Эпизод",
    Current: false,
    Date: "05.04.26",
  },
  {
    NameRU: "Ван Пис. Большой куш",
    NameEN: "One Piece",
    Status: "Сериал × 2 Сезон 8 Эпизод",
    Current: false,
    Date: "05.04.26",
  },
  {
    NameRU: "Адреналин",
    NameEN: "Crank",
    Status: "Фильм",
    Current: false,
    Date: "05.04.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "06.04.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "07.04.26",
  },
  // Среда
  {
    NameRU: "Омен 2: Дэмиен",
    NameEN: "Damien: Omen II",
    Status: "Фильм",
    Current: false,
    Date: "08.04.26",
  },
  {
    NameRU: "Игра в кальмара",
    NameEN: "Ojingeo geim",
    Status: "Сериал × 2 Сезон 1-2 Эпизод",
    Current: false,
    Date: "08.04.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 2 Сезон 9-12 Эпизод",
    Current: false,
    Date: "08.04.26",
  },
  // Четверг
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Apocalypse",
    Status: "Сериал × 8 Сезон 5-6 Эпизод",
    Current: false,
    Date: "09.04.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 6 Сезон 5-6 Эпизод",
    Current: false,
    Date: "09.04.26",
  },
  {
    NameRU: "Искусственный разум",
    NameEN: "Artificial Intelligence: AI",
    Status: "Фильм",
    Current: false,
    Date: "09.04.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "10.04.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "11.04.26",
  },
  // Воскресенье
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "12.04.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "13.04.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "14.04.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "15.04.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "16.04.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "17.04.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "18.04.26",
  },
  // Воскресенье
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × 1 Сезон 1133-1136 Эпизод",
    Current: false,
    Date: "19.04.26",
  },
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × 1 Сезон 1137-1141 Эпизод",
    Current: false,
    Date: "19.04.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "20.04.26",
  },
  // Вторник
  {
    NameRU: "Американская история ужасов",
    NameEN: "American Horror Story: Apocalypse",
    Status: "Сериал × 8 Сезон 7-10 Эпизод",
    Current: false,
    Date: "21.04.26",
  },
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 3 Сезон 3-5 Эпизод",
    Current: false,
    Date: "21.04.26",
  },
  // Среда
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × 1 Сезон 1142-1145 Эпизод",
    Current: false,
    Date: "22.04.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 6 Сезон 8-10 Эпизод",
    Current: false,
    Date: "22.04.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "23.04.26",
  },
  // Пятница
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × 1 Сезон 1146-1149 Эпизод",
    Current: false,
    Date: "24.04.26",
  },
  {
    NameRU: "Моя геройская академия 2: Восхождение героев",
    NameEN: "Boku no Hero Academia the Movie 2: Heroes:Rising",
    Status: "Полнометражка",
    Current: false,
    Date: "24.04.26",
  },
  {
    NameRU: "Хороший динозавр",
    NameEN: "The Good Dinosaur",
    Status: "Мультфильм",
    Current: false,
    Date: "24.04.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "25.04.26",
  },
  // Воскресенье
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 7 Сезон 1-8 Эпизод",
    Current: false,
    Date: "26.04.26",
  },
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × 1 Сезон 1150-1153 Эпизод",
    Current: false,
    Date: "26.04.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "27.04.26",
  },
  // Вторник
  {
    NameRU: "Эксель-сага",
    NameEN: "Heppoko Jikken Animation Excel♥Saga",
    Status: "Аниме × 1 Сезон 9-12 Эпизод",
    Current: false,
    Date: "28.04.26",
  },
  {
    NameRU: "Твоя апрельская ложь",
    NameEN: "Shigatsu wa Kimi no Uso",
    Status: "Аниме × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "28.04.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 6 Сезон 11-12 Эпизод",
    Current: false,
    Date: "28.04.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "29.04.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "30.04.26",
  },
  //#endregion
  //#region Старое: Май 26
  // Пятница
  {
    NameRU: "Воин",
    NameEN: "Warrior",
    Status: "Фильм",
    Current: false,
    Date: "01.05.26",
  },
  {
    NameRU: "Невероятное приключение ДжоДжо: Гонка «Стальной шар»",
    NameEN: "Steel Ball Run: JoJo no Kimyou na Bouken",
    Status: "Аниме × 7 Сезон 1 Эпизод",
    Current: false,
    Date: "01.05.26",
  },
  {
    NameRU: "Омен 3: Последний конфликт",
    NameEN: "The Final Conflict",
    Status: "Фильм",
    Current: false,
    Date: "01.05.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "02.05.26",
  },
  // Воскресенье
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 2 Сезон 13-16 Эпизод",
    Current: false,
    Date: "03.05.26",
  },
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Аниме × 1 Сезон 1154-1157 Эпизод",
    Current: false,
    Date: "03.05.26",
  },
  {
    NameRU: "Сокол и Зимний Солдат",
    NameEN: "The Falcon and the Winter Soldier",
    Status: "Сериал × 1 Сезон 1-2 Эпизод",
    Current: false,
    Date: "03.05.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "04.05.26",
  },
  // Вторник
  {
    NameRU: "Особняк «Красная роза»",
    NameEN: "Rose Red",
    Status: "Сериал × 1 Сезон 1-3 Эпизод",
    Current: false,
    Date: "05.05.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "06.05.26",
  },
  // Четверг
  {
    NameRU: "Твоя апрельская ложь",
    NameEN: "Shigatsu wa Kimi no Uso",
    Status: "Аниме × 1 Сезон 5-10 Эпизод",
    Current: false,
    Date: "07.05.26",
  },
  {
    NameRU: "Впервые на экране",
    NameEN: "Now Showing",
    Status: "Книга",
    Current: false,
    Date: "07.05.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "08.05.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "09.05.26",
  },
  // Воскресенье
  {
    NameRU: "Звёздные войны: Сказания джедаев",
    NameEN: "Star Wars: Tales of the Jedi",
    Status: "Мультсериал × 1 Сезон 1-6 Эпизод",
    Current: false,
    Date: "10.05.26",
  },
  {
    NameRU: "Корпорация «Святые моторы»",
    NameEN: "Holy Motors",
    Status: "Фильм",
    Current: false,
    Date: "10.05.26",
  },
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 3 Сезон 6-7 Эпизод",
    Current: false,
    Date: "10.05.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "11.05.26",
  },
  // Вторник
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 7 Сезон 9-17 Эпизод",
    Current: false,
    Date: "12.05.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "13.05.26",
  },
  // Четверг
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1128-1134 Главы",
    Current: false,
    Date: "14.05.26",
  },
  {
    NameRU: "Анатомия падения",
    NameEN: "Anatomie d'une chute",
    Status: "Фильм",
    Current: false,
    Date: "14.05.26",
  },
  // Пятница
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1135-1141 Главы",
    Current: false,
    Date: "15.05.26",
  },
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 7 Сезон 18-21 Эпизод",
    Current: false,
    Date: "15.05.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "16.05.26",
  },
  // Воскресенье
  {
    NameRU: "Для тебя, Бессмертный",
    NameEN: "Fumetsu no Anata e",
    Status: "Аниме × 2 Сезон 5-8 Эпизод",
    Current: false,
    Date: "17.05.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 7 Сезон 1-2 Эпизод",
    Current: false,
    Date: "17.05.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "18.05.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "19.05.26",
  },
  // Среда
  {
    NameRU: "Твоя апрельская ложь",
    NameEN: "Shigatsu wa Kimi no Uso",
    Status: "Аниме × 1 Сезон 11-14 Эпизод",
    Current: false,
    Date: "20.05.26",
  },
  {
    NameRU: "Сокол и Зимний Солдат",
    NameEN: "The Falcon and the Winter Soldier",
    Status: "Сериал × 1 Сезон 3-4 Эпизод",
    Current: false,
    Date: "20.05.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 2 Сезон 17-18 Эпизод",
    Current: false,
    Date: "20.05.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 3 Сезон 1-2 Эпизод",
    Current: false,
    Date: "20.05.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "21.05.26",
  },
  // Пятница
  {
    NameRU: "Моя геройская академия",
    NameEN: "Boku no Hero Academia",
    Status: "Аниме × 8 Сезон 1-11 Эпизод",
    Current: false,
    Date: "22.05.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "23.05.26",
  },
  // Воскресенье
  {
    NameRU: "Моя геройская академия: Больше",
    NameEN: "Boku no Hero Academia: More",
    Status: "Аниме × Спешл",
    Current: false,
    Date: "24.05.26",
  },
  {
    NameRU: "Бездна",
    NameEN: "The Abyss",
    Status: "Фильм",
    Current: false,
    Date: "24.05.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "25.05.26",
  },
  // Вторник
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1142-1149 Главы",
    Current: false,
    Date: "26.05.26",
  },
  {
    NameRU: "Твоя апрельская ложь",
    NameEN: "Shigatsu wa Kimi no Uso",
    Status: "Аниме × 1 Сезон 15-22 Эпизод",
    Current: false,
    Date: "26.05.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "27.05.26",
  },
  // Четверг
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 7 Сезон 3-5 Эпизод",
    Current: false,
    Date: "28.05.26",
  },
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1150-1155 Главы",
    Current: false,
    Date: "28.05.26",
  },
  // Пятница
  {
    NameRU: "Сокол и Зимний Солдат",
    NameEN: "The Falcon and the Winter Soldier",
    Status: "Сериал × 1 Сезон 5-6 Эпизод",
    Current: false,
    Date: "29.05.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 3 Сезон 3-6 Эпизод",
    Current: false,
    Date: "29.05.26",
  },
  {
    NameRU: "Фантастическая четверка",
    NameEN: "Fantastic Four",
    Status: "Фильм",
    Current: false,
    Date: "29.05.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "30.05.26",
  },
  // Воскресенье
  {
    NameRU: "Паук-Нуар",
    NameEN: "Spider-Noir",
    Status: "Сериал × 1 Сезон 1-4 Эпизод",
    Current: false,
    Date: "31.05.26",
  },
  //#endregion
  //#region Старое: Июнь 26
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "01.06.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "02.06.26",
  },
  // Среда
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1156-1163 Главы",
    Current: false,
    Date: "03.06.26",
  },
  {
    NameRU: "Паук-Нуар",
    NameEN: "Spider-Noir",
    Status: "Сериал × 5-8 Эпизод",
    Current: false,
    Date: "03.06.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "04.06.26",
  },
  // Пятница
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1164-1171 Главы",
    Current: false,
    Date: "05.06.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 7 Сезон 5-6 Эпизод",
    Current: false,
    Date: "05.06.26",
  },
  {
    NameRU: "Аллея кошмаров",
    NameEN: "Nightmare Alley",
    Status: "Фильм",
    Current: false,
    Date: "05.06.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "06.06.26",
  },
  // Воскресенье
  {
    NameRU: "Сопрано",
    NameEN: "The Sopranos",
    Status: "Сериал × 3 Сезон 8-9 Эпизод",
    Current: false,
    Date: "07.06.26",
  },
  {
    NameRU: "Меч чужака",
    NameEN: "Stranger: Mukou Hadan",
    Status: "Полнометражка",
    Current: false,
    Date: "07.06.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 3 Сезон 7-10 Эпизод",
    Current: false,
    Date: "07.06.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "08.06.26",
  },
  // Вторник
  {
    NameRU: "Фантастическая четверка 2: Вторжение Серебряного серфера",
    NameEN: "Fantastic Four: Rise of the Silver Surfer",
    Status: "Фильм",
    Current: false,
    Date: "09.06.26",
  },
  {
    NameRU: "День рождения Годеня :[",
    Status: "Покер",
    Current: false,
    Date: "09.06.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "10.06.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "11.06.26",
  },
  // Пятница
  {
    NameRU: "Отец",
    NameEN: "Oyaji",
    Status: "Манга × 1-15 Главы",
    Current: false,
    Date: "12.06.26",
  },
  {
    NameRU: "Фантастическая четвёрка: Первые шаги",
    NameEN: "The Fantastic Four: First Steps",
    Status: "Фильм",
    Current: false,
    Date: "12.06.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "13.06.26",
  },
  // Воскресенье
  {
    NameRU: "Одинокий замок в Зазеркалье",
    NameEN: "Kagami no Kojou",
    Status: "Полнометражка",
    Current: false,
    Date: "14.06.26",
  },
  {
    NameRU: "Отверженные",
    NameEN: "Les Misérables",
    Status: "Фильм",
    Current: false,
    Date: "14.06.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "15.06.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "16.06.26",
  },
  // Среда
  {
    NameRU: "Отец",
    NameEN: "Oyaji",
    Status: "Манга × 17-25 Главы",
    Current: false,
    Date: "17.06.26",
  },
  {
    NameRU: "Ван Пис",
    NameEN: "One Piece",
    Status: "Манга × 1172-1181 Главы",
    Current: false,
    Date: "17.06.26",
  },
  {
    NameRU: "Капитан Америка: Дивный новый мир",
    NameEN: "Captain America: Brave New World",
    Status: "Фильм",
    Current: false,
    Date: "17.06.26",
  },
  // Четверг
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 7 Сезон 7-8 Эпизод",
    Current: false,
    Date: "18.06.26",
  },
  {
    NameRU: "Goat: Мечтай по-крупному",
    Status: "Мультфильм",
    Current: false,
    Date: "18.06.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "19.06.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "20.06.26",
  },
  // Воскресенье
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "21.06.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "22.06.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "23.06.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "24.06.26",
  },
  // Четверг
  {
    NameRU: "Удивительный цифровой цирк",
    NameEN: "The Amazing Digital Circus",
    Status: "Мультсериал × 1 Сезон 1-7 Эпизод",
    Current: false,
    Date: "25.06.26",
  },
  // Пятница
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 3 Сезон 1 Эпизод",
    Current: false,
    Date: "26.06.26",
  },
  {
    NameRU: "Удивительный цифровой цирк",
    NameEN: "The Amazing Digital Circus",
    Status: "Мультсериал × 1 Сезон 8-9 Эпизод",
    Current: false,
    Date: "26.06.26",
  },
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × 1 Сезон 1-2 Эпизод",
    Current: false,
    Date: "26.06.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "27.06.26",
  },
  // Воскресенье
  {
    NameRU: "Ещё вчера",
    NameEN: "Omohide poro poro",
    Status: "Полнометражка",
    Current: false,
    Date: "28.06.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "28.06.26",
  },
  {
    NameRU: "В лес, где мерцают светлячки",
    NameEN: "Hotarubi no Mori e",
    Status: "Полнометражка",
    Current: false,
    Date: "28.06.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "29.06.26",
  },
  // Вторник
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 7 Сезон 9-10 Эпизод",
    Current: false,
    Date: "30.06.26",
  },
  {
    NameRU: "Теория большого взрыва",
    NameEN: "The Big Bang Theory",
    Status: "Сериал × 4 Сезон 6-9 Эпизод",
    Current: false,
    Date: "30.06.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 7 Сезон 11-12 Эпизод",
    Current: false,
    Date: "30.06.26",
  },
  //#endregion
  //#region Старое: Июль 26
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "01.07.26",
  },
  // Четверг
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 3 Сезон 2-3 Эпизод",
    Current: false,
    Date: "02.07.26",
  },
  {
    NameRU: "GTA Vice City: The Next-Gen Edition",
    Status: "Игра",
    Current: false,
    Date: "02.07.26",
  },
  {
    NameRU: "Громовержцы*",
    NameEN: "Thunderbolts*",
    Status: "Фильм",
    Current: false,
    Date: "02.07.26",
  },
  // Пятница
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 3 Сезон 4-5 Эпизод",
    Current: false,
    Date: "03.07.26",
  },
  {
    NameRU: "Южный Парк",
    NameEN: "South Park",
    Status: "Мультсериал × 3 Сезон 11-14 Эпизод",
    Current: false,
    Date: "03.07.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "04.07.26",
  },
  // Воскресенье
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "05.07.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "06.07.26",
  },
  // Вторник
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai / The Seven Deadly Sins",
    Status: "Аниме × 1 Сезон 13-16 Эпизод",
    Current: false,
    Date: "07.07.26",
  },
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × 1 Сезон 3-4 Эпизод",
    Current: false,
    Date: "07.07.26",
  },
  // Среда
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 3 Сезон 6-7 Эпизод",
    Current: false,
    Date: "08.07.26",
  },
  {
    NameRU: "Проект «Конец света»",
    NameEN: "Project Hail Mary",
    Status: "Фильм",
    Current: false,
    Date: "08.07.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "09.07.26",
  },
  // Пятница
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 1 Сезон 5-8 Эпизод",
    Current: false,
    Date: "10.07.26",
  },
  {
    NameRU: "Соколиный глаз",
    NameEN: "Hawkeye",
    Status: "Сериал × 1 Сезон 1-2 Эпизод",
    Current: false,
    Date: "10.07.26",
  },
  {
    NameRU: "Исчезнувшая",
    NameEN: "Gone Girl",
    Status: "Фильм",
    Current: false,
    Date: "10.07.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "11.07.26",
  },
  // Воскресенье
  {
    NameRU: "Первородный грех Такопи",
    NameEN: "Takopii no Genzai",
    Status: "Аниме × 1 Сезон 1-6 Эпизод",
    Current: false,
    Date: "12.07.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "13.07.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "14.07.26",
  },
  // Среда
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 3 Сезон 8-10 Эпизод",
    Current: false,
    Date: "15.07.26",
  },
  {
    NameRU: "Головокружение",
    NameEN: "Vertigo",
    Status: "Фильм",
    Current: false,
    Date: "15.07.26",
  },
  // Четверг
  {
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра",
    Current: false,
    Date: "16.07.26",
  },
  {
    NameRU: "Пока не сыграл в ящик",
    NameEN: "The Bucket List",
    Status: "Фильм",
    Current: false,
    Date: "16.07.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "17.07.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "18.07.26",
  },
  // Воскресенье
  {
    NameRU: "Crusader Kings III",
    Status: "Игра",
    Current: false,
    Date: "19.07.26",
  },
  {
    NameRU: "Бездарная Нана",
    NameEN: "Munou na Nana / Talentless Nana",
    Status: "Манга × 1-8 Главы",
    Current: false,
    Date: "19.07.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "20.07.26",
  },
  // Вторник
  {
    NameRU: "Дружба — это чудо",
    NameEN: "My Little Pony: Friendship is Magic",
    Status: "Мультсериал × Разные эпизоды",
    Current: false,
    Date: "21.07.26",
  },
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × 1 Сезон 5-6 Эпизод",
    Current: false,
    Date: "21.07.26",
  },
  // Среда
  {
    NameRU: "Бумажный дом",
    NameEN: "La casa de papel",
    Status: "Сериал × 2 Сезон 1-2 Эпизод",
    Current: false,
    Date: "22.07.26",
  },
  {
    NameRU: "Соколиный глаз",
    NameEN: "Hawkeye",
    Status: "Сериал × 1 Сезон 3-6 Эпизод",
    Current: false,
    Date: "22.07.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "23.07.26",
  },
  // Пятница
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 1 Сезон 9-16 Эпизод",
    Current: false,
    Date: "24.07.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "24.07.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "25.07.26",
  },
  // Воскресенье
  {
    NameRU: "Crusader Kings III",
    Status: "Игра",
    Current: false,
    Date: "26.07.26",
  },
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 1 Сезон 17-24 Эпизод",
    Current: false,
    Date: "26.07.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "27.07.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "28.07.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "29.07.26",
  },
  // Четверг
  {
    NameRU: "Сто девушек, которые очень сильно тебя любят",
    NameEN: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
    Status: "Аниме × 3 Сезон 1-4 Эпизод",
    Current: false,
    Date: "30.07.26",
  },
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × 1 Сезон 7-8 Эпизод",
    Current: false,
    Date: "30.07.26",
  },
  {
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра",
    Current: false,
    Date: "30.07.26",
  },
  // Пятница
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 8 Сезон 1-2 Эпизод",
    Current: false,
    Date: "31.07.26",
  },
  {
    NameRU: "Шрэк Третий",
    NameEN: "Shrek the Third",
    Status: "Мультфильм",
    Current: false,
    Date: "31.07.26",
  },
  //#endregion
  //#region Старое: Август 26
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "01.08.26",
  },
  // Воскресенье
  {
    NameRU: "Crusader Kings III",
    Status: "Игра",
    Current: false,
    Date: "02.08.26",
  },
  {
    NameRU: "Шрек навсегда",
    NameEN: "Shrek Forever After",
    Status: "Мультфильм",
    Current: false,
    Date: "02.08.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "03.08.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "04.08.26",
  },
  // Среда
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × 1 Сезон 9-10 Эпизод",
    Current: false,
    Date: "05.08.26",
  },
  {
    NameRU: "Клинок, рассекающий демонов: Бесконечный замок — Возвращение Акадзы",
    NameEN: "Kimetsu no Yaiba Movie 1: Mugenjou-hen - Akaza Sairai",
    Status: "Полнометражка",
    Current: false,
    Date: "05.08.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "06.08.26",
  },
  // Пятница
  {
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра",
    Current: false,
    Date: "07.08.26",
  },
  {
    NameRU: "Телохранитель",
    NameEN: "Yojimbo",
    Status: "Фильм",
    Current: false,
    Date: "07.08.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "08.08.26",
  },
  // Воскресенье
  {
    NameRU: "Crusader Kings III",
    Status: "Игра",
    Current: false,
    Date: "09.08.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "09.08.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "10.08.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "11.08.26",
  },
  // Среда
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai / The Seven Deadly Sins",
    Status: "Аниме × 1 Сезон 17-20 Эпизод",
    Current: false,
    Date: "12.08.26",
  },
  {
    NameRU: "Аладдин",
    NameEN: "Aladdin",
    Status: "Мультфильм",
    Current: false,
    Date: "12.08.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 8 Сезон 3-4 Эпизод",
    Current: false,
    Date: "12.08.26",
  },
  // Четверг
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 4 Сезон 1-2 Эпизод",
    Current: false,
    Date: "13.08.26",
  },
  {
    NameRU: "Бумажный дом",
    NameEN: "La casa de papel",
    Status: "Сериал × 2 Сезон 3-4 Эпизод",
    Current: false,
    Date: "13.08.26",
  },
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × 1 Сезон 1 Эпизод",
    Current: false,
    Date: "13.08.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "14.08.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "15.08.26",
  },
  // Воскресенье
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × 1 Сезон 2-4 Эпизод",
    Current: false,
    Date: "16.08.26",
  },
  {
    NameRU: "Рим",
    NameEN: "Rome",
    Status: "Сериал × 1 Сезон 11-12 Эпизод",
    Current: false,
    Date: "16.08.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "17.08.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "18.08.26",
  },
  // Среда
  {
    NameRU: "Великий мышиный сыщик",
    NameEN: "The Great Mouse Detective",
    Status: "Мультфильм",
    Current: false,
    Date: "19.08.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 8 Сезон 5-6 Эпизод",
    Current: false,
    Date: "19.08.26",
  },
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × 1 Сезон 5-6 Эпизод",
    Current: false,
    Date: "19.08.26",
  },
  // Четверг
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 4 Сезон 3-6 Эпизод",
    Current: false,
    Date: "20.08.26",
  },
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai / The Seven Deadly Sins",
    Status: "Аниме × 1 Сезон 21-24 Эпизод",
    Current: false,
    Date: "20.08.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "21.08.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "22.08.26",
  },
  // Воскресенье
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 2 Сезон 1-4 Эпизод",
    Current: false,
    Date: "23.08.26",
  },
  {
    NameRU: "Летнее время",
    NameEN: "Summertime Render",
    Status: "Аниме × 1 Сезон 1-5 Эпизод",
    Current: false,
    Date: "23.08.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "24.08.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "25.08.26",
  },
  // Среда
  {
    NameRU: "Сто девушек, которые очень сильно тебя любят",
    NameEN: "Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo",
    Status: "Аниме × 3 Сезон 5-8 Эпизод",
    Current: false,
    Date: "26.08.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 8 Сезон 7-8 Эпизод",
    Current: false,
    Date: "26.08.26",
  },
  {
    NameRU: "Покер",
    Current: false,
    Date: "26.08.26",
  },
  // Четверг
  {
    NameRU: "Повелитель тайн: Спецвыпуск",
    NameEN: "Guimi Zhi Zhu Specials / Lord of Mysteries Specials",
    Status: "Аниме × 1-3 Эпизод",
    Current: false,
    Date: "27.08.26",
  },
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 4 Сезон 7-8 Эпизод",
    Current: false,
    Date: "27.08.26",
  },
  {
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра",
    Current: false,
    Date: "27.08.26",
  },
  // Пятница
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai / The Seven Deadly Sins",
    Status: "Аниме × 2 Сезон 1-8 Эпизод",
    Current: false,
    Date: "28.08.26",
  },
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × 1 Сезон 7-8 Эпизод",
    Current: false,
    Date: "28.08.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "29.08.26",
  },
  // Воскресенье
  {
    NameRU: "Crusader Kings III",
    Status: "Игра",
    Current: false,
    Date: "30.08.26",
  },
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 2 Сезон 5-8 Эпизод",
    Current: false,
    Date: "30.08.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "31.08.26",
  },
  //#endregion
  //#region Старое: Сентябрь 26
  // Вторник
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 8 Сезон 9-10 Эпизод",
    Current: false,
    Date: "01.09.26",
  },
  {
    NameRU: "Новые Мстители",
    NameEN: "New Avengers",
    Status: "Комикс × 1-5 Главы",
    Current: false,
    Date: "01.09.26",
  },
  {
    NameRU: "Мстители Хикмана",
    NameEN: "Avengers by Jonathan Hickman",
    scheduleRemark: "Комикс × 1-3 Главы",
    Current: false,
    Date: "01.09.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "02.09.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "03.09.26",
  },
  // Пятница
  {
    NameRU: "Викинги",
    nameEn: "Vikings",
    Status: "Сериал × 4 Сезон 9-10 Эпизод",
    Current: false,
    Date: "04.09.26",
  },
  {
    NameRU: "Декстер",
    NameEN: "Dexter",
    Status: "Сериал × 8 Сезон 11-12 Эпизод",
    Current: false,
    Date: "04.09.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "05.09.26",
  },
  // Воскресенье
  {
    NameRU: "Мобильный воин Гандам: Вспышка Хэтэуэя 2 - Колдунья Кирка",
    NameEN: "Mobile Suit Gundam: Senkou no Hathaway - Circe no Majo",
    Status: "Полнометражка",
    Current: false,
    Date: "06.09.26",
  },
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 2 Сезон 9-12 Эпизод",
    Current: false,
    Date: "06.09.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "07.09.26",
  },
  // Вторник
  {
    NameRU: "Warhammer 40 000: Rogue Trader",
    Status: "Игра",
    Current: false,
    Date: "08.09.26",
  },
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × 1 Сезон 9-10 Эпизод",
    Current: false,
    Date: "08.09.26",
  },
  {
    NameRU: "Бумажный дом",
    NameEN: "La casa de papel",
    Status: "Сериал × 2 Сезон 5-6 Эпизод",
    Current: false,
    Date: "08.09.26",
  },
  // Среда
  {
    NameRU: "Викинги",
    nameEn: "Vikings",
    Status: "Сериал × 4 Сезон 11-12 Эпизод",
    Current: false,
    Date: "09.09.26",
  },
  {
    NameRU: "F1",
    Status: "Фильм",
    Current: false,
    Date: "09.09.26",
  },
  // Четверг
  {
    NameRU: "Фильм «Формула 1» - Насколько реалистична история Сонни Хейса и APX GP?",
    Status: "Ютуб",
    Current: false,
    Date: "10.09.26",
  },
  {
    NameRU: "Декстер: Воскрешение",
    NameEN: "Dexter: Resurrection",
    Status: "Сериал ⨯ 1 Сезон 1-2 Эпизод",
    Current: false,
    Date: "10.09.26",
  },
  // Пятница
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "11.09.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "12.09.26",
  },
  // Воскресенье
  {
    NameRU: "Управление воспоминаниями (2026)",
    NameEN: "Jiyi Guanli Ju (2026)",
    Status: "Аниме × 1 Сезон 1-7 Эпизод",
    Current: false,
    Date: "13.09.26",
  },
  // Понедельник
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "14.09.26",
  },
  // Вторник
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "15.09.26",
  },
  // Среда
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "16.09.26",
  },
  // Четверг
  {
    Status: "Стрим не состоялся",
    Current: false,
    Date: "17.09.26",
  },
  // Пятница
  {
    NameRU: "Викинги",
    NameEN: "Vikings",
    Status: "Сериал × 4 Сезон 13-14 Эпизод",
    Current: false,
    Date: "18.09.26",
  },
  {
    NameRU: "Семь смертных грехов",
    NameEN: "Nanatsu no Taizai / The Seven Deadly Sins",
    Status: "Аниме × 2 Сезон 9-12 Эпизод",
    Current: false,
    Date: "18.09.26",
  },
  {
    NameRU: "Невеста чародея",
    NameEN: "Mahoutsukai no Yome",
    Status: "Аниме × 2 Сезон 13-16 Эпизод",
    Current: false,
    Date: "18.09.26",
  },
  {
    NameRU: "Готэм",
    NameEN: "Gotham",
    Status: "Сериал × 1 Сезон 11-12 Эпизод",
    Current: false,
    Date: "18.09.26",
  },
  // Суббота
  {
    Status: "Стрим невозможен",
    Current: false,
    Date: "19.09.26",
  },
  // Воскресенье
  {
    NameRU: "Алиса в Пограничье",
    NameEN: "Imawa no Kuni no Arisu",
    Status: "Сериал × 2 Сезон 1-4 Эпизод",
    Current: false,
    Date: "20.09.26",
  },
  //#endregion
];
