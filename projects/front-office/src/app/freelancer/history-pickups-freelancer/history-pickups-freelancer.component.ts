import { Component } from '@angular/core';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { Request } from 'Models/Request';

@Component({
  selector: 'app-history-pickups-freelancer',
  templateUrl: './history-pickups-freelancer.component.html',
  styleUrls: ['./history-pickups-freelancer.component.scss']
})
export class HistoryPickupsFreelancerComponent {
constructor(private requestService:RequestService){}
ngOnInit(){
  this.RetrieveRequestOfFreelancer();
}
request!:Request[];
RetrieveRequestOfFreelancer(){
  this.requestService.RetrieveRequestOfFreelancer().subscribe(data=>{this.request=data;this.filteredItems = data;});
}
query: string = '';
  filteredItems: Request[] = [];

  search(event: Event) {
    this.query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.request.filter(item =>
      item.pickup.codePickup.toLowerCase().includes(this.query)
    );
  }
}
