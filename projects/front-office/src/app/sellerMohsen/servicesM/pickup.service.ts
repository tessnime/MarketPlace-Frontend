import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'Models/Order';
import { Pickup } from 'Models/Pickup';
import { Product } from 'Models/Product';
import { ProductQuantity } from 'Models/ProductQuantity';
import { Shipping } from 'Models/Shipping';
import { Store } from 'Models/Store';
import { User } from 'Models/User';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private http:HttpClient) { }
  //Url Sellerer
  urlstore="http://localhost:8081/Pickup/RetrieveStoreOfUser";
  urlUser="http://localhost:8081/Pickup/getUserNOw";
  urlorder="http://localhost:8081/Pickup/retrieveOrderByseller?idStore=";
  urlGetOrderById="http://localhost:8081/Pickup/GetOrderById?IdOrder=";
  urlAddProduct="http://localhost:8081/Pickup/AssignPickupByStoreAndOrder?id=";
  urlCountPickupPending="http://localhost:8081/Pickup/countPickupSellerPendingToday";
  urlCountPickupRefunbded="http://localhost:8081/Pickup/countPickupSellerRefundedToday";
  urlCountPickupOnTheWay="http://localhost:8081/Pickup/countPickupSelleronTheWayToday";
  urlCountPickupReturned="http://localhost:8081/Pickup/countPickupSellerReturnToday";
  urlCountPickupDeliverted="http://localhost:8081/Pickup/countPickupSellerDeliveredToday";
  urlcountOrderByStoreNoPickup="http://localhost:8081/Pickup/countOrderBySellerNoPickup?idStore=";
  urlgetListProductOfOrder="http://localhost:8081/Pickup/getListProductOfOrder?idOrder=";
  urlgetSumPriceProductOfOrder="http://localhost:8081/Pickup/getSumPriceProductOfOrder?idOrder=";
  urlGetShippingByOrder="http://localhost:8081/Pickup/GetShippingByOrder?IdOrder=";
  urlGetBuyerByOrder="http://localhost:8081/Pickup/GetBuyerByOrder?IdOrder=";
  urlgetAllproductQuantity="http://localhost:8081/Pickup/getAllProductQuantity";
  urlRetrievePickupWaitingBySeller="http://localhost:8081/Pickup/retrievePickupBysellerAttent";
  urlDeletePickup="http://localhost:8081/Pickup/RemovePickup?id=";
  urlupdatePickup="http://localhost:8081/Pickup/UpdatePickup?idPikup=";
  urlGetPickupById="http://localhost:8081/Pickup/RetrievePickup?id=";
  urlGetOrderBiPickupId="http://localhost:8081/Pickup/GetOrderByPickupId?idPickup=";
  urlGetShippingByPickupId="http://localhost:8081/Pickup/GetShippingByPickupId?idPickup=";
  urlGetBuyerByPickupId="http://localhost:8081/Pickup/GetBuyerByPickupId?idPickup=";

  //component List Of Store /seller
  //FctgetStoreByUser
  getStoreByUser(){
    const options = { withCredentials: true };
    return this.http.get<Store[]>(this.urlstore,options);
    }
  countOrderByStoreNoPickup(idStore:number){
    const options = { withCredentials: true };
    return this.http.get<number>(this.urlcountOrderByStoreNoPickup+`${idStore}`,options)
  }
  getOrderByStore(id:number){
    const options = { withCredentials: true };
    return this.http.get<Order[]>(this.urlorder+`${id}`,options);
  }
  GetOrderById(idOrder:number){
    const options = { withCredentials: true };
       return this.http.get<Order>(this.urlGetOrderById+`${idOrder}`,options);
  }
  getListProductOfOrder(idOrder:number,idStore:number)
  {
    const options = { withCredentials: true };
     return this.http.get<Product[]>(this.urlgetListProductOfOrder+`${idOrder}`+'&idStore='+`${idStore}`,options);
  }
  getSumPriceProductOfOrder(idOrder:number,idStore:number)
  {
    const options = { withCredentials: true };
     return this.http.get<number>(this.urlgetSumPriceProductOfOrder+`${idOrder}`+'&idStore='+`${idStore}`,options);
  }
  getAllproductQuantity(){
    const options = { withCredentials: true };
    return this.http.get<ProductQuantity[]>(this.urlgetAllproductQuantity,options)
  }
    ///add PickupSeller
  addPickup(p:Pickup,idOrder:number,idStore:number){
    const options = { withCredentials: true };
    return this.http.post<Pickup>(this.urlAddProduct+`${idOrder}`+'&IdSotre='+`${idStore}`,p,options);
  }
  GetShippingByOrder(idOrder:number){
    const options = { withCredentials: true };
    return this.http.get<Shipping>(this.urlGetShippingByOrder+`${idOrder}`,options);
   }
   GetBuyerByOrder(idOrder:number){
    const options = { withCredentials: true };
    return this.http.get<User>(this.urlGetBuyerByOrder+`${idOrder}`,options)
   }
   GetPickupBySellerWaiting(){
    const options = { withCredentials: true };
    return this.http.get<Pickup[]>(this.urlRetrievePickupWaitingBySeller,options);
  }
  DeletePickup(idPickup:number){
    const options = { withCredentials: true };
    return this.http.delete<Pickup>(this.urlDeletePickup+`${idPickup}`,options);
  }
  UpdatePickup(p:Pickup,idPickup:number){
    const options = { withCredentials: true };
    return this.http.put<Pickup>(this.urlupdatePickup+`${idPickup}`,p,options);
  }
  GetPickupById(idPickup:number){
    const options = { withCredentials: true };
     return this.http.get<Pickup>(this.urlGetPickupById+`${idPickup}`,options);
  }
  GetOrderByPickupId(idPickup:number){
    const options = { withCredentials: true };
    return this.http.get<Order>(this.urlGetOrderBiPickupId+`${idPickup}`,options);
  }
  GetShippingByPickupId(idPickup:number){
    const options = { withCredentials: true };
    return this.http.get<Shipping>(this.urlGetShippingByPickupId+`${idPickup}`,options);
  }
  GetBuyerByPickupId(idPickup:number){
    const options = { withCredentials: true };
    return this.http.get<User>(this.urlGetBuyerByPickupId+`${idPickup}`,options);
  }
    //Fct get User Connected
    getUser(){
      const options = { withCredentials: true };
      return this.http.get<User>(this.urlUser,options);
    }
    //////Component Store Of List
    //Stat Count To Seller
    CountPickupPending(){
      const options = { withCredentials: true };
     return this.http.get<number>(this.urlCountPickupPending,options)
    }
    CountPickupRefunbded(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupRefunbded,options)
    }
    CountPickupOnTheWay(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupOnTheWay,options)
    }
    CountPickupDeliverted(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupDeliverted,options)
    }
    CountPickupReturned(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupReturned,options)
    }
    urlCountPickupAssigned="http://localhost:8081/Pickup/countPickupAssignedSeller";
    CountPickupAssigned(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlCountPickupAssigned,options);
    }
    urlcountPickupTakedSeller="http://localhost:8081/Pickup/countPickupTakedSeller";
    CountPickupTakedSeller(){
      const options = { withCredentials: true };
      return this.http.get<number>(this.urlcountPickupTakedSeller,options);
    }
     //Agency

   //Url
   urlRetrievePickupBeTAgencyAndStore="http://localhost:8081/Pickup/RetrievePickupsbetweenAgencyBranchAndStoreInTheSomeGovernorat";
   RetrievePickupBeTAgencyAndStore(){
    const options = { withCredentials: true };
    return this.http.get<Pickup[]>(this.urlRetrievePickupBeTAgencyAndStore,options);
   }
   //stat
   countRequestRejectedTodayAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/Pickup/countRequestApprovedAgencyToday',options);
   }
   countRequestApprovedTodayAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/Pickup/countRequestRejectedAgencyToday',options);
   }
   countDeliveryMenInAllAgencyBranchesForAgench(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/AgencyBranch/countDeliveryMenInAllAgencyBranchesForAgench',options);
   }
   countAgencyBranchesInAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/AgencyBranch/countAgencyBranchesInAgency',options);
   }
   countRequestTotalForAgencyPending(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/RequestController/countRequestTotalForAgencyPending',options);
   }
   countRequestRejectForAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/RequestController/countRequestRejectForAgency',options);
   }
   countRequestApprovedForAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/RequestController/countRequestApprovedForAgency',options);
   }
   countPickupDeliveredForAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupDeliveredForAgency',options);
   }
   countPickupOnTheWayForAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupOnTheWayForAgency',options);
   }
   countPickupRefundedForAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupRefundedForAgency',options);
   }
   countPickupReturnedForAgency(){
    const options = { withCredentials: true };
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupReturnedForAgency',options);
   }
   countPickupAssignedForAgency(){
    const options={withCredentials:true};
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupAssignedForAgency',options);
   }
   countPickupTakedForAgency(){
    const options={withCredentials:true};
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupTakedForAgency',options);
   }

 //Freelancer Stat
 countRequestRejectedFreelancer(){
  const options = { withCredentials: true };
  return this.http.get<number>('http://localhost:8081/Pickup/countRequestRejectedDeliveryManFreelancerToday',options);
 }
 countRequestApprovedFreelancer(){
  const options = { withCredentials: true };
  return this.http.get<number>('http://localhost:8081/Pickup/countRequestApprovedDeliveryManFreelancerToday',options);
 }
 SumPricePickupDeliveredByFreelancerToday(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/SumPricePickupDeliveredByFreelancerToday',options);
 }
 countPickupDeliveredForfreelancer(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupDeliveredForfreelancer',options);
 }
 countPickupOnTheWayForfreelancer(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupOnTheWayForfreelancer',options);
 }
 countPickupRefundedForfreelancer(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupRefundedForfreelancer',options);
 }
 countPickupReturnedForfreelancer(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupReturnedForfreelancer',options);
 }
 countPickupAssignedForFreelancer(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupAssignedForFreelancer',options);
 }
 countPickupTakedForFreelancer(){
  const options={withCredentials:true};
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupTakedForFreelancer',options);
 }
 RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer(){
  const options={withCredentials:true};
  return this.http.get<Pickup[]>('http://localhost:8081/Pickup/RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer',options);
 }

//seller
urlRetrievePickupInProgress="http://localhost:8081/Pickup/RetrievePickupInProgress";
RetrievePickupInProgress(){
  const options={withCredentials:true};
 return this.http.get<Pickup[]>(this.urlRetrievePickupInProgress,options);
}
urlTrakingPickupBySeller="http://localhost:8081/Pickup/trakingbyseller?codePickup=";
TrakingPickupBySeller(codePickup:number){
  const options={withCredentials:true};
  return this.http.get<Pickup>(this.urlTrakingPickupBySeller+`${codePickup}`,options);
}
//freelancer
urlretrievePickupByDeliveryMenFreelancer="http://localhost:8081/Pickup/retrievePickupByDeliveryMenFreelancer";
retrievePickupByDeliveryMenFreelancer(){
const options={withCredentials:true};
return this.http.get<Pickup[]>(this.urlretrievePickupByDeliveryMenFreelancer,options)
}
urlModifyStatusOfPickupByDelivery="http://localhost:8081/Pickup/ModifyStatusOfPickupByDelivery?Status=";
ModifyStatusOfPickupByDelivery(status:String,idPickup:number){
const options={withCredentials:true};
return this.http.put<Pickup>(this.urlModifyStatusOfPickupByDelivery+`${status}`+"&idPickup="+`${idPickup}`,status,options);
}
url="http://localhost:8081/Pickup/RetrievePickup?id=";
RetrievePickupById(idPickup:number){
  const options = { withCredentials: true };
  return this.http.get<Pickup>(this.url+`${idPickup}`,options);
}
//seller
urlcountProductQuantityInOrderProduct="http://localhost:8081/Pickup/countProductQuantityInOrderProduct?idOrder=1&idProduct=1";
countProductQuantityInOrderProduct(idOrder:number,idProduct:number){
  const options = { withCredentials: true };
  return this.http.get<number>(this.urlcountProductQuantityInOrderProduct+`${idOrder}`+'&idProduct='+`${idProduct}`,options);
}

urlgetStoreByPickup="http://localhost:8081/Pickup/getStoreByPickup?idPickup=";
getStoreByPickup(idPickup:number){
const options = { withCredentials: true };
return this.http.get<Store>(this.urlgetStoreByPickup+`${idPickup}`,options);
}






//Freelancer
urlkilometreTotalConsommerParFreelancerDelivery="http://localhost:8081/Pickup/kilometreTotalConsommerParFreelancerDelivery";
kilometreTotalConsommerParFreelancerDelivery(){
  const options = { withCredentials:true };
return this.http.get<number>(this.urlkilometreTotalConsommerParFreelancerDelivery,options);
}

//Administrateur
urlcountPickupDeliveredTodayAdministrator="http://localhost:8081/Pickup/countPickupDeliveredTodayAdministrator";

countPickupDeliveredTodayAdministrator(){
  const options = { withCredentials:true };
  return this.http.get<number>(this.urlcountPickupDeliveredTodayAdministrator,options)
}
urlcountOfPickupDeliveredweekAdministrator="http://localhost:8081/Pickup/countOfPickupDeliveredweekAdministrator";
countOfPickupDeliveredweekAdministrator(){
  const options = { withCredentials:true };
  return this.http.get<number>(this.urlcountOfPickupDeliveredweekAdministrator,options);
}



urlSumOfPricePickupDeliveredToday="http://localhost:8081/Pickup/SumOfPricePickupDeliveredToday";

SumOfPricePickupDeliveredToday(){
  const options = { withCredentials:true };
  return this.http.get<number>(this.urlSumOfPricePickupDeliveredToday,options);
}

urlcountAllAgencyAdmin="http://localhost:8081/AgencyBranch/countAllAgencyAdmin";
countAllAgencyAdmin(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlcountAllAgencyAdmin,options);
}
urlgetNumberOfPickupByStatus="http://localhost:8081/Pickup/getNumberOfPickupByStatus";
getNumberOfPickupByStatus(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlgetNumberOfPickupByStatus,options);
}
urlgetNumberOfPickupByStatusByMonthAndYearAndAll="http://localhost:8081/Pickup/getNumberOfPickupByStatusByMonthAndYearAndAll";
getNumberOfPickupByStatusByMonthAndYearAndAll(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlgetNumberOfPickupByStatusByMonthAndYearAndAll,options);
}
urlpredict="http://localhost:8081/Pickup/predictc";
sendDataRegLineaire(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlpredict,options);
}
urlgetPredictCo2="http://localhost:8081/Pickup/predictco2?gearage=";
getPredictCo2(gearAge:number){
  const options = { withCredentials:true };
  return this.http.get<number>(this.urlgetPredictCo2+`${gearAge}`,options);
}
urlAllCo2User="http://localhost:8081/Pickup/AllCo2User";
AllCo2User(){
  const options = { withCredentials:true };
  return this.http.get<number>(this.urlAllCo2User,options);
}
urlgetNumberRequestsInMonth="http://localhost:8081/Pickup/getNumberRequestsInMonth";
getNumberRequestsInMonth(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlgetNumberRequestsInMonth,options);
}
urlgetNumberPickupsInMonth="http://localhost:8081/Pickup/getNumberPickupsInMonth";
getNumberPickupsInMonth(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlgetNumberPickupsInMonth,options);
 }
 urlRetrieveAllPickupsOfUser="http://localhost:8081/Pickup/RetrieveAllPickupsOfUser";
 RetrieveAllPickupsOfUser(){
  const options = { withCredentials:true };
  return this.http.get<Pickup[]>(this.urlRetrieveAllPickupsOfUser,options);
 }
urlRetrieveAllPickupsOfSeller="http://localhost:8081/Pickup/RetrieveAllPickupsOfSeller";
RetrieveAllPickupsOfSeller(){
  const options = { withCredentials:true };
  return this.http.get<Pickup[]>(this.urlRetrieveAllPickupsOfSeller,options);
}
//predict admin
urlpredictrequest="http://localhost:8081/Pickup/predictrequest";
preductRequest(){
  const options = { withCredentials:true };
  return this.http.get<any>(this.urlpredictrequest,options)
}
urlgetprdeuctRequest="http://localhost:8081/Pickup/predict/requedt?r=";
getprdeuctRequest(nbRequest:number){
  const options = { withCredentials:true };
 return this.http.get<number>(this.urlgetprdeuctRequest+`${nbRequest}`,options);
}
//seller
urlretrieveTheFreelancerOfPickup="http://localhost:8081/Pickup/retrieveTheFreelancerOfPickup?idPickup=";
retrieveTheFreelancerOfPickup(idPickup:number){
  const options = { withCredentials:true };
  return this.http.get<User>(this.urlretrieveTheFreelancerOfPickup+`${idPickup}`,options);
}
}
