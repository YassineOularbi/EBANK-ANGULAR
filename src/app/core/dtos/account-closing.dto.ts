export class AccountClosingDto {
    private _closingReason: string;

    constructor(closingReason: string) {
        this._closingReason = closingReason;
    }

    get closingReason(): string {
        return this._closingReason;
    }

    set closingReason(closingReason: string) {
        this._closingReason = closingReason;
    }
}
