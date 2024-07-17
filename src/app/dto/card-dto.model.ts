import { CardTier } from "../enum/card-tier.enum";
import { CardType } from "../enum/card-type.enum";
import { NetworkType } from "../enum/network-type.enum";

export class CardDto {
    private type: CardType;
    private tier: CardTier;
    private network: NetworkType;
    private account_id: number;

    constructor(
        type: CardType,
        tier: CardTier,
        network: NetworkType,
        account_id: number,
    ){
        this.type = type;
        this.tier = tier;
        this.network = network;
        this.account_id = account_id;
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
    
      getAccount(): number {
        return this.account_id;
      }
    
      setAccount(account_id: number): void {
        this.account_id = account_id;
      }
}
