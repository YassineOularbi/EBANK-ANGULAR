import { Account } from "./account";
import { Transaction } from "./transaction";

export interface Beneficiary {
    id: Number;
    name: String;
    iban: String;
    bank: String;
    account: Account;
    transactions: Transaction[];
}
