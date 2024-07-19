export class BeneficiaryDto {
    private _name: string;
    private _iban: string;
    private _bank: string;
    private _account_id: number;

    constructor(name: string, iban: string, bank: string, account_id: number) {
        this._name = name;
        this._iban = iban;
        this._bank = bank;
        this._account_id = account_id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get iban(): string {
        return this._iban;
    }

    set iban(iban: string) {
        this._iban = iban;
    }

    get bank(): string {
        return this._bank;
    }

    set bank(bank: string) {
        this._bank = bank;
    }

    get account_id(): number {
        return this._account_id;
    }

    set account_id(account_id: number) {
        this._account_id = account_id;
    }
}
