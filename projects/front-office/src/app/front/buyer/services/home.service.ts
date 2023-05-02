import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";


import {Order} from "../../../../../../../Models/Order";
import {Product} from "../../../../../../../Models/Product";
import {EventModel} from "../../../../../../../Models/EventModel";
import {Shipping} from "../../../../../../../Models/Shipping";
import {ProductCategory} from "../../../../../../../Models/ProductCategory";
import {CustemerModel} from "../../../../../../../Models/CustemerModel";
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) {
  }



  GetBasketProduct = 'http://localhost:8081/order/GetBasketProduct';
  GetBasketOrder = 'http://localhost:8081/order/GetBasketOrder';
  DeleteBasket = 'http://localhost:8081/order/DeleteBasket';
  UpdateQuantityInOrder = 'http://localhost:8081/order/UpdateQuantityInOrder?refProuct=&quantity=';
  DeleteProductFromOrder = 'http://localhost:8081/order/DeleteProductFromOrder?refProduct=';
  DisplayAllLastVued = 'http://localhost:8081/LastVued/DisplayAllLastVued';
  displayRunningEvents = 'http://localhost:8081/Event/displayRunningEvents'
  GetProductsForEvent = 'http://localhost:8081/Event/GetProductsForEvent?id='
  AddShippingToCard = 'http://localhost:8081/order/AddShippingToCard'
  CreateNewVued = 'http://localhost:8081/LastVued/CreateNewVued?id=';
  GetProductById = 'http://localhost:8081/order/GetProductById?id=';
  AddProductToOrder = 'http://localhost:8081/order/AddProductToOrder'
  Loyaltypoints = 'http://localhost:8081/Loyalty/points'
  LoyaltyToken = 'http://localhost:8081/Loyalty/LoyaltyToken'
  GetAllProductCategories = 'http://localhost:8081/productCategory/GetAllProductCategories'
  GetAllUserShippings = 'http://localhost:8081/buyerShipping/getAllUserShippings?id=1';
  CreateNewShipping = 'http://localhost:8081/buyerShipping/CreateNewShipping'
  DeleteShippingAdresse='http://localhost:8081/buyerShipping/DeleteShippingAdresse?id='
  Payements='http://localhost:8081/order/payements'
  EndPaimentProcess='http://localhost:8081/order/EndPaimentProcess?paymentType=CASH_ON_DELIVERY&cardPaiment=false'
  GetAllOrdersByUserId='http://localhost:8081/order/getAllOrdersByUserId'
  urlsession='http://localhost:8081/User/session';

  SessionReteurn='http://localhost:8081/order/sessionReteurn'
  AddOrder='http://localhost:8081/order/AddOrder'




    options = {withCredentials: true};
  option = {withCredentials: true, responseType: 'text'};
  option1 = {withCredentials: true, responseType: 'json'};


  loadPosts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ProductQuantity[]>(this.GetBasketProduct, {headers});
  }

  loadOrder() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Order>(this.GetBasketOrder, {headers});
  }

  deleteCart() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Order>(this.DeleteBasket, {headers});
  }

  updateQuantity(ref: string, quan: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<ProductQuantity>('http://localhost:8081/order/UpdateQuantityInOrder?refProuct=' + `${ref}` + '&quantity=' + `${quan}`, null, {headers})
  }

  deleteProductFromOrder(ref: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<ProductQuantity>('http://localhost:8081/order/DeleteProductFromOrder?refProduct=' + `${ref}`, {headers});
  }

  searchProduct(maxprix: number, minprix: number, nameProd: string, mark: string, categorie: string, filtre: String) {

    let url = 'http://localhost:8081/order/ProductResearch?maxPrix=' + `${maxprix}` + '&minPrix=' + `${minprix}`
    if (nameProd.length > 0)
      url = url + '&nameProduct=' + `${nameProd}`;

    if (categorie.length > 0)
      url = url + '&categorie=' + `${categorie}`;
    if (mark.length > 0)
      url = url + '&mark=' + `${mark}`;

    url = url + '&productFiltre=' + `${filtre}`;


    return this.http.get<Product[]>(url, this.options);

  }

  lastVude() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Product[]>(this.DisplayAllLastVued, {headers});
  }

  eventDisplay() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<EventModel[]>(this.displayRunningEvents, this.options);
  }

  productsInEvents(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Product[]>(this.GetProductsForEvent + `${id}`, {headers});
  }

  addShippingToOrder(ship: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Order>(this.AddShippingToCard, ship, {headers});
  }

  addNewLastVuedProduct(idp: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.CreateNewVued + `${idp}`, null, {headers})
  }

  getProductById(idp: number) {
    return this.http.get<Product>(this.GetProductById + `${idp}`, this.options);
  }

  addProductToOrder(pq: ProductQuantity) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(this.AddProductToOrder, pq, {headers})
  }

  lyaltypoints() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>(this.Loyaltypoints, {headers})
  }

  loyaltyToken() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers, responseType: 'text' };
    // @ts-ignore
    return this.http.get(this.LoyaltyToken, options);
  }

  getAllProductCategories() {

    return this.http.get<ProductCategory[]>(this.GetAllProductCategories, this.options)
  }

  getAllUserShippings() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Shipping[]>(this.GetAllUserShippings, {headers})
  }

  createNewShipping(s: Shipping) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Shipping>(this.CreateNewShipping, s, {headers});
  }

  deleteShippingAdresse(id:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(this.DeleteShippingAdresse + `${id}`, {headers})
  }

  payementsStripe(cs:CustemerModel)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // @ts-ignore
    return this.http.post<CustemerModel>(this.Payements,cs,{headers});
  }

  endPaimentProcess()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(this.EndPaimentProcess,null,{headers});
  }

  getAllOrdersByUserId()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Order[]>(this.GetAllOrdersByUserId,{headers})
  }

  sessionReteurn()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // @ts-ignore
    return this.http.get<boolean>(this.SessionReteurn,{headers})
  }

  addOrder(order:Order)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.AddOrder,order,{headers})
  }

getSession(){
  //@ts-ignore
  return this.http.get<boolean>(this.urlsession,this.options)
}

}
