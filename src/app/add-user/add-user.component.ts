import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Shipping } from 'Models/Shipping';
import { User } from 'Models/User';
import { ServiceAdminService } from '../service-admin.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Table} from "primeng/table";
import {UsersRole} from "../../../Models/UsersRole";
import {Subscription} from "rxjs";
import {LayoutService} from "../layoutB/service/app.layout.service";
import {Role} from "../../../Models/Role";
import { RoleType } from 'Models/Enum/RoleType';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  PDF_urlStatUser:string="http://localhost:8081/User/PDF_StatStore";
  constructor(public layoutService: LayoutService,private Service: ServiceAdminService, private http: HttpClient, private r: ActivatedRoute, private route: Router) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.initCharts();
    });
  }

  cols: any[] = [];
  barData: any;
  roles:Role[]=[];
  role:number=1;

  ngOnInit(): void {
    this.Service.getAllRoles().subscribe(data=>{this.roles=data
   
    this.Service.UsersByRole().subscribe(data=>{this.UserRole=data;
      this.initCharts();

    this.Service.getUsers().subscribe(data => {
      this.users = data;

      this.selectedFile2=null ;
    
       this.selectedFile1=null;
     
       this.selectedFile3=null;
    });
    });
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  selectedUsers: User[] = [];
  form: any = {}
  ROLE = "BUYER";
  error: string = '';
  shipping: Shipping = {
    id: 0,
    governorate: "",
    city: "",
    gpsPoint: "",
    buyer: new User(),
  };
  user: User = new User();
  
  governorates = [
    {name: 'Ariana', cities: ['Ariana', 'Raoued', 'Sidi Thabet']},
    {name: 'Béja', cities: ['Béja', 'Medjez el-Bab', 'Téboursouk', 'Testour']},
    {
      name: 'Ben Arous',
      cities: ['Ben Arous', 'Bou Mhel el-Bassatine', 'El Mourouj', 'Ezzahra', 'Hammam Chott', 'Mornag', 'Rades']
    },
    {
      name: 'Bizerte',
      cities: ['Bizerte', 'Mateur', 'Menzel Bourguiba', 'Ras Jebel', 'Sejnane', 'Tinja', 'Utique', 'Zarzouna']
    },
    {name: 'Gabès', cities: ['Gabès', 'El Hamma', 'Ghannouch', 'Matmata', 'Métouia', 'Nouvelle Matmata']},
    {
      name: 'Gafsa',
      cities: ['Gafsa', 'El Ksar', 'Ksar Ghilane', 'Mdhilla', 'Métlaoui', 'Redeyef', 'Sened', 'Sidi Aïch']
    },
    {
      name: 'Jendouba',
      cities: ['Jendouba', 'Aïn Draham', 'Balta-Bou Aouane', 'Bou Salem', 'Fernana', 'Ghardimaou', 'Oued Mliz', 'Tabarka']
    },
    {
      name: 'Kairouan',
      cities: ['Kairouan', 'Alaa', 'Bou Hajla', 'Chebika', 'Haffouz', 'Oueslatia', 'Sbikha', 'Sidi Bou Ali']
    },
    {
      name: 'Kasserine',
      cities: ['Kasserine', 'Sbeitla', 'Thala', 'Foussana', 'Haïdra', 'Hidra', 'Jedelienne', 'Feriana', 'El Ayoun']
    },
    {name: 'Kébili', cities: ['Kébili', 'Douz', 'Faouar', 'Kébili Nord', 'Souk Lahad']},
    {
      name: 'Le Kef',
      cities: ['Le Kef', 'Dahmani', 'Kalâat Khasba', 'Nebeur', 'Sakiet Sidi Youssef', 'Sers', 'Tajerouine', 'Kalaat Senan']
    },
    {
      name: 'Mahdia',
      cities: ['Mahdia', 'Bou Merdes', 'Chebba', 'El Jem', 'Essouassi', 'Hebira', 'Ksour Essef', 'Melloulèche', 'Ouled Chamekh', 'Souassi']
    },
    {name: 'Manouba', cities: ['Manouba', 'Borj El Amri', 'Douar Hicher', 'Mornaguia', 'Oued Ellil', 'Tébourba']},
    {
      name: 'Sousse',
      cities: ['Sousse', 'Akouda', 'Bouficha', 'Mornaguia', 'Enfidha', 'Hammam Sousse', 'Hergla', 'Kalâa Kebira', 'Kalâa Seghira ', 'Kondar', 'Messaadine', 'Msaken', 'Sidi Bou Ali', 'Sidi El Heni', 'Sousse Jaouhara', 'Sousse Medina', 'Sousse Riadh', 'Sousse Sidi Abdelhamid']
    },
    {name: 'Tunis', cities: ['Tunis', 'Carthage', 'La Goulette', 'Mornaguia', ' La Marsa', 'Sidi Bou Said']},
    {name: 'Zaghouan', cities: ['Zaghouan', 'Bir Mcherga', ' Djebel Oust', 'El Fahs', 'Nadhour', 'Saouaf']},
  ];
  governorates1 = [
    {name: 'Ariana', code: 'Ariana'},
    {name: 'Béja', code: 'Beja'},
    {name: 'Ben Arous', code: 'Ben Arous'},
    {name: 'Bizerte', code: 'Ben Arous'},
    {name: 'Gabès', code: 'Ben Arous'},
    {name: 'Gafsa', code: 'Ben Arous'},
    {name: 'Jendouba', code: 'Ben Arous'},
    {name: 'Kairouan', code: 'Ben Arous'},
    {name: 'Kasserine', code: 'Ben Arous'},
    {name: 'Kébili', code: 'Ben Arous'},
    {name: 'Le Kef', code: 'Ben Arous'},
    {name: 'Mahdia', code: 'Ben Arous'},
    {name: 'Manouba', code: 'Ben Arous'},
    {name: 'Sousse', code: 'Ben Arous'},
    {name: 'Tunis', code: 'Ben Arous'},
    {name: 'Zaghouan', code: 'Ben Arous'},
  ];
  shipping1!: Shipping;
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

  selectedFile1!: File | null | undefined;

  onUploadImage1() {
    if(this.selectedFile1!=null)
    this.Service.upload(this.selectedFile1).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  selectedFile2!: File | null | undefined;

  onUploadImage2() {
    if(this.selectedFile2!=null)
    this.Service.upload(this.selectedFile2).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  selectedFile3!: File | null | undefined;

  onUploadImage3() {
    if(this.selectedFile3!=null)
    this.Service.upload(this.selectedFile3).subscribe(
      response => {
        console.log(response);
      }
    );
  }


  updateUser() {
    this.onUploadImage1();
    this.onUploadImage2();
    this.onUploadImage3();
    // @ts-ignore
    this.user.justification = this.selectedFile2.name;
    // @ts-ignore
    this.user.image = this.selectedFile1.name;
    // @ts-ignore
    this.user.brandLogo = this.selectedFile3.name;
    // @ts-ignore
    this.Service.adduser(this.user,this.user.role.id).subscribe(() => {
    })
  }

  handleFileInput1(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile1 = inputElement.files?.item(0);
  }

  handleFileInput2(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile2 = inputElement.files?.item(0);
  }

  handleFileInput3(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile3 = inputElement.files?.item(0);
  }

  users: User[] = []

  saveUser(t7: NgForm) {
    if(this.selectedFile1!=null)
    {
    this.onUploadImage1();
        // @ts-ignore
    this.user.image = this.selectedFile1.name;
    }

    if( this.selectedFile2!=null)
    {
      this.onUploadImage2();
      // @ts-ignore
      this.user.justification = this.selectedFile2.name;
    }  

    if(this.selectedFile3!=null)
    {
        this.onUploadImage3();
        // @ts-ignore
        this.user.brandLogo = this.selectedFile3.name;
    }
    this.user.governorate = t7.controls["governorate"].value;
    this.user.city = t7.controls["city"].value;
    this.Service.adduser(this.user, this.role).subscribe(() => {
    });
  }


  deleteUser(id: number) {
    this.Service.deleteUser(id).subscribe({})
    this.Service.getUsers();

  }


  productDialog: boolean = false;
  productDialogAdd: boolean = false;
  NewUser: User = new User();

  editUser(user: User) {
    this.user = {...user};

    this.NewUser = this.user;
    this.productDialog = true;
  }

  AddUser() {
    this.user = new User();
    this.productDialogAdd = true;
  }


  @Input() options: any;
  pieData: any;

  polarData: any;

  barOptions: any;

  UserRole: UsersRole[] = [];

  SELLER:number=0;
  BUYER:number=0;
  DELIVERYMEN:number=0;
  MODERATOR:number=0;
  TECHNICALSUPPORT:number=0;
  DELIVERYAGENCY:number=0;
  AFTERSALESSUPPORT:number=0;
  SUPPLIER:number=0;

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.barData = {
      labels: this.UserRole.map(items => items.role),
      datasets: [
        {
          label: 'Number of Users',
          backgroundColor: documentStyle.getPropertyValue('--secondary-500'),
          borderColor: documentStyle.getPropertyValue('--secondary-500'),
          data: this.UserRole.map(items => items.nb)
        }
      ]
    };

    this.barOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 100
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
      }
    };
    for(let i=0;i<this.barData.labels.length;i++)
    {
      if(this.barData.labels[i]=="TECHNICALSUPPORT")
        this.TECHNICALSUPPORT=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="AFTERSALESSUPPORT")
        this.AFTERSALESSUPPORT=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="SUPPLIER")
        this.SUPPLIER=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="DELIVERYAGENCY")
        this.DELIVERYAGENCY=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="BUYER")
        this.BUYER=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="SELLER")
        this.SELLER=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="MODERATOR")
        this.MODERATOR=this.barData.datasets[0].data[i];

      if(this.barData.labels[i]=="DELIVERYMEN")
        this.DELIVERYMEN=this.barData.datasets[0].data[i];

    }
  }

  subscription: Subscription;

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


