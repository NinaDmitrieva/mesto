export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
    this._name = data.name;
    this._link = data.link;
    // this._cardId = data.id; 
    // this._userId = userId;
    // this._ownerId = data.ownerId.id; 
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._templateSelector = templateSelector;
  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    return cardTemplate.querySelector('.element').cloneNode(true);
  };

  _setEventListeners() {
    this.btnLike = this.element.querySelector('.element__click'); 
    this.btnClose = this.element.querySelector('.element__close-icon'); 
    this.cardImage = this.element.querySelector('.element__foto');

    this.btnLike.addEventListener('click', () => {//при лайке передаю id
      this._handleLikeClick(this._id);
    });
  
    this.btnClose.addEventListener('click', () => {//при удалении передаю id
      this._handleDeleteClick(this._id);
    });
  
    this.cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  
  _handleLikeClick() {
    this.btnLike.classList.toggle('element__like_activ');
  };

  _handleDeleteClick() {
    this.element.remove();
    this.element = null;
  };

  generateCard() {
    this.element = this._getTemplate();
    this._setEventListeners();
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this.element.querySelector('.element__title').textContent = this._name;
  
    if (this._ownerId !== this._userId) {
      this.btnClose.style.display = 'none'
    }

    return this.element;
  };

  //метод для лайков ()
  // if (this._cardId !== this._userId) {
  //   меняем возможность ставить лайки
  // }

  deliteCard () {
    this.element.remove()
  }
}


// }
// export default class Card {
//   constructor(data, templateSelector, handleCardClick) {
//     this._name = data.name;
//     this._link = data.link;
//     this._id = data.id;
//     this._handleCardClick = handleCardClick;
//     this._templateSelector = templateSelector;
//   }

//   _getTemplate() {
//     const cardTemplate = document.querySelector(this._templateSelector).content;
//     return cardTemplate.querySelector('.element').cloneNode(true);
//   }

//   _setEventListeners() {
//     this.btnLike = this.element.querySelector('.element__click');
//     this.btnLike.addEventListener('click', () => {
//       this._handleLikeClick();
//     });
//     this.btnClose = this.element.querySelector('.element__close-icon');
//     this.btnClose.addEventListener('click', () => {
//       this._handleDeleteClick();
//     });
//     this.cardImage = this.element.querySelector('.element__foto');
//     this.cardImage.addEventListener('click', () => {
//       this._handleCardClick(this._name, this._link);
//     });
//   }

//   _handleLikeClick() {
//     this.btnLike.classList.toggle('element__like_activ');
//   }

//   _handleDeleteClick() {
//     this.element.remove()
//   }

//   generateCard() {
//     this.element = this._getTemplate();
//     this._setEventListeners();
//     this.cardImage.src = this._link;
//     this.cardImage.alt = this._name;
//     this.element.querySelector('.element__title').textContent = this._name;
//     return this.element;
//   }
// }

