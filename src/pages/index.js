import './index.css';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirm from '../components/PopupWithConfirm.js'
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

const profileValidate = new FormValidator(settings, formProfile);
const popupPhotoValidate = new FormValidator(settings, formPhoto);
const popupOpenPhoto = new PopupWithImage('.popup_open-foto');

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-38', {
  authorization: '1fed1f0c-d99b-4c82-a201-fb2e7265dac6',
  'Content-Type': 'application/json',
  'Accept': 'application/json: charset=utf-8'
});

const user = new UserInfo({ nameProfile: profileTitle, jobProfile: profileSubitle, fotoAvatar: fotoAvatar });

const popupDeliteCard  = new PopupWithConfirm('.popup_confirm', (card) => {
  deteteCard(card)
});

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

function initUserInfo() {
    api.getUserInfo()
        .then((data) => {
            user.setUserInfo(data);
            user.setUserId(data._id);
    })
        .then(()=> {
            initCards(user.getUserId())
    })
        .catch((err) => {
            console.log(err);
    })
}

function initCards(id) {
    api.getInitialCards()
        .then((data) => {
            cardsList.setData(data)
            cardsList.renderItems(id)
    })
        .catch((err) => {
            console.log(err)
    })
}

function saveImg(item) {
  const cardData = {
    name: item.name,
    link: item.link
  }
  photoSavePopup.showLoading(true)
  api.addNewCard(cardData)
    .then((data) => {
      renderCard(data, data.owner._id);
      photoSavePopup.close()
    })
    .catch((err) => {
      console.log('err', err)
    })
    .finally(() => {
      photoSavePopup.showLoading(false)
    })
}

function updateAvatar(dataAvatar) {
  popupUpdateAvatar.showLoading(true)
  api.setAvatarInfo(dataAvatar)
    .then((newDataAvatar) => {
      user.setUserInfo(newDataAvatar)
      popupUpdateAvatar.close();
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
    popupUpdateAvatar.showLoading(false)
    })
}

function upDateUser(userData) {
  profilePopup.showLoading(true)
  api.setUserInfo(userData.name, userData.job)
    .then((newDataUser) => {
      user.setUserInfo(newDataUser);
      profilePopup.close()
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
      profilePopup.showLoading(false)
    })
}

function renderCard(card, id) {
    cardsList.addItem(renderNewCard(card, id))
}

function renderNewCard(cardElement, id) {
  const card = {
    name: cardElement.name,
    link: cardElement.link,
    _id: cardElement._id,
    likes: cardElement.likes,
    ownerId: cardElement.owner._id,
    userId : id,
    handleCardClick: handleCardClick,
    handleDeleteClick: openPopupDeliteCard,
    handleLikeClick: setLike,
    handleRemoveLike: removeLike
}
  return new Card(card, '.card-template').generateCard();
}

function deteteCard(card) { 
  api.deleteCard(card._id)
    .then(() => {
      card.removeCard() ; 
      popupDeliteCard.close();
    })
    .catch((err) => {
      console.log('err', err)
    })
}

function setLike(id, renderLikes) {
  api.setLike(id)
    .then((data) =>{
      renderLikes(data.likes)
    })
    .catch((err) => {
      console.log('err', err)
    })
};

function removeLike(id, renderLikes){
  api. deleteLike(id)
    .then((data) =>{
      renderLikes(data.likes)
    })
    .catch((err) => {
      console.log('err', err)
    })
};

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

function openPopupDeliteCard(card) {
    popupDeliteCard.setCard(card);
    popupDeliteCard.open();
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
popupDeliteCard.setEventListeners();
initUserInfo()


