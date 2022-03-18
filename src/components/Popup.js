import { popupRun } from '../utils/Constants.js'

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add(popupRun);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(popupRun);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close()
    };
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if ((evt.target.classList.contains('popup_activ')) || (evt.target.classList.contains('popup__close-icon')))
        this.close()
    })

  }




}
