import { Component } from '@angular/core';
import {Product} from "../../../../../../../Models/Product";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import { EventModel} from "../../../../../../../Models/EventModel";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router : Router,private home:HomeService) {
  }

  getFloor(integer: number): number {
    return Math.floor(integer);
  }
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }

  gotoDetails(id:number)
  {
    this.router.navigate(["/buyer/details",id]);
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
  ev!:EventModel[];
  private e: EventModel | undefined;
  Vued!:Product[];

  lastVued()
  {
    this.home.lastVude().subscribe(data =>{this.Vued=data});
  }

  searchProduct(maxprix:number,minprix:number,nameProd:string,mark:string,categorie:string,filtre:String)
  {
    this.home.searchProduct(maxprix,minprix,nameProd,mark,categorie,filtre).subscribe(data =>{this.request=data})
  }


  eventDisplay() {
    this.home.eventDisplay().subscribe(data => {this.ev = data;})
  };

  slideLeft() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }


}
