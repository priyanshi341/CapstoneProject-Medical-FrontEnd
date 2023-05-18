import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private uriapi='http://localhost:8080/product';
  constructor(private http:HttpClient) { }

  saveproduct(product:Product):Observable<object>
  {
    return this.http.post(`${this.uriapi}`,product);
  }

  getallproducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.uriapi}`);
  }
  getsingleproduct(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.uriapi}/${id}`);
  }
  updateproduct(product:Product,id:number):Observable<object>
  {
    return this.http.put(`${this.uriapi}/${id}`,product);
  }

  deleteproduct(id:number):Observable<object>
  {
    return this.http.delete(`${this.uriapi}/${id}`);
  }
}
