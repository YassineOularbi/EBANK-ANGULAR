import { CardTier } from "../enums/card-tier.enum";
import { CardType } from "../enums/card-type.enum";
import { NetworkType } from "../enums/network-type.enum";

export class CardDto {
    private _type: CardType;
    private _tier: CardTier;
    private _network: NetworkType;
    private _account_id: number;

    constructor(
        type: CardType,
        tier: CardTier,
        network: NetworkType,
        account_id: number,
    ) {
        this._type = type;
        this._tier = tier;
        this._network = network;
        this._account_id = account_id;
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
    
    get account_id(): number {
        return this._account_id;
    }
    
    set account_id(account_id: number) {
        this._account_id = account_id;
    }
}
