import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._img = this.popup.querySelector('.popup__img-open');
        this._text = this.popup.querySelector('.popup__foto-name');

    }

    open(name, link) {
        this._img.src = link;
        this._img.alt = name;
        this._text.textContent = name;
        super.open()
    }
}
