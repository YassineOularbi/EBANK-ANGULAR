export class CardBlockingDto {
    private blockingReason: string;

    constructor(blockingReason: string) {
        this.blockingReason = blockingReason;
    }

    getBlockingReason(): string {
        return this.blockingReason;
    }

    setBlockingReason(blockingReason: string): void {
        this.blockingReason = blockingReason;
    }
}
