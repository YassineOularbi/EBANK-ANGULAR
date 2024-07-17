export class UserDto {
    private name: string;
    private mail: string;
    private username: string;
    private password: string;
    private phone: string;

    constructor(name: string, mail: string, username: string, password: string, phone: string){
        this.name = name;
        this.mail = mail;
        this.username = username;
        this.password = password;
        this.phone = phone;
    }

    getName() {
        return this.name;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getMail() {
        return this.mail;
    }

    getPhone() {
        return this.phone;
    }

    setName(name: string) {
        this.name = name;
    }

    setUsername(username: string) {
        this.username = username;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setMail(mail: string) {
        this.mail = mail;
    }

    setPhone(phone: string) {
        this.phone = phone;
    }
}
