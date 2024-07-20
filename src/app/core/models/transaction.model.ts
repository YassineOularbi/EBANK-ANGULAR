import { TransactionContext } from "../enums/transaction-context.enum";
import { TransactionMethod } from "../enums/transaction-method.enum";
import { TransactionType } from "../enums/transaction-type.enum";
import { Account } from "./account.model";
import { Beneficiary } from "./beneficiary.model";
import { Card } from "./card.model";
import { Time } from "@angular/common";

export class Transaction {
    private _id: number;
    private _amount: number;
    private _date: Date;
    private _time: Date;
    private _description: string;
    private _type: TransactionType;
    private _context: TransactionContext;
    private _method: TransactionMethod;
    private _account: Account;
    private _internalAccount: Account;
    private _beneficiary: Beneficiary;
    private _card: Card;

    constructor(
        id: number,
        amount: number,
        date: Date,
        time: Date,
        description: string,
        type: TransactionType,
        context: TransactionContext,
        method: TransactionMethod,
        account: Account,
        internalAccount: Account,
        beneficiary: Beneficiary,
        card: Card
    ) {
        this._id = id;
        this._amount = amount;
        this._date = date;
        this._time = time;
        this._description = description;
        this._type = type;
        this._context = context;
        this._method = method;
        this._account = account;
        this._internalAccount = internalAccount;
        this._beneficiary = beneficiary;
        this._card = card;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }

    get time(): Date {
        return this._time;
    }

    set time(time: Date) {
        this._time = time;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get type(): TransactionType {
        return this._type;
    }

    set type(type: TransactionType) {
        this._type = type;
    }

    get context(): TransactionContext {
        return this._context;
    }

    set context(context: TransactionContext) {
        this._context = context;
    }

    get method(): TransactionMethod {
        return this._method;
    }

    set method(method: TransactionMethod) {
        this._method = method;
    }

    get account(): Account {
        return this._account;
    }

    set account(account: Account) {
        this._account = account;
    }

    get internalAccount(): Account {
        return this._internalAccount;
    }

    set internalAccount(internalAccount: Account) {
        this._internalAccount = internalAccount;
    }

    get beneficiary(): Beneficiary {
        return this._beneficiary;
    }

    set beneficiary(beneficiary: Beneficiary) {
        this._beneficiary = beneficiary;
    }

    get card(): Card {
        return this._card;
    }

    set card(card: Card) {
        this._card = card;
    }
}
