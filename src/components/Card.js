export default class Card {
    constructor (data, templateSelector,handleCardClick) {
        this._name = data.name; 
        this._link = data.link; 
        this._handleCardClick = handleCardClick; 
        this._templateSelector = templateSelector; 
    }

    _getTemplate(){
      const cardTemplate = document.querySelector(this._templateSelector).content;
      return cardTemplate.querySelector('.element').cloneNode(true);
    }

    _setEventListeners(){
      this.element.querySelector('.element__click').addEventListener('click', () => {
        this._handleLikeClick();
      });
       this.element.querySelector('.element__close-icon').addEventListener('click', () => {
         this._handleDeleteClick();
      });
      this.cardImage = this.element.querySelector('.element__foto');
      this.cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }

    _handleLikeClick(){
      this.element.querySelector('.element__like').classList.toggle('element__like_activ');
    }

    _handleDeleteClick(){
        this.element.remove()
    }

    generateCard(){
      this.element = this._getTemplate();
      this._setEventListeners();
      this.cardImage.src = this._link;
      this.cardImage.alt = this._name;
      this.element.querySelector('.element__title').textContent = this._name;
      return this.element;
    }
  }

