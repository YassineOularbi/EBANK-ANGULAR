import { Account } from "./account.model";

export class User {
    private _id: number;
    private _name: string;
    private _username: string;
    private _password: string;
    private _mail: string;
    private _phone: string;
    private _accounts: Account[];

    constructor(id: number, name: string, username: string, password: string, mail: string, phone: string, accounts: Account[]) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._password = password;
        this._mail = mail;
        this._phone = phone;
        this._accounts = accounts;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }

    get mail(): string {
        return this._mail;
    }

    get phone(): string {
        return this._phone;
    }

    get accounts(): Account[] {
        return this._accounts;
    }

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set username(username: string) {
        this._username = username;
    }

    set password(password: string) {
        this._password = password;
    }

    set mail(mail: string) {
        this._mail = mail;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

    set accounts(accounts: Account[]) {
        this._accounts = accounts;
    }
}
