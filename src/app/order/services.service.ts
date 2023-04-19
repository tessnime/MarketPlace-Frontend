import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RankGouvernoratOrderData} from "../../../Models/RankGouvernoratOrderData";
import { saveAs } from 'file-saver';
import {OrdersRankUsers} from "../../../Models/OrdersRankUsers";
import {StatusTypeStat} from "../../../Models/StatusTypeStat";
import {Order} from "../../../Models/Order";
import {EventModel} from "../../../Models/EventModel";


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
    return this.http.get<RankGouvernoratOrderData[]>(this.RankGouvernoratByOrdersNumber, this.options);
  }

  orderRankForUsersByStatusType()
  {
    return this.http.get<OrdersRankUsers[]>(this.OrderRankForUsersByStatusType,this.options);
  }

  orderStatsByStatusType()
  {
    return this.http.get<StatusTypeStat>(this.OrderStatsByStatusType,this.options);
  }

  getBestUserOrders()
  {
    return this.http.get<Order[]>(this.GetBestUserOrders,this.options);
  }

  displayAllEvents()
  {
    return this.http.get<EventModel[]>(this.DisplayAllEvents,this.options);
  }
  deleteEvent(id:number)
  {
    return this.http.delete(this.DeleteEvent+`${id}`,this.options)
  }

  upload(image: File | null | undefined)
  {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', image, image.name);
    return this.http.post(this.Upload,formData,this.options);
  }

  addEvent(event:EventModel)
  {
    return this.http.post(this.AddEvent,event,this.options)
  }
}
