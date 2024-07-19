import { TransactionMethod } from '../enums/transaction-method.enum';

export class TransactionDto {
    private _amount: number;
    private _description: string;
    private _method: TransactionMethod;

    constructor(amount: number, description: string, method: TransactionMethod) {
        this._amount = amount;
        this._description = description;
        this._method = method;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get method(): TransactionMethod {
        return this._method;
    }

    set method(method: TransactionMethod) {
        this._method = method;
    }
}
