export const settings = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__style',
  inputErrorClass: 'popup__error',
  submitButtonSelector: '.popup__save',
  submitButtonErrorClass: 'popup__button-invalid',
};

export const initialCards = [
  {
    name: 'Под водой',
    link: 'https://p1.pxfuel.com/preview/828/445/103/jellyfish-floating-underwater-transparent-nature-water.jpg'
  },
  {
    name: 'Парус',
    link: 'https://images.fineartamerica.com/images-medium-large-5/sail-background-travenian.jpg'
  },
  {
    name: 'Причал',
    link: 'https://images.wallpaperscraft.ru/image/single/prichal_pirs_more_gorizont_vecher_118961_720x1280.jpg'
  },
  {
    name: 'Полет',
    link: 'https://thumbs.dreamstime.com/b/big-flock-crow-birds-flying-against-clear-sky-239446190.jpg'
  },
  {
    name: 'Бульк',
    link: 'https://images.squarespace-cdn.com/content/v1/5c7654a00b77bd9f3035145a/1551360927754-ZHM0YTRDX62FWNV4JNAI/image-asset.jpeg?format=750w'
  },
  {
    name: 'Пена',
    link: 'https://images.squarespace-cdn.com/content/v1/56186d16e4b0c93c7bfaedf8/1631902990470-BO0GSSCCI6G3CJVM63F3/IMG_9759.jpg?format=1500w'
  }
];

/*модальные окна */
export const popupProfile = document.querySelector('.popup_profile');
export const popupPhotoSave = document.querySelector('.popup_foto');
export const popupPhotoLook = document.querySelector('.popup_open-foto');
export const popupList = document.querySelectorAll('.popup');
export const popupRun = 'popup_activ';

/*попап для открытия картинки*/
export const imgOpen = document.querySelector('.popup__img-open');
export const fotoName = document.querySelector('.popup__foto-name');

/*кнопки */
export const btnOpenProfile = document.querySelector('.profile__edit-button');  //  кнопка открывает редактирование профиля
export const btnOpenNewPhoto = document.querySelector('.profile__add-button');  //  кнопка открывает добавление фото

/*инпуты*/
export const nameInput = document.querySelector('.popup__name');
export const jobInput = document.querySelector('.popup__work');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubitle = document.querySelector('.profile__subtitle');
export const cardsInput = document.querySelector('.popup__cards');  //  названия карточек из инпута
export const placeInput = document.querySelector('.popup__place');  //  адрес карточек из инпута 
export const formProfile = document.querySelector('.popup__about');  //  форма для редактирования фото
export const formPhoto = document.querySelector('.popup__about-foto');

export const cardsСontainer = document.querySelector('.elements'); 