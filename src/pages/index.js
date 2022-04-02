import './index.css';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Api from '../components/Api.js'

import {
  btnOpenNewPhoto,
  btnOpenProfile,
  chengeAvatar,
  formPhoto,
  formProfile,
  fotoAvatar,
  profileSubitle,
  profileTitle,
  settings,
} from '../utils/Constants.js'

const userInfo = new UserInfo({ nameProfile: profileTitle, jobProfile: profileSubitle, fotoAvatar: fotoAvatar });
const profileValidate = new FormValidator(settings, formProfile);
const popupPhotoValidate = new FormValidator(settings, formPhoto);
const popupOpenPhoto = new PopupWithImage('.popup_open-foto');

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-38', {
  authorization: '1fed1f0c-d99b-4c82-a201-fb2e7265dac6',
  'Content-Type': 'application/json',
  'Accept': 'application/json: charset=utf-8'
});

const popupDeliteCard = new PopupWithForm('.popup_confirm', (card) => { //окно подтверждения
  deleteCard(card)
})

const photoSavePopup = new PopupWithForm('.popup_foto', (item) => {
  saveImg(item)
})

const popupUpdateAvatar = new PopupWithForm('.popup_update', (avatarData) => {
  updateAvatar(avatarData)
})

const profilePopup = new PopupWithForm('.popup_profile', (userData) => {
  upDateUser(userData)
})


const cardsList = new Section({
  renderer: renderCard
},
  '.elements');

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardsList.setData(cards)
    cardsList.renderItems(cards)
  })
  .catch((err) => {
    console.log(err);
  })

function saveImg(item) {
  const cardData = {
    name: item.name,
    link: item.link
  }

  api.addNewCard(cardData)
    .then(() => {
      renderCard(cardData);
      photoSavePopup.close()
    })
    .catch((err) => {
      console.log('err', err)
    })
}

function updateAvatar(dataAvatar) {
  api.setAvatarInfo(dataAvatar)
    .then((newDataAvatar) => {

      const userData = {
        name: newDataAvatar.name,
        about: newDataAvatar.about,
        _id: newDataAvatar._id,
        avatar: newDataAvatar.avatar,
      }
      console.log(userData)
      userInfo.setUserInfo(userData);
      popupUpdateAvatar.close();
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
    })
}

function upDateUser(userData) {
  api.setUserInfo(userData.name, userData.job)
    .then((newDataUser) => {
      userInfo.setUserInfo(newDataUser);
      profilePopup.close()
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
    })
}

function deleteCard(card) { 
  api.deleteCard(idCard)
    .then((idCard) => {
      card.deliteCard(idCard);
      popupDeliteCard.close();
    })
    .catch((err) => {
      console.log('err', err)
    })
}

function renderCard(card) {
  cardsList.addItem(renderNewCard(card))
}

function renderNewCard(cardElement) {
  return new Card(cardElement, '.card-template', handleCardClick).generateCard()
}

function handleCardClick(name, link) {
  popupOpenPhoto.open(name, link)
}

function openPopupProfile() {
  profilePopup.open();
  profileValidate.setSubmitButtonState()
}

function openPopupSaveNewPhoto() {
  photoSavePopup.open();
  popupPhotoValidate.setSubmitButtonState()
}

function openPopupDeliteCard() { //функция для открытия окошка подтверждения
  popupDeliteCard.open();
  popupDeliteCard.setEventListeners();
}

function upDateAvatar() {
  popupUpdateAvatar.open();
}

btnOpenProfile.addEventListener('click', (openPopupProfile));
btnOpenNewPhoto.addEventListener('click', (openPopupSaveNewPhoto));

chengeAvatar.addEventListener('click', (upDateAvatar));
profileValidate.enableValidation();
popupPhotoValidate.enableValidation();
profilePopup.setEventListeners();
photoSavePopup.setEventListeners();
popupOpenPhoto.setEventListeners();
popupUpdateAvatar.setEventListeners();
