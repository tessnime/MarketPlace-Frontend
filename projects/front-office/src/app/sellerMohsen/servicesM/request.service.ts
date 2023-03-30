import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from 'Models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  ////Agency
  urlAssignRequestDeliveryManToPickup="http://localhost:8081/RequestController/assignRequestDeliveryAgencyandPickup?idPickup=";
  urlRetrieveRequestByAgency="http://localhost:8081/RequestController/RetrieveRequestByAgency";


  AssignRequestDeliveryManToPickup(r:Request,idDeliveryMan:number,idPickup:number){
    const options = { withCredentials: true };
   return this.http.post<Request>(this.urlAssignRequestDeliveryManToPickup+`${idPickup}`+'&idDeliveryMenAgency='+`${idDeliveryMan}`,r,options);
  }
  RetrieveRequestByAgency(){
    const options = { withCredentials: true };
    return this.http.get<Request[]>(this.urlRetrieveRequestByAgency,options);
  }
  urlDeleteRequest="http://localhost:8081/RequestController/deleteRequest?id=";
  DeleteRequest(idRequest:number){
    const options = { withCredentials: true };
    return this.http.delete<Request>(this.urlDeleteRequest+`${idRequest}`,options)
   }
   ////freelancer
   urlassignRequestDeliveryMenFreelancerandPickup="http://localhost:8081/RequestController/assignRequestDeliveryMenFreelancerandPickup?idPickup=";
   assignRequestDeliveryMenFreelancerandPickup(r:Request,idPickup:number){
    const options = { withCredentials: true };
    return this.http.post<Request>(this.urlassignRequestDeliveryMenFreelancerandPickup+`${idPickup}`,r,options);
   }
   RetrieveRequestByFreelancer(){
    const options = { withCredentials: true };
    return this.http.get<Request[]>("http://localhost:8081/RequestController/RetrieveRequestByFreelancer",options);
   }


}
