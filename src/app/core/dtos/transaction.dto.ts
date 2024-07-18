import { TransactionMethod } from '../enums/transaction-method.enum';

export class TransactionDto {
    private amount: number;
    private description: string;
    private method: TransactionMethod;

    constructor(amount: number, description: string, method: TransactionMethod) {
        this.amount = amount;
        this.description = description;
        this.method = method;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getMethod(): TransactionMethod {
        return this.method;
    }

    setMethod(method: TransactionMethod): void {
        this.method = method;
    }
}
