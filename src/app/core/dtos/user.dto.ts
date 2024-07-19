export class UserDto {
    private _name: string;
    private _mail: string;
    private _username: string;
    private _password: string;
    private _phone: string;

    constructor(name: string, mail: string, username: string, password: string, phone: string) {
        this._name = name;
        this._mail = mail;
        this._username = username;
        this._password = password;
        this._phone = phone;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(mail: string) {
        this._mail = mail;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(phone: string) {
        this._phone = phone;
    }
}
