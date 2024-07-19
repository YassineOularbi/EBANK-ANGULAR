import { Account } from "./account.model";
import { Transaction } from "./transaction.model";

export class Beneficiary {
    private _id: number;
    private _name: string;
    private _iban: string;
    private _bank: string;
    private _account: Account;
    private _transactions: Transaction[];

    constructor(
        id: number,
        name: string,
        iban: string,
        bank: string,
        account: Account,
        transactions: Transaction[]
    ) {
        this._id = id;
        this._name = name;
        this._iban = iban;
        this._bank = bank;
        this._account = account;
        this._transactions = transactions;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get iban(): string {
        return this._iban;
    }

    set iban(iban: string) {
        this._iban = iban;
    }

    get bank(): string {
        return this._bank;
    }

    set bank(bank: string) {
        this._bank = bank;
    }

    get account(): Account {
        return this._account;
    }

    set account(account: Account) {
        this._account = account;
    }

    get transactions(): Transaction[] {
        return this._transactions;
    }

    set transactions(transactions: Transaction[]) {
        this._transactions = transactions;
    }
}
