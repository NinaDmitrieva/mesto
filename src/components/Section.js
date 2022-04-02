export default class Section {
    constructor({ renderer }, templateSelector) {
        this._data = ''
        this._renderer = renderer;
        this._container = document.querySelector(templateSelector);
    }
    renderItems() {
        this._data.forEach((item) => {
            this._renderer(item);
            
        });
    };
    addItem(item) {
        this._container.prepend(item);
    }

    setData(data){
        this._data = data;
    }

}