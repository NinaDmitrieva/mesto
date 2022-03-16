import {popupRun} from '../utils/Constants.js'

export default class Popup {
    constructor (Selector) {
        this.Selector = Selector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
     this.Selector.classList.add(popupRun);
     document.addEventListener('keydown', this._handleEscClose); 
    }

    close() {
     this.Selector.classList.remove(popupRun);
     document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {  
     if (event.key === 'Escape') {
     this.close()
    };
    }

    setEventListeners() {
      this.Selector.addEventListener('click', (evt) => {
        if ((evt.target.classList.contains('popup_activ')) || (evt.target.classList.contains('popup__close-icon')) )
        this.close()
      })
    
    }



 
}
