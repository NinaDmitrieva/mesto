import './index.css';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Api from '../components/Api.js'

import {
  settings,
  btnOpenProfile,
  btnOpenNewPhoto,
  nameInput,
  jobInput,
  profileTitle,
  profileSubitle,
  formProfile,
  formPhoto,
  chengeAvatar,
  fotoAvatar,
  btnDetiteCard,

} from '../utils/Constants.js'

const userInfo = new UserInfo({ nameProfile: profileTitle, jobProfile: profileSubitle, fotoAvatar: fotoAvatar});
const profileValidate = new FormValidator(settings, formProfile);
const popupPhotoValidate = new FormValidator(settings, formPhoto);
const popupOpenPhoto = new PopupWithImage('.popup_open-foto');
//const profilePopup = new PopupWithForm('.popup_profile');
const popupConfirm = new PopupWithForm('.popup_confirm'); //попап, подтверждающий удаление карточки

//новый класс апи
const api = new Api({ 
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: '1fed1f0c-d99b-4c82-a201-fb2e7265dac6',
    'Content-Type': 'application/json'
  }
});

//получаем с сервера картинки и данные о пользователе
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    user = user._id;
    userInfo.getUserInfo(user);
    createCardsList(cards);
  })
  .catch((err) => {
    console.log(err);
  })

//сохраняем новые картинки
const photoSavePopup = new PopupWithForm('.popup_foto', 
  (item) => {
    api.addNewCards(item)
      .then((data) => {
        createCardsList(item).addItem(renderNewCard(data));
        photoSavePopup.close()
      })
      .catch((err) => {
        console.log('err', err);
      })
  })

  //попоап, меняющий картинку пользователя
const popupUpdateAvatar = new PopupWithForm('.popup_update', 
  (dataAvatar) => {
    //popupUpdateAvatar.кнопка сабмита('Сохранение...'); = либо сделать функцию. либо менять в классе, либо тупа тут
    api.setAvatarInfo(dataAvatar)
    .then((newDataAvatar) => {
      userInfo.setAvatarInfo(newDataAvatar.avatar);
      upDateAvatar();
      popupUpdateAvatar.close();
    })
    .catch((err) => {
    console.log('err', err);
    })
    .finally(() => {
      //popupUpdateAvatar.кнопка сабмита('Сохраненить') = либо сделать функцию. либо менять в классе, либо тупа тут
    })
  })

  //попап, изменяющий имя и деятельность пользователя
  const profilePopup = new PopupWithForm('.popup_profile', 
  (dataUser) => {
    //profilePopup.кнопка сабмита('Сохранение...'); = либо сделать функцию. либо менять в классе, либо тупа тут
    api.setUserInfo(dataUser.name, dataUser.job)
    .then((newDataUser) => {
      userInfo.setUserInfo(newDataUser);
      profilePopup.close();
    })
    .catch((err) => {
    console.log('err', err);
    })
    // .finally(() => {
    //   //profilePopup.кнопка сабмита('Сохраненить') = либо сделать функцию. либо менять в классе, либо тупа тут
    // })
  })

//отрисовка картинок
function createCardsList(cards) { 
  const cardsList = new Section({
    items: cards,
    renderer: (item) => {
      cardsList.addItem(renderNewCard(item))
    },
  },
    '.elements'
  );
  cardsList.renderItems(cards);
}

function renderNewCard(cardElement) {
  const newCard = new Card(cardElement, '.card-template', handleCardClick).generateCard();
  return newCard
}

function handleCardClick(name, link) {
  popupOpenPhoto.open(name, link)
}

function openPopupProfile() {
  // const userDescription = userInfo.getUserInfo()
  // nameInput.value = userDescription.name
  // jobInput.value = userDescription.job
  profilePopup.open();
  profileValidate.setSubmitButtonState()
}

function openPopupSaveNewPhoto() {
  photoSavePopup.open();
  popupPhotoValidate.setSubmitButtonState()
}

function openpopupConfirm() {  //функция для открытия попапа удаления карточки
  popupConfirm.open();
  popupConfirm.setEventListeners();
}

function upDateAvatar() {
  popupUpdateAvatar.open();
  popupUpdateAvatar.setEventListeners();
}

btnOpenProfile.addEventListener('click', (openPopupProfile));
btnOpenNewPhoto.addEventListener('click', (openPopupSaveNewPhoto));
// btnDetiteCard.addEventListener('click', (openpopupConfirm));
chengeAvatar.addEventListener('click', (upDateAvatar));

profileValidate.enableValidation();
popupPhotoValidate.enableValidation();

profilePopup.setEventListeners();
photoSavePopup.setEventListeners();
popupOpenPhoto.setEventListeners();

