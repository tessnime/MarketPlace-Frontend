import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';
import { GenderType } from 'Models/Enum/GenderType';
import { RoleType } from 'Models/Enum/RoleType';
import { TypeOfGear } from 'Models/Enum/TypeOfGear';
import { Role } from 'Models/Role';
import { User } from 'Models/User';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';

@Component({
  selector: 'app-add-delivery-men-agency',
  templateUrl: './add-delivery-men-agency.component.html',
  styleUrls: ['./add-delivery-men-agency.component.scss']
})
export class AddDeliveryMenAgencyComponent {
  constructor(private agencyService:AgencyService,private route:ActivatedRoute,private r:Router){}





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
  agencyBranch:AgencyBranch={
    id:0,
    governorate:"",
   city:"",
   gpsPoint:"",
   brandName:"",
   deliveryAgency:this.user,
   agencyDeliveryMEN:[],
   }


  agencydm:AgencyDeliveryMan={
    id: 0,
    firstName: "",
    lastName: "",
    cin: "",
    gearv: "",
    governorate: "",
    city: "",
    typeOfGear: TypeOfGear.CAR,
    agencyBranch: this.agencyBranch,
    requests:[]
  }
addForm(t7:NgForm){

}






  AssignAgencyDeliveryManByBranch(adm:AgencyDeliveryMan,idBranch:number){
    this.agencyService.AssignAgencyDeliveryManByBranch(this.agencydm,idBranch).subscribe();
  }

}
