import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../Services/profile-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'Models/User';
import { CookieService } from 'ngx-cookie-service';
import { Shipping } from 'Models/Shipping';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-affichage-profile',
  templateUrl: './affichage-profile.component.html',
  styleUrls: ['./affichage-profile.component.scss']
})

export class AffichageProfileComponent implements OnInit {
 
  constructor(private serviceProfile: ProfileServiceService,private router:Router ,private route: ActivatedRoute , private cookieService: CookieService){

  } 
  user!:User;
  ngOnInit(): void {
    this.serviceProfile.GetUserBySession().subscribe(data =>{this.user=data}) 
  }

  form:any ={}
 
  shipping: Shipping = {
    id: 0,
    governorate: "",
    city: "",
    gpsPoint: "",
    buyer:new User(),
  };
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
 
 update(_t7: NgForm){
  this.serviceProfile.UpdateUser(this.form.user).subscribe();
 }



}
