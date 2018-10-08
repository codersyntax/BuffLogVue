export default class PostComment {
    constructor(id,name, email, message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.date = new Date().toLocaleString();
        this.message = message;
    }
}