export const createOrJoinParish = {
  text: "Witamy w Eparafi!",
  description:
    "Jeśli chcesz założyć swoją eparafię, kliknij przycisk. Natomiast jeśli parafia jest już założona, zaczekaj na dodanie Cię do niej. Osoba, która ją stworzyła, może to uczynić poprzez wejście w opcję zarządzaj parafią",
  buttonText: "Stwórz swoją Eparafie!",
};
export const createParish = {
  headingText: "Witamy w Eparafii!",
  text: "Stwórz swoją eparafię!",
};

export const createParishForm = [
  {
    id: "0",
    text: "Wezwanie:",
    placeholder: "Wpisz wezwanie parafii...",
  },
  {
    id: "1",
    text: "Region parafii?",
    placeholder: "Wpisz region parafii...",
  },
  {
    id: "2",
    text: "Ulica parafii",
    placeholder: "Wpisz ulicę parafii...",
  },
  {
    id: "3",
    type: "number",
    text: "Numer budynku",
    placeholder: "Wpisz numer budynku parafii...",
  },
  {
    id: "4",
    text: "Kod pocztowy",
    placeholder: "Wpisz kod pocztowy parafii...",
  },
  {
    id: "5",
    text: "Numer telefonu",
    placeholder: "Wpisz numer telefonu do parafii...",
  },
  {
    id: "6",
    text: "Adres email",
    placeholder: "Wpisz adres email parafii...",
  },
];

export const menuParish = [
  {
    id: 0,
    name: "Zarządzaj Parafią",
    button: "Zarządzaj Parafią",
    menuList: [
      {
        id: 0,
        text: "Dodaj do Księgi Chrztu",
      },
      {
        id: 1,
        text: "Edytuj Księge Ślubu",
      },
      {
        id: 2,
        text: "Zarządzaj kalendarzem",
      },
      {
        id: 3,
        text: "Dodaj nowych księży",
      },
      {
        id: 4,
        text: "Zmień ustawienia strony parafialnej",
      },
    ],
  },
  {
    id: 1,
    name: "Zarządzaj służbą liturgiczną",
    button: "Zarządzaj",
    menuList: [
      {
        id: 0,
        text: "Liczenie punktów",
      },
      {
        id: 1,
        text: "Ustal dyżury ministrantów",
      },
      {
        id: 2,
        text: "Ustal kolędę dla ministrantów",
      },
      {
        id: 3,
        text: "Zarządzaj asystą",
      },
    ],
  },
];
export const ParishNewsData = {
  heading: "Ostatnie Aktualności",
  add: "Dodaj aktualności",
  readMore: "Czytaj więcej",
  edit: "Edytuj",
};

export const ParishEditingNews = {
  goBack: "Powrót do strony głównej",
  heading: "Edytuj Aktualności",
  dateText: "Data kiedy aktualność została dodana:",
  editTittleText: "Tytuł:",
  editDescribeText: "Opis:",
  editPhotoText: "Zdjęcie:",
  changePhotoText: "Kliknij, aby zmienić zdjęcie",
};
export const ParishEditingAnnouncements = {
  goBack: "Powrót do strony głównej",
  heading: "Edytuj Ogłoszenia Parafialne",
  dateText: "Data kiedy ogłoszenie parafialne zostało dodane:",
};
