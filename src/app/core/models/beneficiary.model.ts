import { Account } from "./account.model";
import { Transaction } from "./transaction.model";

export class Beneficiary {
    private id: number;
    private name: string;
    private iban: string;
    private bank: string;
    private account: Account;
    private transactions: Transaction[];

    constructor(
        id: number,
        name: string,
        iban: string,
        bank: string,
        account: Account,
        transactions: Transaction[]
    ) {
        this.id = id;
        this.name = name;
        this.iban = iban;
        this.bank = bank;
        this.account = account;
        this.transactions = transactions;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getIban(): string {
        return this.iban;
    }

    setIban(iban: string): void {
        this.iban = iban;
    }

    getBank(): string {
        return this.bank;
    }

    setBank(bank: string): void {
        this.bank = bank;
    }

    getAccount(): Account {
        return this.account;
    }

    setAccount(account: Account): void {
        this.account = account;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

    setTransactions(transactions: Transaction[]): void {
        this.transactions = transactions;
    }
}
