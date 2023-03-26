import { Component } from '@angular/core';
import {Product} from "../../../../../../../Models/Product";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class HomeComponent {
  constructor(private router : Router,private home:HomeService) {
  }
  ngOnInit()
  {
    this.searchProduct(0,0,'','','','MOST_REQUESTED');
  }
  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }
  request!:Product[];
  searchProduct(maxprix:number,minprix:number,nameProd:string,mark:string,categorie:string,filtre:String)
  {
    this.home.searchProduct(maxprix,minprix,nameProd,mark,categorie,filtre).subscribe(data =>{this.request=data})
  }


}
