import { AccountType } from "../enum/account-type";
import { Beneficiary } from "./beneficiary";
import { Card } from "./card";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface Account {
    id: Number;
    type: AccountType;
    balance: Number;
    date: Date;
    iban: String;
    isClosed: Boolean;
    closingReason: String;
    user: User;
    cards: Card[];
    transactions: Transaction[];
    beneficiaries: Beneficiary[];



}
