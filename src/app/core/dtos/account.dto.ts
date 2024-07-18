import { AccountType } from '../enums/account-type.enum';

export class AccountDto {
    private type: AccountType;
    private balance: number;
    private user_id: number;

    constructor(type: AccountType, balance: number, user_id: number) {
        this.type = type;
        this.balance = balance;
        this.user_id = user_id;
    }

    getType(): AccountType {
        return this.type;
    }

    setType(type: AccountType): void {
        this.type = type;
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(balance: number): void {
        this.balance = balance;
    }

    getUserId(): number {
        return this.user_id;
    }

    setUserId(user_id: number): void {
        this.user_id = user_id;
    }
}
