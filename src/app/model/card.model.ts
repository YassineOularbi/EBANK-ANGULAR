import { CardTier } from '../enum/card-tier.enum';
import { CardType } from '../enum/card-type.enum';
import { NetworkType } from '../enum/network-type.enum';
import { Account } from './account.model';
import { Transaction } from './transaction.model';


export class Card {
  private id: number;
  private number: number;
  private cvv: number;
  private expirationDate: Date;
  private isActivated: boolean;
  private isBlocked: boolean;
  private blockingReason: string;
  private type: CardType;
  private tier: CardTier;
  private network: NetworkType;
  private account: Account;
  private transactions: Transaction[];

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
    this.id = id;
    this.number = number;
    this.cvv = cvv;
    this.expirationDate = expirationDate;
    this.isActivated = isActivated;
    this.isBlocked = isBlocked;
    this.blockingReason = blockingReason;
    this.type = type;
    this.tier = tier;
    this.network = network;
    this.account = account;
    this.transactions = transactions;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNumber(): number {
    return this.number;
  }

  setNumber(number: number): void {
    this.number = number;
  }

  getCvv(): number {
    return this.cvv;
  }

  setCvv(cvv: number): void {
    this.cvv = cvv;
  }

  getExpirationDate(): Date {
    return this.expirationDate;
  }

  setExpirationDate(expirationDate: Date): void {
    this.expirationDate = expirationDate;
  }

  getIsActivated(): boolean {
    return this.isActivated;
  }

  setIsActivated(isActivated: boolean): void {
    this.isActivated = isActivated;
  }

  getIsBlocked(): boolean {
    return this.isBlocked;
  }

  setIsBlocked(isBlocked: boolean): void {
    this.isBlocked = isBlocked;
  }

  getBlockingReason(): string {
    return this.blockingReason;
  }

  setBlockingReason(blockingReason: string): void {
    this.blockingReason = blockingReason;
  }

  getType(): CardType {
    return this.type;
  }

  setType(type: CardType): void {
    this.type = type;
  }

  getTier(): CardTier {
    return this.tier;
  }

  setTier(tier: CardTier): void {
    this.tier = tier;
  }

  getNetwork(): NetworkType {
    return this.network;
  }

  setNetwork(network: NetworkType): void {
    this.network = network;
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
