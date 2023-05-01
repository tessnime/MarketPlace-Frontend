import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'Models/Role';
import { Shipping } from 'Models/Shipping';
import { User } from 'Models/User';
import { LoginUserService } from '../Services/login-user.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class SellerComponent implements OnInit {
  form:any ={}
  error:string = '';
  shipping: Shipping = {
    id: 0,
    governorate: "",
    city: "",
    gpsPoint: "",
    buyer:new User(),
  };
  user:  User  = new User();
  Gender=['MAN','WOMEN','Other']
  passwordPattern="[a-zA-Z0-9]*"
  phonePattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
  cinPattern = '^[0-9]{8}$';

  constructor( private LoginUserService:LoginUserService ,private router:Router ,private route: ActivatedRoute){

  }

idRole=2;
idUser!:number;
rolefinal!:Role;

  ngOnInit(): void {
    
  }
  RoleF!:Role;
  Create(t7:NgForm){
    console.log(this.user);
  
    this.user.governorate=t7.controls["governorate"].value;
    this.user.city=t7.controls["city"].value;
    this.LoginUserService.register(this.user,this.idRole).subscribe(()=>{
     
   
     alert("Successfully User is register")
    },
    ()=>alert("Sorry User not register"));
   
  }


  nagivateToSeller(){
    this.router.navigate(['/user/seller']);
  }

  nagivateToDeliveryMen(){
    this.router.navigate(['/user/deliveryMen']);
  }

  nagivateToDeliveryAngency(){
    this.router.navigate(['/user/deliveryAgency']);
  }
  nagivateToSupplier(){
    this.router.navigate(['/user/supplier']);
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
  shipping1!:Shipping;
  selectedGovernorate: string = '';
  cities: string[] = [];
  updateCities() {
    const selectedGov = this.governorates.find(gov => gov.name === this.shipping.governorate);
    if (selectedGov) {
      this.cities = selectedGov.cities;
    } else {
      this.cities = [];
    }
  }

 
}