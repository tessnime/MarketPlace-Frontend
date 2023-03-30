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

  idBranch!:number;
ngOnInit(){
  /*this.route.params.subscribe(params => {
    this.idBranch = params['idBranch'];
  });*/
  this.idBranch=this.route.snapshot.params['idBranch'];
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
  agencyBranch:AgencyBranch={
    id:1,
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
    gearmatricuel:"",
    typeOfGear: TypeOfGear.CAR,
    agencyBranch: this.agencyBranch,
    requests:[]
  }
  typeOfGear= [
    'CAR','BIKE','TRUCK'
  ];
  typeOfGearr: string = '';
addForm(t7:NgForm){
 this.agencydm.firstName=t7.controls["firstName"].value;
 this.agencydm.lastName=t7.controls["lastName"].value;
 this.agencydm.cin=t7.controls["cin"].value;
 this.agencydm.governorate=t7.controls["governorate"].value;
 this.agencydm.city=t7.controls["city"].value;
 this.agencydm.gearmatricuel=t7.controls["gearMatricule"].value;
 this.agencydm.typeOfGear=t7.controls["typeOfGearr"].value;
 this.agencyService.AssignAgencyDeliveryManByBranch(this.agencydm,this.idBranch).subscribe(()=>{this.r.navigateByUrl("/agency/MyBranch")});
}


  governorates = [
    { name: 'Ariana', cities: ['Ariana', 'Raoued', 'Sidi Thabet'] },
    { name: 'Béja', cities: ['Béja', 'Medjez el-Bab', 'Téboursouk', 'Testour'] },
    { name: 'Ben Arous', cities: ['Ben Arous', 'Bou Mhel el-Bassatine', 'El Mourouj', 'Ezzahra', 'Hammam Chott', 'Mornag', 'Rades'] },
    { name: 'Bizerte', cities: ['Bizerte', 'Mateur', 'Menzel Bourguiba', 'Ras Jebel', 'Sejnane', 'Tinja', 'Utique', 'Zarzouna'] },
    { name: 'Gabès', cities: ['Gabès', 'El Hamma', 'Ghannouch', 'Matmata', 'Métouia', 'Nouvelle Matmata'] },
    { name: 'Gafsa', cities: ['Gafsa', 'El Ksar', 'Ksar Ghilane', 'Mdhilla', 'Métlaoui', 'Redeyef', 'Sened', 'Sidi Aïch'] },
    { name: 'Jendouba', cities: ['Jendouba', 'Aïn Draham', 'Balta-Bou Aouane', 'Bou Salem', 'Fernana', 'Ghardimaou', 'Oued Mliz', 'Tabarka'] },
    { name: 'Kairouan', cities: ['Kairouan', 'Alaa', 'Bou Hajla', 'Chebika', 'Haffouz', 'Oueslatia', 'Sbikha', 'Sidi Bou Ali'] },
    { name: 'Kasserine', cities: ['Kasserine', 'Sbeitla', 'Thala', 'Foussana', 'Haïdra', 'Hidra', 'Jedelienne', 'Feriana', 'El Ayoun'] },
    { name: 'Kébili', cities: ['Kébili', 'Douz', 'Faouar', 'Kébili Nord', 'Souk Lahad'] },
    { name: 'Le Kef', cities: ['Le Kef', 'Dahmani', 'Kalâat Khasba', 'Nebeur', 'Sakiet Sidi Youssef', 'Sers', 'Tajerouine', 'Kalaat Senan'] },
    { name: 'Mahdia', cities: ['Mahdia', 'Bou Merdes', 'Chebba', 'El Jem', 'Essouassi', 'Hebira', 'Ksour Essef', 'Melloulèche', 'Ouled Chamekh', 'Souassi'] },
    { name: 'Manouba', cities: ['Manouba', 'Borj El Amri', 'Douar Hicher', 'Mornaguia', 'Oued Ellil', 'Tébourba'] },
    { name: 'Sousse', cities: ['Sousse', 'Akouda', 'Bouficha', 'Mornaguia', 'Enfidha', 'Hammam Sousse', 'Hergla', 'Kalâa Kebira', 'Kalâa Seghira ', 'Kondar', 'Messaadine', 'Msaken', 'Sidi Bou Ali', 'Sidi El Heni', 'Sousse Jaouhara', 'Sousse Medina', 'Sousse Riadh', 'Sousse Sidi Abdelhamid'] },
    { name: 'Tunis', cities: ['Tunis', 'Carthage', 'La Goulette', 'Mornaguia', ' La Marsa', 'Sidi Bou Said'] },
    { name: 'Zaghouan', cities: ['Zaghouan', 'Bir Mcherga', ' Djebel Oust', 'El Fahs', 'Nadhour', 'Saouaf'] },
  ];
  selectedGovernorate: string = '';
  cities: string[] = [];
  updateCities() {
    const selectedGov = this.governorates.find(gov => gov.name === this.selectedGovernorate);
    if (selectedGov) {
      this.cities = selectedGov.cities;
    } else {
      this.cities = [];
    }
  }

}
