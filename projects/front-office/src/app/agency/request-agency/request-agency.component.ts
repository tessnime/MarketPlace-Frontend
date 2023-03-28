import { Component } from '@angular/core';
import { Request } from 'Models/Request';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-request-agency',
  templateUrl: './request-agency.component.html',
  styleUrls: ['./request-agency.component.scss']
})
export class RequestAgencyComponent {
  constructor(private requestService:RequestService){}
  request!:Request[];
 ngOnInit(){
  this.retrieveRequestByAgency();
 }

  retrieveRequestByAgency(){
    this.requestService.RetrieveRequestByAgency().subscribe(data=>{this.request=data});
  }
}
