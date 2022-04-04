import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this.popup.querySelector('.popup__forms');
    this.handleSubmit = handleSubmit;
  }

  setCard(card) {
    this.card = card; 
  }

  getCard() {
    return this.card
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.handleSubmit(this.getCard())
    });
  }

  // _handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   this._submitHandler();
  // }
}

