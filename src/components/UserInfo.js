export default class UserInfo {
    constructor({ nameProfile, jobProfile, fotoAvatar}) {
        this.nameProfile = nameProfile;
        this.jobProfile = jobProfile;
        this.fotoAvatar = fotoAvatar;
        this._id = null
    }

    getUserInfo() {
        return {
            name: this.nameProfile.textContent,
            job: this.jobProfile.textContent,
            avatar: this.fotoAvatar.src,
        }
    }

    setUserInfo(data) {
        this.nameProfile.textContent = data.name;
        this.jobProfile.textContent = data.about;
        this.fotoAvatar.src = data.avatar;
        this._id = data._id;
    }
    setAvatarInfo(avatar) {
        this.fotoAvatar.src = avatar;
    }

}
