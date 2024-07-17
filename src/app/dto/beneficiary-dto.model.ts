export class BeneficiaryDto {
    private name: string;
    private iban: string;
    private bank: string;
    private account_id: number;

    constructor(name: string, iban: string, bank: string, account_id: number) {
        this.name = name;
        this.iban = iban;
        this.bank = bank;
        this.account_id = account_id;
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

    getAccountId(): number {
        return this.account_id;
    }

    setAccountId(account_id: number): void {
        this.account_id = account_id;
    }
}
