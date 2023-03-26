import { Component } from '@angular/core';
import {Product} from "../../../../../../../Models/Product";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import { EventModel} from "../../../../../../../Models/EventModel";


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
    this.lastVued();
    this.eventDisplay();
  }

  isLoading = false;
  loadData() {
    this.isLoading = true;
    // simulate loading data
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  request!:Product[];
  Vued!:Product[];
  ev!:EventModel[];
  private e: EventModel | undefined;


  searchProduct(maxprix:number,minprix:number,nameProd:string,mark:string,categorie:string,filtre:String)
  {
    this.home.searchProduct(maxprix,minprix,nameProd,mark,categorie,filtre).subscribe(data =>{this.request=data})
  }
  lastVued()
  {
  this.home.lastVude().subscribe(data =>{this.Vued=data});
  }

  eventDisplay() {
    this.home.eventDisplay().subscribe(data => {this.ev = data;})};
}
