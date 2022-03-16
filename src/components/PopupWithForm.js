import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor (Selector, formSubmit) {
     super(Selector);
     this.formSubmit = formSubmit;
     this.form = Selector.querySelector('.popup__forms');
     
    }
    _getInputValues() {
     this.inputList = this.Selector.querySelectorAll('.popup__style');
     this.formValues = {};

     this.inputList.forEach((input)=> {
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
    }

}
