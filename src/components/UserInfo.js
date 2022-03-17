export default class UserInfo {
    constructor({ nameProfile, jobProfile }) {
        this.nameProfile = nameProfile;
        this.jobProfile = jobProfile;
    }

    _getUserInfo() {
        return {
            name: this.nameProfile.textContent,
            job: this.jobProfile.textContent
        }
    }

    setUserInfo({ name, job }) {
        this.nameProfile.textContent = name;
        this.jobProfile.textContent = job;
    }
    userInfoInputList() {
        return this._getUserInfo()
    }
}
