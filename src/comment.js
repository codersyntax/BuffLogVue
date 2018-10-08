export default class PostComment {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.date = new Date().toLocaleString();
        this.message = message;
    }
}