import { TransactionContext } from "../enum/transaction-context.enum";
import { TransactionMethod } from "../enum/transaction-method.enum";
import { TransactionType } from "../enum/transaction-type.enum";
import { Account } from "./account.model";
import { Beneficiary } from "./beneficiary.model";
import { Card } from "./card.model";
import { Time } from "@angular/common";

export class Transaction {
    private id: number;
    private amount: number;
    private date: Date;
    private time: Time;
    private description: string;
    private type: TransactionType;
    private context: TransactionContext;
    private method: TransactionMethod;
    private account: Account;
    private internalAccount: Account;
    private beneficiary: Beneficiary;
    private card: Card;

    constructor(
        id: number,
        amount: number,
        date: Date,
        time: Time,
        description: string,
        type: TransactionType,
        context: TransactionContext,
        method: TransactionMethod,
        account: Account,
        internalAccount: Account,
        beneficiary: Beneficiary,
        card: Card
    ) {
        this.id = id;
        this.amount = amount;
        this.date = date;
        this.time = time;
        this.description = description;
        this.type = type;
        this.context = context;
        this.method = method;
        this.account = account;
        this.internalAccount = internalAccount;
        this.beneficiary = beneficiary;
        this.card = card;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    getTime(): Time {
        return this.time;
    }

    setTime(time: Time): void {
        this.time = time;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getType(): TransactionType {
        return this.type;
    }

    setType(type: TransactionType): void {
        this.type = type;
    }

    getContext(): TransactionContext {
        return this.context;
    }

    setContext(context: TransactionContext): void {
        this.context = context;
    }

    getMethod(): TransactionMethod {
        return this.method;
    }

    setMethod(method: TransactionMethod): void {
        this.method = method;
    }

    getAccount(): Account {
        return this.account;
    }

    setAccount(account: Account): void {
        this.account = account;
    }

    getInternalAccount(): Account {
        return this.internalAccount;
    }

    setInternalAccount(internalAccount: Account): void {
        this.internalAccount = internalAccount;
    }

    getBeneficiary(): Beneficiary {
        return this.beneficiary;
    }

    setBeneficiary(beneficiary: Beneficiary): void {
        this.beneficiary = beneficiary;
    }

    getCard(): Card {
        return this.card;
    }

    setCard(card: Card): void {
        this.card = card;
    }
}
