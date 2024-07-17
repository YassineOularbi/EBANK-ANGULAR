import { Account } from "./account.model";

export class User {
    private id: number;
    private name: string;
    private username: string;
    private password: string;
    private mail: string;
    private phone: string;
    private accounts: Account[];

    constructor(id: number, name: string, username: string, password: string, mail: string, phone: string, accounts: Account[]) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.mail = mail;
        this.phone = phone;
        this.accounts = accounts;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    getMail(): string {
        return this.mail;
    }

    getPhone(): string {
        return this.phone;
    }

    getAccounts(): Account[] {
        return this.accounts;
    }

    setId(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setMail(mail: string): void {
        this.mail = mail;
    }

    setPhone(phone: string): void {
        this.phone = phone;
    }

    setAccounts(accounts: Account[]): void {
        this.accounts = accounts;
    }
}
