export class CardStatusDto {
    private isActivated: boolean;

    constructor(isActivated: boolean) {
        this.isActivated = isActivated;
    }

    getIsActivated(): boolean {
        return this.isActivated;
    }

    setIsActivated(isActivated: boolean): void {
        this.isActivated = isActivated;
    }
}
