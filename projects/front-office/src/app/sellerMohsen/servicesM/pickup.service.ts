import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Store[]>(this.urlstore,{headers});
    }
  countOrderByStoreNoPickup(idStore:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>(this.urlcountOrderByStoreNoPickup+`${idStore}`,{headers})
  }
  getOrderByStore(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Order[]>(this.urlorder+`${id}`,{headers});
  }
  GetOrderById(idOrder:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
       return this.http.get<Order>(this.urlGetOrderById+`${idOrder}`,{headers});
  }
  getListProductOfOrder(idOrder:number,idStore:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     return this.http.get<Product[]>(this.urlgetListProductOfOrder+`${idOrder}`+'&idStore='+`${idStore}`,{headers});
  }
  getSumPriceProductOfOrder(idOrder:number,idStore:number)
  {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     return this.http.get<number>(this.urlgetSumPriceProductOfOrder+`${idOrder}`+'&idStore='+`${idStore}`,{headers});
  }
  getAllproductQuantity(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ProductQuantity[]>(this.urlgetAllproductQuantity,{headers})
  }
    ///add PickupSeller
  addPickup(p:Pickup,idOrder:number,idStore:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Pickup>(this.urlAddProduct+`${idOrder}`+'&IdSotre='+`${idStore}`,p,{headers});
  }
  GetShippingByOrder(idOrder:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Shipping>(this.urlGetShippingByOrder+`${idOrder}`,{headers});
   }
   GetBuyerByOrder(idOrder:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User>(this.urlGetBuyerByOrder+`${idOrder}`,{headers})
   }
   GetPickupBySellerWaiting(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Pickup[]>(this.urlRetrievePickupWaitingBySeller,{headers});
  }
  DeletePickup(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Pickup>(this.urlDeletePickup+`${idPickup}`,{headers});
  }
  UpdatePickup(p:Pickup,idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Pickup>(this.urlupdatePickup+`${idPickup}`,p,{headers});
  }
  GetPickupById(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
     return this.http.get<Pickup>(this.urlGetPickupById+`${idPickup}`,{headers});
  }
  GetOrderByPickupId(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Order>(this.urlGetOrderBiPickupId+`${idPickup}`,{headers});
  }
  GetShippingByPickupId(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Shipping>(this.urlGetShippingByPickupId+`${idPickup}`,{headers});
  }
  GetBuyerByPickupId(idPickup:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User>(this.urlGetBuyerByPickupId+`${idPickup}`,{headers});
  }
    //Fct get User Connected
    getUser(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<User>(this.urlUser,{headers});
    }
    //////Component Store Of List
    //Stat Count To Seller
    CountPickupPending(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
     return this.http.get<number>(this.urlCountPickupPending,{headers})
    }
    CountPickupRefunbded(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<number>(this.urlCountPickupRefunbded,{headers})
    }
    CountPickupOnTheWay(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<number>(this.urlCountPickupOnTheWay,{headers})
    }
    CountPickupDeliverted(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<number>(this.urlCountPickupDeliverted,{headers})
    }
    CountPickupReturned(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<number>(this.urlCountPickupReturned,{headers})
    }
    urlCountPickupAssigned="http://localhost:8081/Pickup/countPickupAssignedSeller";
    CountPickupAssigned(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<number>(this.urlCountPickupAssigned,{headers});
    }
    urlcountPickupTakedSeller="http://localhost:8081/Pickup/countPickupTakedSeller";
    CountPickupTakedSeller(){
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<number>(this.urlcountPickupTakedSeller,{headers});
    }
     //Agency

   //Url
   urlRetrievePickupBeTAgencyAndStore="http://localhost:8081/Pickup/RetrievePickupsbetweenAgencyBranchAndStoreInTheSomeGovernorat";
   RetrievePickupBeTAgencyAndStore(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Pickup[]>(this.urlRetrievePickupBeTAgencyAndStore,{headers});
   }
   //stat
   countRequestRejectedTodayAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countRequestApprovedAgencyToday',{headers});
   }
   countRequestApprovedTodayAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countRequestRejectedAgencyToday',{headers});
   }
   countDeliveryMenInAllAgencyBranchesForAgench(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/AgencyBranch/countDeliveryMenInAllAgencyBranchesForAgench',{headers});
   }
   countAgencyBranchesInAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/AgencyBranch/countAgencyBranchesInAgency',{headers});
   }
   countRequestTotalForAgencyPending(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/RequestController/countRequestTotalForAgencyPending',{headers});
   }
   countRequestRejectForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/RequestController/countRequestRejectForAgency',{headers});
   }
   countRequestApprovedForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/RequestController/countRequestApprovedForAgency',{headers});
   }
   countPickupDeliveredForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupDeliveredForAgency',{headers});
   }
   countPickupOnTheWayForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupOnTheWayForAgency',{headers});
   }
   countPickupRefundedForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupRefundedForAgency',{headers});
   }
   countPickupReturnedForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupReturnedForAgency',{headers});
   }
   countPickupAssignedForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupAssignedForAgency',{headers});
   }
   countPickupTakedForAgency(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>('http://localhost:8081/Pickup/countPickupTakedForAgency',{headers});
   }

 //Freelancer Stat
 countRequestRejectedFreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countRequestRejectedDeliveryManFreelancerToday',{headers});
 }
 countRequestApprovedFreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countRequestApprovedDeliveryManFreelancerToday',{headers});
 }
 SumPricePickupDeliveredByFreelancerToday(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/SumPricePickupDeliveredByFreelancerToday',{headers});
 }
 countPickupDeliveredForfreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupDeliveredForfreelancer',{headers});
 }
 countPickupOnTheWayForfreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupOnTheWayForfreelancer',{headers});
 }
 countPickupRefundedForfreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupRefundedForfreelancer',{headers});
 }
 countPickupReturnedForfreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupReturnedForfreelancer',{headers});
 }
 countPickupAssignedForFreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupAssignedForFreelancer',{headers});
 }
 countPickupTakedForFreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>('http://localhost:8081/Pickup/countPickupTakedForFreelancer',{headers});
 }
 RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Pickup[]>('http://localhost:8081/Pickup/RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer',{headers});
 }

//seller
urlRetrievePickupInProgress="http://localhost:8081/Pickup/RetrievePickupInProgress";
RetrievePickupInProgress(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
 return this.http.get<Pickup[]>(this.urlRetrievePickupInProgress,{headers});
}
urlTrakingPickupBySeller="http://localhost:8081/Pickup/trakingbyseller?codePickup=";
TrakingPickupBySeller(codePickup:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Pickup>(this.urlTrakingPickupBySeller+`${codePickup}`,{headers});
}
//freelancer
urlretrievePickupByDeliveryMenFreelancer="http://localhost:8081/Pickup/retrievePickupByDeliveryMenFreelancer";
retrievePickupByDeliveryMenFreelancer(){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
return this.http.get<Pickup[]>(this.urlretrievePickupByDeliveryMenFreelancer,{headers})
}
urlModifyStatusOfPickupByDelivery="http://localhost:8081/Pickup/ModifyStatusOfPickupByDelivery?Status=";
ModifyStatusOfPickupByDelivery(status:String,idPickup:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
return this.http.put<Pickup>(this.urlModifyStatusOfPickupByDelivery+`${status}`+"&idPickup="+`${idPickup}`,status,{headers});
}
url="http://localhost:8081/Pickup/RetrievePickup?id=";
RetrievePickupById(idPickup:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Pickup>(this.url+`${idPickup}`,{headers});
}
//seller
urlcountProductQuantityInOrderProduct="http://localhost:8081/Pickup/countProductQuantityInOrderProduct?idOrder=1&idProduct=1";
countProductQuantityInOrderProduct(idOrder:number,idProduct:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<number>(this.urlcountProductQuantityInOrderProduct+`${idOrder}`+'&idProduct='+`${idProduct}`,{headers});
}

urlgetStoreByPickup="http://localhost:8081/Pickup/getStoreByPickup?idPickup=";
getStoreByPickup(idPickup:number){
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
return this.http.get<Store>(this.urlgetStoreByPickup+`${idPickup}`,{headers});
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
