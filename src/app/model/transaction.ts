import { Time } from "@angular/common";
import { TransactionType } from "../enum/transaction-type";
import { TransactionContext } from "../enum/transaction-context";
import { TransactionMethod } from "../enum/transaction-method";
import { Account } from "./account";
import { Beneficiary } from "./beneficiary";
import { Card } from "./card";

export interface Transaction {
    id: Number;
    amount: Number;
    date: Date;
    time: Time;
    description: String;
    type: TransactionType;
    context: TransactionContext;
    method: TransactionMethod;
    account: Account;
    internalAccount: Account;
    beneficiary: Beneficiary;
    card: Card;
}
