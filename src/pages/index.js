import './index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from'../components/PopupWithImage.js'
import PopupWithForm from'../components/PopupWithForm.js'
import {settings,
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
        

const cardsList = new Section ({ items:initialCards,
    renderer:(item) => {
    cardsList.addItem(renderNewCard(item))
  },
},
  '.elements'
);

const userInfo = new UserInfo({ nameProfile: profileTitle, jobProfile: profileSubitle});

const profilePopup = new PopupWithForm(popupProfile,
  (data) => { 
    userInfo.setUserInfo(data);
    profilePopup.close();
})

const profileValidate = new FormValidator(settings, formProfile); /*включаем валидацию в профайле */
const popupPhotoValidate = new FormValidator(settings, formPhoto); /*включаем валидацию в попапе для сохранения картинок */
const popupOpenPhoto = new PopupWithImage(popupPhotoLook); /*попап просмотра фото*/

const photoSavaPopup = new PopupWithForm(popupPhotoSave, /*сохраняем новую картинку */
  (item) => { 
    const cardNew = {
      name: item.name,
      link: item.link,
  }
  cardsList.addItem(renderNewCard(cardNew))
  photoSavaPopup.close()
})

function renderNewCard(cardElement) {
  const newCard = new Card(cardElement, '.card-template',handleCardClick).generateCard(); /*обвешиваем новые карточки слушателями и вытаскиваем их из функции */
  return newCard
}

function handleCardClick(name, link) {
  popupOpenPhoto.open(name,link)
}

function formSubmitHandler(evt) {                               
  evt.preventDefault();                                         
  profileTitle.textContent = nameInput.name;                  
  profileSubitle.textContent = jobInput.job;                             
}

btnOpenProfile.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubitle.textContent;
  profilePopup.open();
  profileValidate.setSubmitButtonState(formProfile)
});

btnOpenNewPhoto.addEventListener('click', () => {
  photoSavaPopup.open();
  popupPhotoValidate.setSubmitButtonState(formProfile)
});

formProfile.addEventListener('submit', formSubmitHandler); 

profileValidate.enableValidation(); /*вызвали валидацию профайла */
popupPhotoValidate.enableValidation();/*вызвали валидацию попапа для сохранения картинок */
profilePopup.setEventListeners();
photoSavaPopup.setEventListeners();
popupOpenPhoto.setEventListeners();
cardsList.renderItems();
