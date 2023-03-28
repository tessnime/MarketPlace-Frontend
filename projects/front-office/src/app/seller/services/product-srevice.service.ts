import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'Models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSreviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8081/";

  getAllProducts(){
    const options = { withCredentials: true };
    return this.http.get(this.url+'product/GetAllProducts',options)
  }
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+'GetProductById?id='+id)
  }
  updateProduct(p:Product):Observable<Product>{
    return this.http.put<Product>(this.url+'UpdateProduct',p)

  }
  // deleteProduct(p:Product){
  //   return this.http.delete<Product>(this.url+'DeleteProduct',p.id)
  // }

  createAndAssignCategoryAndSubCategory(product: Product, categoryName: string, subCatName: string, storeName: string): Observable<Product> {
    return this.http.post<Product>(this.url+'CreateProductAndAssignCatAndSub?categoryName='+categoryName+'&subCatName='+subCatName+'&storeName='+storeName,product)

}
}
