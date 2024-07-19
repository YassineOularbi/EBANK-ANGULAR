import { CardTier } from '../enums/card-tier.enum';
import { CardType } from '../enums/card-type.enum';
import { NetworkType } from '../enums/network-type.enum';
import { Account } from './account.model';
import { Transaction } from './transaction.model';

export class Card {
  private _id: number;
  private _number: number;
  private _cvv: number;
  private _expirationDate: Date;
  private _isActivated: boolean;
  private _isBlocked: boolean;
  private _blockingReason: string;
  private _type: CardType;
  private _tier: CardTier;
  private _network: NetworkType;
  private _account: Account;
  private _transactions: Transaction[];

  constructor(
    id: number,
    number: number,
    cvv: number,
    expirationDate: Date,
    isActivated: boolean,
    isBlocked: boolean,
    blockingReason: string,
    type: CardType,
    tier: CardTier,
    network: NetworkType,
    account: Account,
    transactions: Transaction[]
  ) {
    this._id = id;
    this._number = number;
    this._cvv = cvv;
    this._expirationDate = expirationDate;
    this._isActivated = isActivated;
    this._isBlocked = isBlocked;
    this._blockingReason = blockingReason;
    this._type = type;
    this._tier = tier;
    this._network = network;
    this._account = account;
    this._transactions = transactions;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get number(): number {
    return this._number;
  }

  set number(number: number) {
    this._number = number;
  }

  get cvv(): number {
    return this._cvv;
  }

  set cvv(cvv: number) {
    this._cvv = cvv;
  }

  get expirationDate(): Date {
    return this._expirationDate;
  }

  set expirationDate(expirationDate: Date) {
    this._expirationDate = expirationDate;
  }

  get isActivated(): boolean {
    return this._isActivated;
  }

  set isActivated(isActivated: boolean) {
    this._isActivated = isActivated;
  }

  get isBlocked(): boolean {
    return this._isBlocked;
  }

  set isBlocked(isBlocked: boolean) {
    this._isBlocked = isBlocked;
  }

  get blockingReason(): string {
    return this._blockingReason;
  }

  set blockingReason(blockingReason: string) {
    this._blockingReason = blockingReason;
  }

  get type(): CardType {
    return this._type;
  }

  set type(type: CardType) {
    this._type = type;
  }

  get tier(): CardTier {
    return this._tier;
  }

  set tier(tier: CardTier) {
    this._tier = tier;
  }

  get network(): NetworkType {
    return this._network;
  }

  set network(network: NetworkType) {
    this._network = network;
  }

  get account(): Account {
    return this._account;
  }

  set account(account: Account) {
    this._account = account;
  }

  get transactions(): Transaction[] {
    return this._transactions;
  }

  set transactions(transactions: Transaction[]) {
    this._transactions = transactions;
  }
}
