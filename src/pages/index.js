import './index.css';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import {
  settings,
  initialCards,
  popupProfile,
  popupPhotoSave,
  popupPhotoLook,
  btnOpenProfile,
  btnOpenNewPhoto,
  nameInput,
  jobInput,
  profileTitle,
  profileSubitle,
  formProfile,
  formPhoto,
} from '../utils/Constants.js'


const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(renderNewCard(item))
  },
},
  '.elements'
);

const userInfo = new UserInfo({ nameProfile: profileTitle, jobProfile: profileSubitle });

const profilePopup = new PopupWithForm(popupProfile,
  (data) => {
    userInfo.setUserInfo(data);
    profilePopup.close();
  })

const profileValidate = new FormValidator(settings, formProfile);
const popupPhotoValidate = new FormValidator(settings, formPhoto);
const popupOpenPhoto = new PopupWithImage(popupPhotoLook);

const photoSavaPopup = new PopupWithForm(popupPhotoSave,
  (item) => {
    const cardNew = {
      name: item.name,
      link: item.link,
    }
    cardsList.addItem(renderNewCard(cardNew))
    photoSavaPopup.close()
  })

function renderNewCard(cardElement) {
  const newCard = new Card(cardElement, '.card-template', handleCardClick).generateCard();
  return newCard
}

function handleCardClick(name, link) {
  popupOpenPhoto.open(name, link)
}

function openPopupProfile() {
  const userDescription = userInfo.userInfoInputList()
  nameInput.value = userDescription.name
  jobInput.value = userDescription.job
  profilePopup.open();
  profileValidate.setSubmitButtonState()
}

function openPopupSaveNewPhoto() {
  photoSavaPopup.open();
  popupPhotoValidate.setSubmitButtonState()
}

btnOpenProfile.addEventListener('click', (openPopupProfile));
btnOpenNewPhoto.addEventListener('click', (openPopupSaveNewPhoto));
profileValidate.enableValidation();
popupPhotoValidate.enableValidation();
profilePopup.setEventListeners();
photoSavaPopup.setEventListeners();
popupOpenPhoto.setEventListeners();
cardsList.renderItems();

