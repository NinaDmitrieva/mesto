export const settings = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__style',
  inputErrorClass: 'popup__error',
  submitButtonSelector: '.popup__save',
  submitButtonErrorClass: 'popup__button-invalid',
};


/*модальные окна */
export const popupProfile = document.querySelector('.popup_profile');

export const popupConfirm = document.querySelector('.popup_confirm');
export const popupUpdateAvatar = document.querySelector('.popup_update');

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
export const chengeAvatar = document.querySelector('.profile__hover-img'); 
export const btnDetiteCard = document.querySelector('.element__close-icon'); //кнопка удаления карточки


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
export const fotoAvatar = document.querySelector('.profile__foto');