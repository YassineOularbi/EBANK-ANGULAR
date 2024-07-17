import { Account } from "./account";

export interface User {
    id: Number;
    name: String;
    username: String;
    mail: String;
    phone: String;
    accounts: Account[];
}
