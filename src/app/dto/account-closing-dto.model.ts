export class AccountClosingDto {
    private closingReason: string;

    constructor(closingReason: string) {
        this.closingReason = closingReason;
    }

    getClosingReason(): string {
        return this.closingReason;
    }

    setClosingReason(closingReason: string): void {
        this.closingReason = closingReason;
    }
}
