import {User} from "./User";
import {AgencyDeliveryMan} from "./AgencyDeliveryMan";

export class AgencyBranch{
  id!:number;
  governorate!:string;
  city!:string;
  gpsPoint!:string;
  deliveryAgency!:User;
  agencyDeliveryMEN:AgencyDeliveryMan[]=[];
}
