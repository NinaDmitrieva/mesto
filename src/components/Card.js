export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = data.userId;
    this.ownerId = data.ownerId; 
    this.likes = data.likes;
    this._handleCardClick = data.handleCardClick;
    this._handleDeleteClick = data.handleDeleteClick;
    this.handleLikeClick = data.handleLikeClick;
    this.handleRemoveLike = data.handleRemoveLike;
    this._templateSelector = templateSelector;
    this.setLikes = this.setLikes.bind(this);
  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    return cardTemplate.querySelector('.element').cloneNode(true);
  };

  removeCard() {
    this.element.remove();
    this.element = null
  };

  generateCard() {
    this.element = this._getTemplate();
    this.btnLike = this.element.querySelector('.element__click'); 
    this.btnClose = this.element.querySelector('.element__close-icon'); 
    this.likeСontainer = this.element.querySelector('.element__span-like');
    this.cardImage = this.element.querySelector('.element__foto');
    this.cardName = this.element.querySelector('.element__title');
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this.cardName.textContent = this._name;
    this.renderLikeBtn();
    this.renderLikeCounter();
    this.renderDeleteBtn();
    this._setEventListeners();

    return this.element;
  };

  _checkId(userId) {
    return this.likes.some(function (id) {
        return userId === id._id;
    })
}

  _setEventListeners() {
    this.btnLike.addEventListener('click', () => {
      this.toggleLike();
    });
    this.btnClose.addEventListener('click', () => {
      this._handleDeleteClick(this);
    });
    this.cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  renderDeleteBtn() {
    if (this.ownerId !== this._userId) {
      this.btnClose.remove()
    }
  };

  renderLikeBtn() {
    if(this._checkId(this._userId)) {
      this.btnLike.classList.add('element__like_activ')
    } else {
      this.btnLike.classList.remove('element__like_activ')
    }
}
  setLikes(likes) {
    this.likes = likes
    this.renderLikeCounter()
    this.renderLikeBtn()
  }

  renderLikeCounter() {
    this.likeСontainer.textContent = this.likes.length;
  }

  toggleLike() {
    if(this._checkId(this._userId)) {
      this.handleRemoveLike(this._id, this.setLikes)
    }else{
      this.handleLikeClick(this._id, this.setLikes)
    }
  } 
}

