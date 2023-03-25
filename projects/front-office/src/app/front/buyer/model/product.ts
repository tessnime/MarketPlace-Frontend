import {ProductStatus} from "./enum/productStatus";

export class Product{
  id!: number;
  reference!: string;
  name!: string;
  description!: string;
  productPrice!: number;
  productPriceBeforeDiscount!: number;
  deliveryPrice!: number;
  unityPriceFromSupplier!: number;
  rating!: number;
  automaticRequestAcceptance!: number;
  numberOfRatings!: number;
  quantity!: number;
  productWeight!: number;
  deliveryQuantity!: number;
  enabled!: boolean;
  creationDate!: Date;
  numberOfPurchase!: number;
  productStatus!: ProductStatus;
  additionalDeliveryInstructions!: string;
  image!: string;
}

