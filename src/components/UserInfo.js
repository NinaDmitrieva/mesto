export default class UserInfo {
    constructor({ nameProfile, jobProfile, fotoAvatar}) {
        this.nameProfile = nameProfile;
        this.jobProfile = jobProfile;
        this.fotoAvatar = fotoAvatar;
    }

    getUserInfo() {
        return {
            name: this.nameProfile.textContent,
            job: this.jobProfile.textContent,
            avatar: this.fotoAvatar.src
        }
    }

    setUserInfo(data) {
        this.nameProfile.textContent = data.name;
        this.jobProfile.textContent = data.job;
        
    }
    setAvatarInfo(avatar) {
        this.fotoAvatar.src = avatar
    }
}

