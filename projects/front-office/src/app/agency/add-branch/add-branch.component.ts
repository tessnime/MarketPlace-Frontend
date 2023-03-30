import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgencyBranch } from 'Models/AgencyBranch';
import { GenderType } from 'Models/Enum/GenderType';
import { RoleType } from 'Models/Enum/RoleType';
import { Role } from 'Models/Role';
import { User } from 'Models/User';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent {
  constructor(private agencyService:AgencyService,private r:Router){}


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

addForm(t7:NgForm){
  this.agencyBranch.brandName=t7.controls["BranchName"].value;
  this.agencyBranch.governorate=t7.controls["governorate"].value;
  this.agencyBranch.city=t7.controls["city"].value;
  this.agencyService.assignBranchToAgency(this.agencyBranch).subscribe(()=>{this.r.navigateByUrl('/agency/MyBranch');});
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
