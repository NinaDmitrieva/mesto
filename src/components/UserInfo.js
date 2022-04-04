export default class UserInfo {
    constructor({ nameProfile, jobProfile, fotoAvatar}) {
        this.nameProfile = nameProfile;
        this.jobProfile = jobProfile;
        this.fotoAvatar = fotoAvatar;
        this._id = '';
        this.setUserInfo = this.setUserInfo.bind(this)
        this.getUserId = this.getUserId.bind(this)
    }

    getUserInfo() {
        return {
            name: this.nameProfile.textContent,
            job: this.jobProfile.textContent,
        }
    }
    setUserInfo(data) {
        this.nameProfile.textContent = data.name;
        this.jobProfile.textContent = data.about;
        this.fotoAvatar.src = data.avatar;
        this.identifer = data._id
        this.setUserId(data._id)
    }

    setUserId(id) {
        this._id = id;
    }

    setAvatarInfo(avatar) {
        this.fotoAvatar.src = avatar;
    }

    getUserId() {
        return this.identifer
    }

}