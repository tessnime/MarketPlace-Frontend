import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pickup } from 'Models/Pickup';
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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
   return this.http.post<Request>(this.urlAssignRequestDeliveryManToPickup+`${idPickup}`+'&idDeliveryMenAgency='+`${idDeliveryMan}`,r,{headers});
  }
  RetrieveRequestByAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request[]>(this.urlRetrieveRequestByAgency,{headers});
  }
  urlDeleteRequest="http://localhost:8081/RequestController/deleteRequest?id=";
  DeleteRequest(idRequest:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Request>(this.urlDeleteRequest+`${idRequest}`,{headers})
   }
   ////freelancer
   urlassignRequestDeliveryMenFreelancerandPickup="http://localhost:8081/RequestController/assignRequestDeliveryMenFreelancerandPickup?idPickup=";
   assignRequestDeliveryMenFreelancerandPickup(r:Request,idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Request>(this.urlassignRequestDeliveryMenFreelancerandPickup+`${idPickup}`,r,{headers});
   }
   RetrieveRequestByFreelancer(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request[]>("http://localhost:8081/RequestController/RetrieveRequestByFreelancer",{headers});
   }
  //seller
 urlretrieveRequestByPickup="http://localhost:8081/RequestController/retrieveRequestByPickup?idPickup=";
  retrieveRequestByPickup(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request[]>(this.urlretrieveRequestByPickup+`${idPickup}`,{headers});
  }
  urlassignRequesttoseller="http://localhost:8081/RequestController/assignRequesttoseller?idRequest=";
  assignRequesttoseller(idRequest:number,statusRequest:String,idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Request>(this.urlassignRequesttoseller+`${idRequest}`+"&status=APPROVED"+"&idPickup="+`${idPickup}`,statusRequest,{headers});
  }
  urlretrieveRequestApprovedOfPickupFreelancer="http://localhost:8081/RequestController/retrieveRequestApprovedOfPickupFreelancer";
  retrieveRequestApprovedOfPickupFreelancer(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request[]>(this.urlretrieveRequestApprovedOfPickupFreelancer,{headers});
  }
 //agency
 urlretrieveRequestApprovedOfPickupAgency="http://localhost:8081/RequestController/retrieveRequestApprovedOfPickupAgency";
 retrieveRequestApprovedOfPickupAgency(){
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  return this.http.get<Request[]>(this.urlretrieveRequestApprovedOfPickupAgency,{headers});
 }
 //Seller
 urlLastRequestCreatedForSeller="http://localhost:8081/RequestController/LastRequestCreatedForSeller";
 LastRequestCreatedForSeller(){
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  return this.http.get<Request[]>(this.urlLastRequestCreatedForSeller,{headers});
 }
 //freelancer
 urlLastRequestAssignedToFreelancer="http://localhost:8081/RequestController/LastRequestAssignedToFreelancer";
 LastRequestAssignedToFreelancer(){
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  return this.http.get<Request[]>(this.urlLastRequestAssignedToFreelancer,{headers});
 }

 //admin
 urlretriveRequests="http://localhost:8081/RequestController/retriveRequests";
 retriveRequests(){
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  return this.http.get<Request[]>(this.urlretriveRequests,{headers});
 }
 //freelancer
 urlRetrieveRequestOfFreelancer="http://localhost:8081/RequestController/RetrieveRequestOfFreelancer";
 RetrieveRequestOfFreelancer(){
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  return this.http.get<Request[]>(this.urlRetrieveRequestOfFreelancer,{headers});
 }
}
