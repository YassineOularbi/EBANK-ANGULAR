import { AccountType } from "../enum/account-type.enum";
import { Beneficiary } from "./beneficiary.model";
import { Card } from "./card.model";
import { Transaction } from "./transaction.model";
import { User } from "./user.model";

export class Account {
    private id: number;
    private type: AccountType;
    private balance: number;
    private date: Date;
    private iban: string;
    private isClosed: boolean;
    private closingReason: string;
    private user: User;
    private cards: Card[];
    private transactions: Transaction[];
    private beneficiaries: Beneficiary[];

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
        this.id = id;
        this.type = type;
        this.balance = balance;
        this.date = date;
        this.iban = iban;
        this.isClosed = isClosed;
        this.closingReason = closingReason;
        this.user = user;
        this.cards = cards;
        this.transactions = transactions;
        this.beneficiaries = beneficiaries;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
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

    getDate(): Date {
        return this.date;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    getIban(): string {
        return this.iban;
    }

    setIban(iban: string): void {
        this.iban = iban;
    }

    getIsClosed(): boolean {
        return this.isClosed;
    }

    setIsClosed(isClosed: boolean): void {
        this.isClosed = isClosed;
    }

    getClosingReason(): string {
        return this.closingReason;
    }

    setClosingReason(closingReason: string): void {
        this.closingReason = closingReason;
    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User): void {
        this.user = user;
    }

    getCards(): Card[] {
        return this.cards;
    }

    setCards(cards: Card[]): void {
        this.cards = cards;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

    setTransactions(transactions: Transaction[]): void {
        this.transactions = transactions;
    }

    getBeneficiaries(): Beneficiary[] {
        return this.beneficiaries;
    }

    setBeneficiaries(beneficiaries: Beneficiary[]): void {
        this.beneficiaries = beneficiaries;
    }
}
