import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shipping } from 'Models/Shipping';
import { User } from 'Models/User';
import { LoginUserService } from '../Services/login-user.service';
import { NgForm } from '@angular/forms';
import { Role } from 'Models/Role';
import { RoleType } from 'Models/Enum/RoleType';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class RegisterComponent  implements OnInit{
  role1!:Role;
  getRoleByType(role:RoleType){
    this.LoginUserService.getRoleByType(role).subscribe(data=>{this.role1=data});
 }
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



  constructor( private LoginUserService:LoginUserService ,private router:Router ,private route: ActivatedRoute){

  }

idRole!:number;
idUser!:number;
rolefinal!:Role;
  ngOnInit(): void {
   this.getRoleByType(this.ROLE as RoleType
   );
  }
  roles!:RoleType.SELLER;
  roled!:RoleType.DELIVERYMEN;
  roless!:RoleType.SUPPLIER;
  roleDa!:RoleType.DELIVERYAGENCY;
  ROLEroleType: RoleType = RoleType.BUYER;
  ROLE: string = this.ROLEroleType.toString();
  setRoleTo(role :string ) {
    this.ROLE==role;
  }
  RoleF!:Role;
  Create(t7:NgForm){
    console.log(this.user);
   // this.setRoleTo(this.ROLE);
  /* this.idRole=this.route.snapshot.params['idRole'];
   this.idUser=this.route.snapshot.params['idUser'];*/
    this.user.governorate=t7.controls["governorate"].value;
    this.user.city=t7.controls["city"].value;
    this.LoginUserService.register(this.user,this.role1.id).subscribe(()=>{
   
     alert("Successfully User is register")
    },
    ()=>alert("Sorry User not register"));
   /* 
    affecteRole(idRole:number,idUser:number):Observable<any>{
      //@ts-ignore
      return this.http.post<any>('http://localhost:8081/User/affectRole' `${idRole}` + '&idUser=' + `${idUser}`,httpOptions1)
    }*/
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
