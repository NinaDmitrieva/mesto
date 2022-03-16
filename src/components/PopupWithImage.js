import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor (Selector) {
     super(Selector);
     this.img = Selector.querySelector('.popup__img-open');
     this.text = Selector.querySelector('.popup__foto-name');
     
    }

    open(name, link) {
    this.img.src = link;
    this.img.alt = name;
    this.text.textContent = name;
    super.open()
    }
}
