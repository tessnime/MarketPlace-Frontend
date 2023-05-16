import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {claimStatsModel} from "../../../../Models/ClaimStatsModel";
import {Observable} from "rxjs";
import {ClaimSav} from "../../../../Models/ClaimSav";
import { BadWords } from 'Models/BadWords';
import { GoodFeelings } from 'Models/GoodFeelings';
import { BadFeelings } from 'Models/BadFeelings';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {

  constructor(public http:HttpClient) { }

  claimStats="http://localhost:8081/claims/statsClaim"

  options = {withCredentials: true};
  option = {withCredentials: true, responseType: 'text'};
  option1 = {withCredentials: true, responseType: 'json'};
  ClaimStats()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<claimStatsModel[]>(this.claimStats,{headers});
  }

  getClaims(): Observable<ClaimSav[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ClaimSav[]>('http://localhost:8081/claims/GetAllClaims',{headers});
  }


  updateClaim="http://localhost:8081/claims/modifyclaimstatus?id="

UpdateClaim(status:string,id:number)
{
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.put(this.updateClaim+`${id}`+'&newStatus='+`${status}`,null,{headers})
}

// New methods

addNewGoodFeelings(addgood: GoodFeelings): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.post('http://localhost:8081/GoodFeelings/addNewGoodFeelings',addgood, {headers});
}

updateGoodFeelings(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.put('http://localhost:8081/GoodFeelings/updateGoodFeelings', null, {headers});
}

getAllGoodFeelings(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.get('http://localhost:8081/GoodFeelings/getAllGoodFeelings', {headers});
}

deleteGoodFeelings(id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.delete('http://localhost:8081/GoodFeelings/deleteGoodFeelings?id=' + id, {headers});
}

updateBadWord(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.put('http://localhost:8081/BadWords/updateBadWord', null, {headers});
}

addBadWord(add:BadWords): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.post('http://localhost:8081/BadWords/addBadWord', add, {headers});
}

getAllBadWords(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.get('http://localhost:8081/BadWords/getAllBadWords', {headers});
}

deleteBadWord(id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.delete('http://localhost:8081/BadWords/deleteBadWord?id=' + id, {headers});
}

updateBadFeelings(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.put('http://localhost:8081/BadFeelings/updateBadFeelings', null, {headers});
}

addNewBadFeelings(addbad:BadFeelings): Observable<any> {

  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.post('http://localhost:8081/BadFeelings/addNewBadFeelings', addbad, {headers});
}

getAllBadFeelings(): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });  return this.http.get('http://localhost:8081/BadFeelings/getAllBadFeelings', {headers});
}

deleteBadFeelings(id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.delete('http://localhost:8081/BadFeelings/deleteBadFeelings?id=' + id, {headers});
}
}
