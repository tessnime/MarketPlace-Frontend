import {Product} from "./Product";

export class ProductCategory{
  id!:number;
  name!:String;
  description!:String;
  products:Product[]=[];
  category!:ProductCategory;
  subCategory:ProductCategory[]=[];
}
