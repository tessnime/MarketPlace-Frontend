import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';
import { GenderType } from 'Models/Enum/GenderType';
import { RequestStatus } from 'Models/Enum/RequestStatus';
import { RoleType } from 'Models/Enum/RoleType';
import { StatusOrderType } from 'Models/Enum/StatusOrderType';
import { StatusPickupBuyer } from 'Models/Enum/StatusPickupBuyer';
import { StatusPickupSeller } from 'Models/Enum/StatusPickupSeller';
import { TypeOfGear } from 'Models/Enum/TypeOfGear';
import { Order } from 'Models/Order';
import { Pickup } from 'Models/Pickup';
import { Request } from 'Models/Request';
import { Role } from 'Models/Role';
import { Shipping } from 'Models/Shipping';
import { Store } from 'Models/Store';
import { User } from 'Models/User';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-pickup-list-freelancer',
  templateUrl: './pickup-list-freelancer.component.html',
  styleUrls: ['./pickup-list-freelancer.component.scss']
})
export class PickupListFreelancerComponent {
  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,private route:ActivatedRoute,private r:Router){}
ngOnInit(){
  this.RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer();
}


role :Role={
  id: 0,
  RoleType:RoleType.ADMIN,
  users:[],
  privileges:[]
};
user :User={
id : 0,
firstName : "",
lastName : "",
email : "",
password : "",
enabled : true,
tokenExpired : false,
banned : false,
phoneNumber : "",
BirthDate : new Date(),
image : "",
genderType : GenderType.MAN, // or any other value of GenderType enum
identity : "",
brandName : "",
brandLogo : "",
justification : "",
governorate : "",
city : "",
gear : "",
driveLicense : "",
dearAge : 0,
co2 : 0,
resetToken : 0,
rating : 0,
numberOfRatings : 0,
levelDelivery : "",
orders : [],
stores : [],
role : this.role, // or any other value of Role enum
claimSavList : [],
reviewsSent : [],
reviewsOnDA : [],
reviewsOnDF : [],
requestsdeliverymen : [],
requestsellers : [],
requestsAgencys : [],
agencyBranches : [],
supplierRequests: []
};
shipping: Shipping = {
id: 0,
governorate: "",
city: "",
gpsPoint: ""
};
order: Order = {
id: 0,
ref:"",
sum:0,
deliveryPrice: 0,
productsWeightKg: 0,
orderCode: 0,
payment: 0,
status: StatusOrderType.ACCEPTED_PAYMENT,
creationDate: 0,
pickups:[],
shipping: this.shipping,
buyer:this.user,
productQuantities:[],
promotionCodeList: []
};
store: Store={
id:0,
name:"",
governorate:"",
city:"",
x:"",
y:"",
IBAN:"",
products:[],
seller:[],
requestsellers:[],
pickups:[]
};
 pickup1: Pickup = {
  id: 0,
  availableDeliver: "",
  orderOfTheSomeSeller: true,
  comment: "",
  governorate: "",
  city: "",
  codePickup: "",
  shippingStatus: "",
  payed: true,
  dateCreationPickup: new Date(),
  sum:0,
  nbRequest:0,
  deliveryTimeInHoursBuyer:"0",
  deliveryTimeInHoursSeller:"0",
  secondPhoneNumber:"",
  statusPickupSeller:StatusPickupSeller.PICKED,
  statusPickupBuyer:StatusPickupBuyer.PLACED,
  order: this.order,
  requests: [],
  store: this.store
};
agencyBranch:AgencyBranch={
  id:1,
  governorate:"",
  city:"",
  gpsPoint:"",
  brandName:"",
  deliveryAgency:this.user,
  agencyDeliveryMEN:[]
};

agencyDeliveryMan: AgencyDeliveryMan  ={
  id: 0,
  firstName: "",
  lastName: "",
  cin: "",
  gearv: "",
  governorate: "",
  city: "",
  typeOfGear: TypeOfGear.BIKE,
  agencyBranch: this.agencyBranch,
  requests:[]
};
request1: Request={
  id:0,
  localDateTime: new Date('now'),
  requestStatus:RequestStatus.PENDING,
  deliveryman:this.user,
  seller:this.user,
  agency:this.user,
  pickup:this.pickup1,
  agencyDeliveryMan:this.agencyDeliveryMan
};
idPickup!:number;
addForm(_t77:NgForm){
  this.request1.requestStatus=RequestStatus.PENDING;
  this.requestService.assignRequestDeliveryMenFreelancerandPickup(this.request1,this.idPickup).subscribe();
  window.location.href = 'http://localhost:4200/freelancer/requests';
};

 pickup!:Pickup[];
 RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer(){
  this.pickupService.RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer().subscribe(data=>{this.pickup=data});

 }
 selectPickup(id: number) {
  this.idPickup = id;
}
}
