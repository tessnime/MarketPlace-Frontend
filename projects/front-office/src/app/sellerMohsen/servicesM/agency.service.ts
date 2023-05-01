import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }
  //agency Delivery Men
  //url
urlretrieveDeliveryMenTOPickup="http://localhost:8081/AgencyDeliveryMan/RetrieveDeliverymenByagencyWhenThegovernorateOfPickupisSomeGovernorateofdeliverymen?idPickup=";

  retrieveDeliveryMenTOPickup(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     return this.http.get<AgencyDeliveryMan[]>(this.urlretrieveDeliveryMenTOPickup+`${idPickup}`,{headers});
  }
   assignBranchToAgency(agencyBranch:AgencyBranch){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
   return this.http.post<AgencyBranch>('http://localhost:8081/AgencyBranch/AssignBranchManByDeliveryAgency',agencyBranch,{headers});
   }
   retrieveAgencyBranchOfUser(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<AgencyBranch[]>("http://localhost:8081/AgencyBranch/retrieveAgencyBranchOfUser",{headers});
   }
   urlAssignAgencyDeliveryManByBranch="http://localhost:8081/AgencyDeliveryMan/AssignAgencyDeliveryManByBranch?Id=";
   AssignAgencyDeliveryManByBranch(adm:AgencyDeliveryMan,idBranch:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<AgencyDeliveryMan>(this.urlAssignAgencyDeliveryManByBranch+`${idBranch}`,adm,{headers});
   }
   urlcountDeliveryMenInAgency="http://localhost:8081/AgencyBranch/countDeliveryMenInAgency?idBranch=";
   countDeliveryMenInAgency(idBranch:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>(this.urlcountDeliveryMenInAgency+`${idBranch}`,{headers})
   }
   urldeleteAgencyBranch="http://localhost:8081/AgencyBranch/DeleteAgencyBranch?id=";
   deleteAgencyBranch(idBranch:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<AgencyBranch>(this.urldeleteAgencyBranch+`${idBranch}`,{headers})
   }
   urlRetrieveDeliveryMenByBranch="http://localhost:8081/AgencyDeliveryMan/RetrieveDeliveryMenByBranch?idBranch=";
   RetrieveDeliveryMenByBranch(idBranch:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<AgencyDeliveryMan[]>(this.urlRetrieveDeliveryMenByBranch+`${idBranch}`,{headers});
   }
   urlcountDeliveryMenInBranch="http://localhost:8081/AgencyDeliveryMan/countDeliveryMenInBranch?idBranch=";
   countDeliveryMenInBranch(idBranch:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>(this.urlcountDeliveryMenInBranch+`${idBranch}`,{headers})
   }
   urlupdatebRANCHwithMAP="http://localhost:8081/AgencyBranch/updatebRANCHwithMAP?idBranch=";
   updatebRANCHwithMAP(idBranch:number,agencyBranch:AgencyBranch){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     return this.http.put<AgencyBranch>(this.urlupdatebRANCHwithMAP+`${idBranch}`,agencyBranch,{headers});
   }
   urlRetrieveAgencyBranch="http://localhost:8081/AgencyBranch/RetrieveAgencyBranch?id=";
   RetrieveAgencyBranch(idBranch:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<AgencyBranch>(this.urlRetrieveAgencyBranch+`${idBranch}`,{headers});
   }
  urlTopDeliveryMenByPickupDelivered="http://localhost:8081/AgencyDeliveryMan/TopDeliveryMenByPickupDelivered";
  TopDeliveryMenByPickupDelivered(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<AgencyDeliveryMan[]>(this.urlTopDeliveryMenByPickupDelivered,{headers});
  }
  urlTopDeliveryAgencyByPickupDelivered="http://localhost:8081/AgencyDeliveryMan/TopDeliveryAgencyByPickupDelivered";
  TopDeliveryAgencyByPickupDelivered(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<AgencyBranch[]>(this.urlTopDeliveryAgencyByPickupDelivered,{headers})
  }
}
