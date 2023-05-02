import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaimSav } from 'Models/ClaimSav';
import { Product } from 'Models/Product';
import { Review } from 'Models/Review';
import { User } from 'Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimreviewserviceService {

  private addclaim = 'http://localhost:8081/claims/AddClaim?idProductQuantity=';
  private addreview='http://localhost:8081/Review/AddReview?id=';

getClaims(): Observable<ClaimSav[]> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<ClaimSav[]>('http://localhost:8081/claims/GetAllClaims',{headers});
}
  constructor(private http: HttpClient) {}

  addClaim(claim: ClaimSav,idProductuantity:number): Observable<ClaimSav> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });    return this.http.post<ClaimSav>(this.addclaim+`${idProductuantity}`, claim,{headers});
  }

  updateClaim(claim: ClaimSav): Observable<ClaimSav> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });    return this.http.put<ClaimSav>('http://localhost:8081/claims/UpdateClaim', claim, {headers});
  }
  private deleteclaim = 'http://localhost:8081/claims/DeleteClaim?id=';
  private getClaimsById='http://localhost:8081/claims/GetClaimsById';
  private getreviews='http://localhost:8081/Review/GetAllReviews';

  getClaimById(id: number): Observable<ClaimSav> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });    const url = 'http://localhost:8081/claims/GetClaimsById?id=';
    return this.http.get<ClaimSav>(url+`${id}`,{headers});
  }

  deleteClaim(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.deleteclaim}${id}`;
    return this.http.delete(url, {headers});
  }

  getAllReviews(): Observable<Review[]> {

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Review[]>('http://localhost:8081/Review/GetAllReviews', {headers});

  }

  addReview(review:Review,idProduct:number,rate:number): Observable<Review> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });    return this.http.post<Review>(this.addreview+`${idProduct}`+'&rating='+`${rate}`,review,{headers});
  }

  GetProductById = 'http://localhost:8081/order/GetProductById?id=';

  getProductById(idp: number): Observable<Product> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });    return this.http.get<Product>(this.GetProductById + `${idp}`,{headers});
  }

  getSession='http://localhost:8081/Review/Getsession'

  getUserSession(): Observable<User>
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User>(this.getSession,{headers});
  }

  deleteRev='http://localhost:8081/Review/DeleteReview?id='
  deleteReview(id :number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });  return this.http.delete(this.deleteRev+`${id}`,{headers})
  }

  Upload="http://localhost:8081/claims/upload"
  upload(image: File | null | undefined)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', image, image.name);
    return this.http.post(this.Upload,formData, {headers});
  }

  getReviewsByProductId(productId:number): Observable<Review[]> {

    const options = { withCredentials: true };

    return this.http.get<Review[]>(this.getreviewsbyProductId+`${productId}`, options);



  }
  getreviewsbyProductId="http://localhost:8081/Review/getreviewsbyProductId?productId="
}
