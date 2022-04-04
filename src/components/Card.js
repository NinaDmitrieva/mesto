export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = data.userId;
    this.ownerId = data.owner.id; 
    this.likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = data.handleDeleteClick;
    this._handleLikeClick = data.handleLikeClick;
    this._templateSelector = templateSelector;

  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    return cardTemplate.querySelector('.element').cloneNode(true);
  };

    _setEventListeners() {
    this.btnLike = this.element.querySelector('.element__click');
    this.btnLike.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this.btnClose = this.element.querySelector('.element__close-icon');
    this.btnClose.addEventListener('click', () => {
      this._handleDeleteClick(this);
    });
    this.cardImage = this.element.querySelector('.element__foto');
    this.cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  
  _handleLikeClick() {
    this.btnLike.classList.toggle('element__like_activ');
  };

  deleteImg() {
    this.element.remove();
    this.element = null;
  };

  generateCard() {
    this.element = this._getTemplate();
    this._setEventListeners();
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this.element.querySelector('.element__title').textContent = this._name;
    this.btnLike = this.element.querySelector('.element__click'); 
    this.btnClose = this.element.querySelector('.element__close-icon'); 
    this.resolutionDelete();
    return this.element;
  };

  resolutionDelete(){
    if (this.ownerId !== this._userId) {
      this.btnClose.style.display = 'none'
    }
  };

  findLike() {
    const userLike = this.likes.find(_id => _id === this._userId)
    return userLike
    
  }

  setLikes(newLikes) {
    //this.likeСontainer = this.element.querySelector('.element__like-container');

    this.likes = newLikes;
    this.element.querySelector('.element__like-container').textContent = this.newLikes.length;

    if (this.findLike()) {
      this._btnLike.classList.add('element__like_activ')
    } else {
      this._btnLike.classList.remove('element__like_activ')
    }
    
  }

}

