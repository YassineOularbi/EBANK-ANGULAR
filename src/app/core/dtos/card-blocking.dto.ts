export class CardBlockingDto {
    private _blockingReason: string;

    constructor(blockingReason: string) {
        this._blockingReason = blockingReason;
    }

    get blockingReason(): string {
        return this._blockingReason;
    }

    set blockingReason(blockingReason: string) {
        this._blockingReason = blockingReason;
    }
}
