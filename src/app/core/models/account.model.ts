import { AccountType } from "../enums/account-type.enum";
import { Beneficiary } from "./beneficiary.model";
import { Card } from "./card.model";
import { Transaction } from "./transaction.model";
import { User } from "./user.model";

export class Account {
    private _id: number;
    private _type: AccountType;
    private _balance: number;
    private _date: Date;
    private _iban: string;
    private _isClosed: boolean;
    private _closingReason: string;
    private _user: User;
    private _cards: Card[];
    private _transactions: Transaction[];
    private _beneficiaries: Beneficiary[];

    constructor(
        id: number,
        type: AccountType,
        balance: number,
        date: Date,
        iban: string,
        isClosed: boolean,
        closingReason: string,
        user: User,
        cards: Card[],
        transactions: Transaction[],
        beneficiaries: Beneficiary[]
    ) {
        this._id = id;
        this._type = type;
        this._balance = balance;
        this._date = date;
        this._iban = iban;
        this._isClosed = isClosed;
        this._closingReason = closingReason;
        this._user = user;
        this._cards = cards;
        this._transactions = transactions;
        this._beneficiaries = beneficiaries;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get type(): AccountType {
        return this._type;
    }

    set type(type: AccountType) {
        this._type = type;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }

    get iban(): string {
        return this._iban;
    }

    set iban(iban: string) {
        this._iban = iban;
    }

    get isClosed(): boolean {
        return this._isClosed;
    }

    set isClosed(isClosed: boolean) {
        this._isClosed = isClosed;
    }

    get closingReason(): string {
        return this._closingReason;
    }

    set closingReason(closingReason: string) {
        this._closingReason = closingReason;
    }

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

    get cards(): Card[] {
        return this._cards;
    }

    set cards(cards: Card[]) {
        this._cards = cards;
    }

    get transactions(): Transaction[] {
        return this._transactions;
    }

    set transactions(transactions: Transaction[]) {
        this._transactions = transactions;
    }

    get beneficiaries(): Beneficiary[] {
        return this._beneficiaries;
    }

    set beneficiaries(beneficiaries: Beneficiary[]) {
        this._beneficiaries = beneficiaries;
    }
}
