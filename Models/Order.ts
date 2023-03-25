import {Shipping} from "./Shipping";
import {StatusOrderType} from "./Enum/StatusOrderType";
import {PromotionCode} from "./PromotionCode";
import {User} from "./User";
import {ProductQuantity} from "./ProductQuantity";
import {Pickup} from "./Pickup";

export class Order{
  id!: number;
  ref!: string;
  sum!: number;
  deliveryPrice!: number;
  productsWeightKg!: number;
  orderCode!: number;
  payment!: number;
  status!: StatusOrderType;
  creationDate!: number;
  pickups:Pickup[]=[];
  shipping!: Shipping;
  buyer!:User;
  productQuantities:ProductQuantity[]=[];
  promotionCodeList: PromotionCode[]=[];

}
