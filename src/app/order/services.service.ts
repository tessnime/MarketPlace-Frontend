import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RankGouvernoratOrderData} from "../../../Models/RankGouvernoratOrderData";
import { saveAs } from 'file-saver';
import {OrdersRankUsers} from "../../../Models/OrdersRankUsers";
import {StatusTypeStat} from "../../../Models/StatusTypeStat";
import {Order} from "../../../Models/Order";
import {EventModel} from "../../../Models/EventModel";
import {KeyWords} from "../../../Models/KeyWords";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  RankGouvernoratByOrdersNumber = "http://localhost:8081/orderStats/RankGouvernoratByOrdersNumber"
  OrderRankForUsersByStatusType = "http://localhost:8081/orderStats/OrderRankForUsersByStatusType"
  OrderStatsByStatusType="http://localhost:8081/orderStats/OrderStatsByStatusType"
  GetBestUserOrders="http://localhost:8081/orderStats/GetBestUserOrders"
  DisplayAllEvents="http://localhost:8081/Event/displayAllEvents"
  DeleteEvent="http://localhost:8081/Event/deleteEvent?id="
  Upload="http://localhost:8081/Event/upload"
  AddEvent="http://localhost:8081/Event/addEvent"


    options = {withCredentials: true};
  option = {withCredentials: true, responseType: 'text'};
  option1 = {withCredentials: true, responseType: 'json'};


  rankGouvernoratByOrdersNumber() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<RankGouvernoratOrderData[]>(this.RankGouvernoratByOrdersNumber, {headers});
  }

  orderRankForUsersByStatusType()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<OrdersRankUsers[]>(this.OrderRankForUsersByStatusType,{headers});
  }

  orderStatsByStatusType()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<StatusTypeStat>(this.OrderStatsByStatusType,{headers});
  }

  getBestUserOrders()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Order[]>(this.GetBestUserOrders,{headers});
  }

  displayAllEvents()
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<EventModel[]>(this.DisplayAllEvents,{headers});
  }
  deleteEvent(id:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(this.DeleteEvent+`${id}`,{headers})
  }

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
    return this.http.post(this.Upload,formData,{headers});
  }

  addEvent(event:EventModel)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(this.AddEvent,event,{headers})
  }

  deleteKeywordFromEvent(idEv:number,idKey:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete('http://localhost:8081/Event/deleteKeywordFromEvent?eventId='+`${idEv}`+'&keywordId='+`${idKey}`,{headers});
  }

  addKeywordToEvent(idEv:number,key:KeyWords)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post('http://localhost:8081/Event/addKeywordToEvent?id='+`${idEv}`,key,{headers})
  }
}
