import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {claimStatsModel} from "../../../../Models/ClaimStatsModel";
import {Observable} from "rxjs";
import {ClaimSav} from "../../../../Models/ClaimSav";

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
    return this.http.get<claimStatsModel[]>(this.claimStats,this.options);
  }

  getClaims(): Observable<ClaimSav[]> {
    const options={withCredentials:true};
    return this.http.get<ClaimSav[]>('http://localhost:8081/claims/GetAllClaims',options);
  }


  updateClaim="http://localhost:8081/claims/modifyclaimstatus?id="

UpdateClaim(status:string,id:number)
{
  const options={withCredentials:true};
  return this.http.put(this.updateClaim+`${id}`+'&newStatus='+`${status}`,null,options)
}

}
