import { AccountType } from '../enums/account-type.enum';

export class AccountDto {
    private _type: AccountType;
    private _balance: number;
    private _user_id: number;

    constructor(type: AccountType, balance: number, user_id: number) {
        this._type = type;
        this._balance = balance;
        this._user_id = user_id;
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

    get user_id(): number {
        return this._user_id;
    }

    set user_id(user_id: number) {
        this._user_id = user_id;
    }
}
