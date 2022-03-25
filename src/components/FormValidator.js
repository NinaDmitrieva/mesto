export default class FormValidator {
  constructor (settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._submitButtonErrorClass = settings.submitButtonErrorClass;
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners(this._form)
  }

  _setEventListeners (form) {
    this._inputs.forEach(input => input.addEventListener('input', () => {
      this._handleField(form, input)
      this.setSubmitButtonState(form)  
      })) 
  }

  _handleField (form, input) {
    if (input.validity.valid) {
      this._hideError(form, input);
    } else {
      this._showError(form, input)
    }
  }

   _showError(form, input) {
    input.classList.add(this._inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.textContent = input.validationMessage
  }

   _hideError(form, input) {
    input.classList.remove(this._inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.textContent = "" ;
  }

   setSubmitButtonState() {
    this._button.disabled = !this._form.checkValidity()
    this._button.classList.toggle(this._submitButtonErrorClass, !this._form.checkValidity())
  }

}

