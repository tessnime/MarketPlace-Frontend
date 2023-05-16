import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'Models/Product';
import { SupplierRequest } from 'Models/SupplierRequest';
import { User } from 'Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierRequestService {
  url2 = "http://localhost:8081/supplier/";

  constructor(private http: HttpClient) { }

  accpetRequestBySeller(id: SupplierRequest): Observable<SupplierRequest> {
    const options={withCredentials:true};



    return this.http.put<SupplierRequest>("http://localhost:8081/supplier/acceptRequest", id, options);
  }
  ProductsOutOfStock():Observable<Product[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Product[]>("http://localhost:8081/supplier/ProductsOutOfStock", {headers});

  }
  createRequest(supp:SupplierRequest,idP:number):Observable<SupplierRequest>{
    const options={withCredentials:true};


    return this.http.post<SupplierRequest>("http://localhost:8081/supplier/createRequest?productId="+idP,supp, options);

  }
  ConfirmDelivery(id:number){
 const options={withCredentials:true};

    return this.http.put("http://localhost:8081/supplier/ConfirmDelivery?supplierRequestId="+id, options);

  }

  supplierRequestss(user:number):Observable<SupplierRequest[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<SupplierRequest[]>("hhttp://localhost:8081/supplier/supplierRequestss?supplier="+user, {headers});


  }
}
