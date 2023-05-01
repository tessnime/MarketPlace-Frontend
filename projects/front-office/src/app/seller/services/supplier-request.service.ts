import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'Models/Product';
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
  ProductsOutOfStock():Observable<Product[]>{
    const options = {
      withCredentials: true
    };
    return this.http.get<Product[]>("http://localhost:8081/supplier/ProductsOutOfStock", options);

  }
  createRequest(supp:SupplierRequest,idP:number):Observable<SupplierRequest>{
    const options = {
      withCredentials: true
    };
    return this.http.post<SupplierRequest>("http://localhost:8081/supplier/createRequest?productId="+idP,supp, options);

  }
}
