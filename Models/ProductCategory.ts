import {Product} from "./Product";

export class ProductCategory{
  id!:number;
  name!:string;
  description!:string;
  products:Product[]=[];
  category!:ProductCategory;
  subCategory:ProductCategory[]=[];
}
