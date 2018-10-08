export default class ContactRequest {
    constructor(id, name, email, message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
        this.dateCreated = new Date().toLocaleString();
    }
}