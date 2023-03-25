import {Product} from "./Product";
import {User} from "./User";
import {Pickup} from "./Pickup";

export class Store{
id!:number;
name!:String;
governorate!:String;
city!:String;
x!:String;
y!:String;
IBAN!:String;
products:Product[]=[];
seller:User[]=[];
requestsellers:Request[]=[];
pickups:Pickup[]=[];
}
