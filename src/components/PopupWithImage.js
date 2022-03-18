import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.img = this._popup.querySelector('.popup__img-open');
        this.text = this._popup.querySelector('.popup__foto-name');

    }

    open(name, link) {
        this._img.src = link;
        this._img.alt = name;
        this._text.textContent = name;
        super.open()
    }
}
