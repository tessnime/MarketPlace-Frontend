import { Component, OnInit } from '@angular/core';
import { Store } from 'Models/Store';
import { StoreServiceService } from '../services/store-service.service';
import { UserService } from '../services/user.service';
import { User } from 'Models/User';


@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit{
  constructor(private storeservice:StoreServiceService,private userservice:UserService){}
  ngOnInit(): void {
    this.userservice.getUserLoggidIn().subscribe(user=>{this.user=user;console.log(user);this.storeservice.getStoresByUser(this.user.id).subscribe(stores=>{this.stores=stores;console.log(stores)});});
      
    }
stores:Store[]=[];
user!:User;
  carouselResponsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
}
