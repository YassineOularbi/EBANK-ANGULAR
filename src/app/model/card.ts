import { CardTier } from "../enum/card-tier";
import { CardType } from "../enum/card-type";
import { NetworkType } from "../enum/network-type";
import { Account } from "./account";
import { Transaction } from "./transaction";

export interface Card {
    id: Number;
    number: Number;
    cvv: Number;
    expirationDate: Date;
    isActivated: Boolean;
    isBlocked: Boolean;
    blockingReason: String;
    type: CardType;
    tier: CardTier;
    network: NetworkType;
    account: Account;
    transactions: Transaction[];
}
