import { jobInput, nameInput } from "../utils/Constants";

export default class Api {
    constructor(baseUrl, headers ) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    requestResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Все сломалось:( ${res.status}`);
    }
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(this.requestResponse)
    }
    
    addNewCard(data) { 
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
            .then(this.requestResponse)
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
            .then(this.requestResponse);
    }

    setUserInfo(name, job) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: job
            })
        })
            .then(this.requestResponse)
    }

    setAvatarInfo(data) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: data.avatar
            })          
        })
            .then(this.requestResponse)
    }

    deleteCard(id) { 
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(this.requestResponse)
    }

    setLike(id) {
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
          method: "PUT",
          headers: this.headers,
        })
            .then(this.requestResponse)
      }
    
    deleteLike(id) {
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
          method: "DELETE",
          headers: this.headers,
        })
            .then(this.requestResponse)
      }
    
}
