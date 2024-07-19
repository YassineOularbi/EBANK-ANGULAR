export class CardStatusDto {
    private _isActivated: boolean;

    constructor(isActivated: boolean) {
        this._isActivated = isActivated;
    }

    get isActivated(): boolean {
        return this._isActivated;
    }

    set isActivated(isActivated: boolean) {
        this._isActivated = isActivated;
    }
}
