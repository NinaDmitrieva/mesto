import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.img = popupSelector.querySelector('.popup__img-open');
        this.text = popupSelector.querySelector('.popup__foto-name');

    }

    open(name, link) {
        this.img.src = link;
        this.img.alt = name;
        this.text.textContent = name;
        super.open()
    }
}
