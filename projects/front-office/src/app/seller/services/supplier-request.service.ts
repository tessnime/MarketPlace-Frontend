import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierRequest } from 'Models/SupplierRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierRequestService {
  url2 = "http://localhost:8081/supplier/";

  constructor(private http: HttpClient) { }

  accpetRequestBySeller(id: SupplierRequest): Observable<SupplierRequest> {
    const options = {
      withCredentials: true
    };

    return this.http.put<SupplierRequest>("http://localhost:8081/supplier/acceptRequest", id, options);
  }
}
