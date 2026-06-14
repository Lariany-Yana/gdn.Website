const scheduleDatabase = [
  //#region Текущая неделя
  /* ШАБЛОН
  {
    nameRu: "Название",
    nameEn: "Название",
    scheduleRemark: " × Начало в 15:00 по МСК",
    scheduleType: "schedule-current",
    date: "00.06.26",
  },
	*/
  {
    nameRu: "Стрим невозможен :[",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "08.06.26",
  },
  // Вторник
  {
    nameRu: "Фантастическая четверка 2: Вторжение Серебряного серфера",
    nameEn: "Fantastic Four: Rise of the Silver Surfer",
    scheduleRemark: "Фильм",
    scheduleType: "schedule-current",
    date: "09.06.26",
  },
  {
    nameRu: "День рождения Годеня :[",
    scheduleRemark: "Покер",
    scheduleType: "schedule-current",
    date: "09.06.26",
  },
  // Среда
  {
    nameRu: "Стрим не состоялся :[",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "10.06.26",
  },
  // Четверг
  {
    nameRu: "Стрим не состоялся :[",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "11.06.26",
  },
  // Пятница
  {
    nameRu: "Отец",
    nameEn: "Oyaji",
    scheduleRemark: "Манга × 1-15 Главы",
    scheduleType: "schedule-current",
    date: "12.06.26",
  },
  {
    nameRu: "Фантастическая четвёрка: Первые шаги",
    nameEn: "The Fantastic Four: First Steps",
    scheduleRemark: "Фильм",
    scheduleType: "schedule-current",
    date: "12.06.26",
  },
  // Суббота
  {
    nameRu: "Стрим невозможен :[",
    scheduleType: "schedule-current",
    date: "13.06.26",
  },
  // Воскресенье
  {
    nameRu: "Одинокий замок в Зазеркалье",
    nameEn: "Kagami no Kojou",
    scheduleRemark: "Полнометражка × Архивируется",
    scheduleType: "schedule-current",
    date: "14.06.26",
  },
  {
    nameRu: "Отверженные",
    nameEn: "Les Misérables",
    scheduleRemark: "Фильм × Архивируется",
    scheduleType: "schedule-current",
    date: "14.06.26",
  },
  //#endregion
  //#region Старое

  // Понедельник
  {
    nameRu: "Стрим невозможен :[",
    scheduleRemark: "",
    scheduleType: "schedule-past",
    date: "01.06.26",
  },
  // Вторник
  {
    nameRu: "Стрим не состоялся :[",
    scheduleRemark: "",
    scheduleType: "schedule-past",
    date: "02.06.26",
  },
  // Среда
  {
    nameRu: "Ван Пис",
    nameEn: "One Piece",
    scheduleRemark: "Манга × 1156-1163 Главы",
    scheduleType: "schedule-past",
    date: "03.06.26",
  },
  {
    nameRu: "Паук-Нуар",
    nameEn: "Spider-Noir",
    scheduleRemark: "Сериал × 5-8 Эпизод",
    scheduleType: "schedule-past",
    date: "03.06.26",
  },
  // Четверг
  {
    nameRu: "Стрим не состоялся :[",
    scheduleRemark: "",
    scheduleType: "schedule-past",
    date: "04.06.26",
  },
  // Пятница
  {
    nameRu: "Ван Пис",
    nameEn: "One Piece",
    scheduleRemark: "Манга × 1164-1171 Главы",
    scheduleType: "schedule-past",
    date: "05.06.26",
  },
  {
    nameRu: "Декстер",
    nameEn: "Dexter",
    scheduleRemark: "Сериал × 7 Сезон 5-6 Эпизод",
    scheduleType: "schedule-past",
    date: "05.06.26",
  },
  {
    nameRu: "Аллея кошмаров",
    nameEn: "Nightmare Alley",
    scheduleRemark: "Фильм",
    scheduleType: "schedule-past",
    date: "05.06.26",
  },
  // Суббота
  {
    nameRu: "Стрим невозможен :[",
    scheduleType: "schedule-past",
    date: "06.06.26",
  },
  // Воскресенье
  {
    nameRu: "Сопрано",
    nameEn: "The Sopranos",
    scheduleRemark: "Сериал × 3 Сезон 8-9 Эпизод",
    scheduleType: "schedule-past",
    date: "07.06.26",
  },
  {
    nameRu: "Меч чужака",
    nameEn: "Stranger: Mukou Hadan",
    scheduleRemark: "Полнометражка",
    scheduleType: "schedule-past",
    date: "07.06.26",
  },
  {
    nameRu: "Южный Парк",
    nameEn: "South Park",
    scheduleRemark: "Мультсериал × 3 Сезон 7-10 Эпизод",
    scheduleType: "schedule-past",
    date: "07.06.26",
  },
  //#endregion
];

/* ~ИЮНЬ 15-21~
  // Понедельник
  {
    nameRu: "Стрим невозможен :[",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "15.06.26",
  },
  // Вторник
  {
    nameRu: "Стрим вполне вероятен :]",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "16.06.26",
  },
  // Среда
  {
    nameRu: "Стрим маловероятен :|",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "17.06.26",
  },
  // Четверг
  {
    nameRu: "Стрим маловероятен :|",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "18.06.26",
  },
  // Пятница
  {
    nameRu: "Стрим вполне вероятен :]",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "19.06.26",
  },
  // Суббота
  {
    nameRu: "Стрим невозможен :[",
    scheduleType: "schedule-current",
    date: "20.06.26",
  },
  // Воскресенье
  {
    nameRu: "Стрим вполне вероятен :]",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "21.06.26",
  },
*/

/* ~ИЮНЬ 22-28~
  // Понедельник
  {
    nameRu: "Стрим невозможен :[",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "22.06.26",
  },
  // Вторник
  {
    nameRu: "Стрим вполне вероятен :]",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "23.06.26",
  },
  // Среда
  {
    nameRu: "Стрим маловероятен :|",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "24.06.26",
  },
  // Четверг
  {
    nameRu: "Стрим маловероятен :|",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "25.06.26",
  },
  // Пятница
  {
    nameRu: "Стрим вполне вероятен :]",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "26.06.26",
  },
  // Суббота
  {
    nameRu: "Стрим невозможен :[",
    scheduleType: "schedule-current",
    date: "27.06.26",
  },
  // Воскресенье
  {
    nameRu: "Стрим вполне вероятен :]",
    scheduleRemark: "",
    scheduleType: "schedule-current",
    date: "28.06.26",
  },
*/
