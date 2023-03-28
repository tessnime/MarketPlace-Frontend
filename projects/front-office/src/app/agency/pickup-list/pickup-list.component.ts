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
import { Request as re } from 'Models/Request';
import { Role } from 'Models/Role';
import { Shipping } from 'Models/Shipping';
import { Store } from 'Models/Store';
import { User } from 'Models/User';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.component.html',
  styleUrls: ['./pickup-list.component.scss']
})
export class PickupListComponent {
  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,private agencyService:AgencyService,private route:ActivatedRoute,private r:Router){}
  idPickup!:number;
  ngOnInit(){
   this.RetrievePickupBetweenAgencyAndstore();
  };
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
BrandName : "",
BrandLogo : "",
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
    id:0,
    governorate:"",
    city:"",
    gpsPoint:"",
    deliveryAgency:this.user,
    agencyDeliveryMEN:[]
  };
  agencyDeliveryMan: AgencyDeliveryMan={
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
  request1: re={
    id:0,
    localDateTime: new Date('now'),
    requestStatus:RequestStatus.PENDING,
    deliveryman:this.user,
    seller:this.user,
    Agency:this.user,
    pickup:this.pickup1,
    agencyDeliveryMan:this.agencyDeliveryMan
  };
  DeliveryManId!:number;
  addForm(_t77:NgForm){
    const selectedDeliveryManId = this.DeliveryManId;
    this.request1.requestStatus=RequestStatus.PENDING;
    this.requestService.AssignRequestDeliveryManToPickup(this.request1,selectedDeliveryManId,this.idPickup).subscribe(res =>{console.log('Request created');});
    window.location.href = 'http://localhost:4200/agency';
  };
 pickup!:Pickup[];
 RetrievePickupBetweenAgencyAndstore(){
        this.pickupService.RetrievePickupBeTAgencyAndStore().subscribe(data=>{this.pickup=data})
 };

deliveryMen!:AgencyDeliveryMan[];
getDeliveryManByPickup(idPickup:number){
  this.agencyService.retrieveDeliveryMenTOPickup(idPickup).subscribe(data=>{this.deliveryMen=data})
  this.idPickup=idPickup;
};
}
