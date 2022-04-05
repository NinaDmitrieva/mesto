export default class Section {
    constructor({ renderer }, templateSelector) {
        this._data = ''
        this._renderer = renderer;
        this._container = document.querySelector(templateSelector);
        this._id = '';
    }

    renderItems(id) {
        this._data.reverse().forEach((item) => {
            this._renderer(item, id);
        });
    };
    
    addItem(item) {
        this._container.prepend(item);
    }

    setData(data){
        this._data = data;
    }

}