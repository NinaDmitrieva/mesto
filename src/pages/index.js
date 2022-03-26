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
  initialCards,
  btnOpenProfile,
  btnOpenNewPhoto,
  nameInput,
  jobInput,
  profileTitle,
  profileSubitle,
  formProfile,
  formPhoto,
  chengeAvatar,
  btnDetiteCard,
  
} from '../utils/Constants.js'


// fetch('https://mesto.nomoreparties.co/v1/cohort-38/cards', { //прогрузим картинки
//   headers: {
//     authorization: '1fed1f0c-d99b-4c82-a201-fb2e7265dac6'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   }); 


//     fetch('https://nomoreparties.co/v1/cohort-38/users/me', { //выведи пользователя
//       headers: {
//         authorization: '1fed1f0c-d99b-4c82-a201-fb2e7265dac6'
//       }
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//         console.log(res); 
//     })


    const api = new Api({ //новый класс апи
      baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
      headers: {
        authorization: '1fed1f0c-d99b-4c82-a201-fb2e7265dac6',
        'Content-Type': 'application/json'
      }
    }); 




const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(renderNewCard(item))
  },
},
  '.elements'
);

const userInfo = new UserInfo({ nameProfile: profileTitle, jobProfile: profileSubitle });
const profileValidate = new FormValidator(settings, formProfile);
const popupPhotoValidate = new FormValidator(settings, formPhoto);
const popupOpenPhoto = new PopupWithImage('.popup_open-foto');
const profilePopup = new PopupWithForm('.popup_profile');
const popupConfirm = new PopupWithForm('.popup_confirm'); //попап, подтверждающий удаление карточки

const popupUpdateAvatar = new PopupWithForm('.popup_update', //попап, меняющий картинку
(upDate) => {
 upDateAvatar(upDate);
 popupUpdateAvatar.close();
}
);

const photoSavaPopup = new PopupWithForm('.popup_foto',
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
  const userDescription = userInfo.getUserInfo()
  nameInput.value = userDescription.name
  jobInput.value = userDescription.job
  profilePopup.open();
  profileValidate.setSubmitButtonState()
}

function openPopupSaveNewPhoto() {
  photoSavaPopup.open();
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
photoSavaPopup.setEventListeners();
popupOpenPhoto.setEventListeners();

cardsList.renderItems();

