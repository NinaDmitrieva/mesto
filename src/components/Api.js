export default class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }
  
    requestResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Произошла ошибка ${res.status}`);
    }
    getInitialCards() {//загрузить карточки
      return fetch(`${this.baseUrl}/cards`, {
          method: 'GET',
          headers: this.headers,
      })
      .then(this.requestResponse)
    }
    addNewCards(name, link) { //добавить новую карточку мб name+link+id?
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link,
              })
        })
        .then(this.requestResponse)
      }

    
  }
  
