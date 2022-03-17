import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
    this.form = popupSelector.querySelector('.popup__forms');
    this.inputList = this.popupSelector.querySelectorAll('.popup__style');

  }
  _getInputValues() {
    this.formValues = {};

    this.inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  setEventListeners() {
    super.setEventListeners()

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.formSubmit(this._getInputValues())
    })
  }

  close() {
    super.close();
    this.form.reset()
  }

}
