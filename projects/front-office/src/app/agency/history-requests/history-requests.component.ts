import { Component } from '@angular/core';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { Request } from 'Models/Request';

@Component({
  selector: 'app-history-requests',
  templateUrl: './history-requests.component.html',
  styleUrls: ['./history-requests.component.scss']
})
export class HistoryRequestsComponent {
constructor(private requestService:RequestService){}
ngOnInit(){
  this.RetrieveRequestByAgency();
}
request!:Request[];
RetrieveRequestByAgency(){
this.requestService.RetrieveRequestByAgency().subscribe(data=>{this.request=data;
this.filteredItems=data});
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
