import {OrderStatus} from "./enum/orderStatus";
import {Shipping} from "./shipping";

export class Order{
  id!: number;
  ref!: string;
  sum!: number;
  deliveryPrice!: number;
  productsWeightKg!: number;
  orderCode!: number;
  payment!: number;
  status!: OrderStatus;
  creationDate!: number;
  shipping!: Shipping;
  promotionCodeList!: any;
}
