import { popupRun } from '../utils/Constants.js'

export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this.popupSelector.classList.add(popupRun);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popupSelector.classList.remove(popupRun);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close()
    };
  }

  setEventListeners() {
    this.popupSelector.addEventListener('mousedown', (evt) => {
      if ((evt.target.classList.contains('popup_activ')) || (evt.target.classList.contains('popup__close-icon')))
        this.close()
    })

  }




}
